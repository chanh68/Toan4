const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 3000);
const ROOT_DIR = __dirname;
const GAMES_DIR = path.join(ROOT_DIR, 'games');
const DATA_DIR = path.join(ROOT_DIR, 'data');
const DATA_FILE = path.join(DATA_DIR, 'games.json');

const MAX_UPLOAD_BYTES = 25 * 1024 * 1024; // 25 MB max JSON payload

const COLOR_PRESETS = [
  'from-sky-400 to-cyan-400',
  'from-rose-400 to-pink-400',
  'from-emerald-400 to-teal-400',
  'from-amber-400 to-orange-400',
  'from-violet-400 to-purple-400'
];

function ensureDirs() {
  if (!fs.existsSync(GAMES_DIR)) fs.mkdirSync(GAMES_DIR, { recursive: true });
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, '[]', 'utf8');
}

function readCatalog() {
  ensureDirs();
  let list = [];
  try {
    list = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    if (!Array.isArray(list)) list = [];
  } catch (e) {
    list = [];
  }

  // Filter out broken local file entries, keep valid externalUrl entries, and auto-discover unindexed .html files in games/
  const existingFiles = new Set(
    fs.readdirSync(GAMES_DIR).filter(f => f.toLowerCase().endsWith('.html'))
  );

  const byFilename = new Map();
  const synced = [];
  for (const item of list) {
    if (item && item.externalUrl) {
      synced.push({ ...item });
    } else if (item && item.filename && existingFiles.has(item.filename)) {
      const stats = fs.statSync(path.join(GAMES_DIR, item.filename));
      const enriched = { ...item, sizeBytes: stats.size };
      synced.push(enriched);
      byFilename.set(item.filename, enriched);
    }
  }

  for (const filename of existingFiles) {
    if (!byFilename.has(filename)) {
      const stats = fs.statSync(path.join(GAMES_DIR, filename));
      const id = filename.replace(/\.html$/i, '');
      const inferred = {
        id,
        title: id.replace(/[_-]+/g, ' '),
        subtitle: 'Trò chơi HTML tự động nhận diện từ thư mục games/',
        category: 'Khác',
        grade: 'Toán 4',
        icon: '🎮',
        color: COLOR_PRESETS[synced.length % COLOR_PRESETS.length],
        filename,
        sizeBytes: stats.size,
        createdAt: stats.mtime.toISOString()
      };
      synced.push(inferred);
    }
  }

  return synced;
}

function writeCatalog(list) {
  ensureDirs();
  const clean = list.map(({ sizeBytes, ...rest }) => rest);
  fs.writeFileSync(DATA_FILE, JSON.stringify(clean, null, 2), 'utf8');
}

function sendJson(res, status, data) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  res.end(JSON.stringify(data));
}

function slugifyFilename(name) {
  const base = name
    .replace(/\.html?$/i, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
  return base || `game_${Date.now()}`;
}

function collectJsonBody(req) {
  return new Promise((resolve, reject) => {
    let total = 0;
    const chunks = [];
    req.on('data', chunk => {
      total += chunk.length;
      if (total > MAX_UPLOAD_BYTES) {
        reject(new Error('File quá lớn (tối đa 25 MB).'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8');
        resolve(JSON.parse(raw));
      } catch (err) {
        reject(new Error('Dữ liệu gửi lên không hợp lệ.'));
      }
    });
    req.on('error', reject);
  });
}

function renderPlayerWrapper(game) {
  const safeTitle = String(game.title || 'Trò chơi').replace(/[<>&"]/g, '');
  const safeIcon = String(game.icon || '🎮').replace(/[<>&"]/g, '');
  const rawUrl = `/games/${encodeURIComponent(game.filename)}`;
  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${safeTitle} - Kho Game Giáo Viên</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@500;700;800&display=swap" rel="stylesheet">
  <style>
    html, body { height: 100%; margin: 0; font-family: 'Lexend', sans-serif; }
  </style>
</head>
<body class="flex flex-col h-screen bg-slate-100 overflow-hidden">
  <div class="bg-white border-b border-slate-200 px-3 sm:px-5 py-2 flex items-center justify-between gap-2 shadow-sm shrink-0">
    <div class="flex items-center gap-2 min-w-0">
      <a href="/" class="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm px-3 py-1.5 rounded-xl whitespace-nowrap transition">
        ⬅️ Kho Game
      </a>
      <span class="text-lg shrink-0">${safeIcon}</span>
      <span class="font-extrabold text-xs sm:text-sm text-slate-900 truncate">${safeTitle}</span>
    </div>
    <div class="flex items-center gap-2 shrink-0">
      <button id="btn-copy" type="button" class="bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs px-3 py-1.5 rounded-xl whitespace-nowrap transition">
        🔗 Copy Link gửi HS
      </button>
      <a href="/bai-hoc/${encodeURIComponent(game.id)}" target="_blank" rel="noopener" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3 py-1.5 rounded-xl whitespace-nowrap transition">
        ⛶ Mở trang Học sinh
      </a>
    </div>
  </div>
  <iframe id="game-frame"
          src="${rawUrl}"
          sandbox="allow-scripts allow-forms allow-modals allow-popups allow-downloads"
          class="w-full flex-1 border-0 bg-white"></iframe>
  <script>
    document.getElementById('btn-copy').addEventListener('click', async () => {
      const studentShareUrl = new URL('/bai-hoc/${encodeURIComponent(game.id)}', window.location.origin).href;
      try {
        await navigator.clipboard.writeText(studentShareUrl);
        document.getElementById('btn-copy').textContent = '✅ Đã chép link gửi HS!';
        setTimeout(() => { document.getElementById('btn-copy').textContent = '🔗 Copy Link gửi HS'; }, 2000);
      } catch (e) {
        prompt('Sao chép liên kết độc lập này gửi cho học sinh:', studentShareUrl);
      }
    });
  </script>
</body>
</html>`;
}

const server = http.createServer(async (req, res) => {
  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const pathname = decodeURIComponent(parsedUrl.pathname);

    // 1. API: List games
    if (req.method === 'GET' && pathname === '/api/games') {
      const list = readCatalog();
      return sendJson(res, 200, { ok: true, games: list });
    }

    // 2. API: Add a new lesson (either by HTML file upload OR external URL link)
    if (req.method === 'POST' && pathname === '/api/games') {
      const body = await collectJsonBody(req);
      const rawTitle = (body.title || '').trim();
      const externalUrl = (body.externalUrl || '').trim();
      const list = readCatalog();

      if (externalUrl) {
        if (!/^https?:\/\//i.test(externalUrl)) {
          return sendJson(res, 400, { ok: false, error: 'Đường dẫn phải bắt đầu bằng https:// hoặc http://' });
        }
        let baseSlug = slugifyFilename(rawTitle || `bai_hoc_${Date.now()}`);
        let finalSlug = baseSlug;
        let counter = 2;
        while (list.some(g => g.id === finalSlug)) {
          finalSlug = `${baseSlug}_${counter++}`;
        }
        const newEntry = {
          id: finalSlug,
          title: rawTitle || 'Học liệu trực tuyến',
          subtitle: (body.subtitle || 'Liên kết bài học trên Google Sites / Web').trim(),
          category: (body.category || 'Bổ sung').trim(),
          grade: (body.grade || 'Toán 4').trim(),
          icon: (body.icon || '🔗').trim(),
          color: body.color || COLOR_PRESETS[list.length % COLOR_PRESETS.length],
          externalUrl,
          createdAt: new Date().toISOString()
        };
        writeCatalog([newEntry, ...list]);
        return sendJson(res, 201, { ok: true, game: newEntry });
      }

      const htmlContent = typeof body.htmlContent === 'string' ? body.htmlContent : '';
      const rawFilename = (body.filename || rawTitle || 'game').trim();

      if (!htmlContent || (!htmlContent.toLowerCase().includes('<html') && !htmlContent.toLowerCase().includes('<!doctype'))) {
        return sendJson(res, 400, { ok: false, error: 'Tệp tải lên phải là file .html hợp lệ (có thẻ <html> hoặc <!DOCTYPE>).' });
      }

      let baseSlug = slugifyFilename(rawFilename);
      let finalSlug = baseSlug;
      let counter = 2;
      while (fs.existsSync(path.join(GAMES_DIR, `${finalSlug}.html`))) {
        finalSlug = `${baseSlug}_${counter++}`;
      }

      const finalFilename = `${finalSlug}.html`;
      const targetPath = path.join(GAMES_DIR, finalFilename);
      fs.writeFileSync(targetPath, htmlContent, 'utf8');
      const stats = fs.statSync(targetPath);

      const newEntry = {
        id: finalSlug,
        title: rawTitle || finalSlug.replace(/_/g, ' '),
        subtitle: (body.subtitle || 'Học liệu HTML mới đăng tải').trim(),
        category: (body.category || 'Bổ sung').trim(),
        grade: (body.grade || 'Toán 4').trim(),
        icon: (body.icon || '📘').trim(),
        color: body.color || COLOR_PRESETS[list.length % COLOR_PRESETS.length],
        filename: finalFilename,
        createdAt: new Date().toISOString()
      };

      const updated = [newEntry, ...list];
      writeCatalog(updated);

      return sendJson(res, 201, {
        ok: true,
        game: { ...newEntry, sizeBytes: stats.size }
      });
    }

    // 3. API: Delete a game entry (optional deleteFile=1)
    if (req.method === 'DELETE' && pathname.startsWith('/api/games/')) {
      const id = pathname.slice('/api/games/'.length);
      const list = readCatalog();
      const target = list.find(g => g.id === id);
      if (!target) return sendJson(res, 404, { ok: false, error: 'Không tìm thấy trò chơi.' });

      const deleteFile = parsedUrl.searchParams.get('deleteFile') === '1';
      if (deleteFile && target.filename) {
        const filePath = path.join(GAMES_DIR, path.basename(target.filename));
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      }
      const remaining = list.filter(g => g.id !== id);
      writeCatalog(remaining);
      return sendJson(res, 200, { ok: true });
    }

    // 4. Teacher preview wrapper route (/play/:id)
    if (req.method === 'GET' && pathname.startsWith('/play/')) {
      const id = pathname.slice('/play/'.length);
      const list = readCatalog();
      const game = list.find(g => g.id === id);
      if (!game) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('Không tìm thấy học liệu này.');
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(renderPlayerWrapper(game));
    }

    // 4b. Isolated Student route (/bai-hoc/:id) - ONLY shows this single lesson, NO back link to catalog
    if (req.method === 'GET' && pathname.startsWith('/bai-hoc/')) {
      const id = pathname.slice('/bai-hoc/'.length);
      const list = readCatalog();
      const game = list.find(g => g.id === id);
      if (!game) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('Không tìm thấy bài học này.');
      }
      const fullPath = path.join(GAMES_DIR, path.basename(game.filename));
      if (!fs.existsSync(fullPath)) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('Không tìm thấy tệp bài học.');
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return fs.createReadStream(fullPath).pipe(res);
    }

    // 5. Raw HTML game file (/games/:filename)
    if (req.method === 'GET' && pathname.startsWith('/games/')) {
      const safeName = path.basename(pathname.slice('/games/'.length));
      if (!safeName.toLowerCase().endsWith('.html')) {
        res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('Chỉ phục vụ tệp HTML.');
      }
      const fullPath = path.join(GAMES_DIR, safeName);
      if (!fs.existsSync(fullPath)) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('Không tìm thấy tệp HTML.');
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return fs.createReadStream(fullPath).pipe(res);
    }

    // 6. Hub Home Page
    if (req.method === 'GET' && (pathname === '/' || pathname === '/index.html')) {
      const indexPath = path.join(ROOT_DIR, 'index.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return fs.createReadStream(indexPath).pipe(res);
    }

    if (req.method === 'GET' && pathname === '/data/games.json') {
      return sendJson(res, 200, readCatalog());
    }

    if (req.method === 'GET' && pathname === '/logo.jpg') {
      const logoPath = path.join(ROOT_DIR, 'logo.jpg');
      if (fs.existsSync(logoPath)) {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        return fs.createReadStream(logoPath).pipe(res);
      }
    }

    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Không tìm thấy trang.');
  } catch (err) {
    sendJson(res, 500, { ok: false, error: err.message || 'Lỗi máy chủ.' });
  }
});

if (require.main === module) {
  ensureDirs();
  const HOST = process.env.HOST || '0.0.0.0';
  server.listen(PORT, HOST, () => {
    console.log(`Kho Game Giao Vien dang chay tai: http://localhost:${PORT}`);
  });
}

module.exports = { server, readCatalog, slugifyFilename };
