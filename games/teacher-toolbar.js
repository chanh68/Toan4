/**
 * Teacher Admin Toolbar & Progression Bypass (V2)
 * Mở khóa 100% các chặng cho giáo viên Trường TH & THCS Thụy Lâm
 */
(function () {
  function checkIsAdmin() {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('mode') === 'admin') return true;
      const raw = localStorage.getItem('toan4_admin_session');
      if (!raw) return false;
      const session = JSON.parse(raw);
      return Boolean(session && session.isAdmin);
    } catch (e) {
      return false;
    }
  }

  if (!checkIsAdmin()) return; // Học sinh / Guest: giữ nguyên luật chơi tuần tự

  function ensureRegistered() {
    try {
      if (typeof window.appState === 'object' && window.appState !== null) {
        window.appState.hasRegistered = true;
        if (!window.appState.student || !window.appState.student.name) {
          window.appState.student = {
            name: 'Cô Trần Thị Hoan',
            class: 'Toán 4',
            school: 'Trường TH & THCS Thụy Lâm'
          };
        }
        const bName = document.getElementById('badge-name') || document.getElementById('badge-student-name');
        if (bName) bName.textContent = window.appState.student.name;
        const bClass = document.getElementById('badge-class') || document.getElementById('badge-student-class');
        if (bClass) bClass.textContent = window.appState.student.class;
      }
    } catch (e) {}
  }

  function unlockAllStages() {
    ensureRegistered();
    try {
      if (typeof window.appState === 'object' && window.appState !== null) {
        window.appState.unlockedStages = [1, 2, 3, 4, 5];
        if (typeof window.updateScoreDisplays === 'function') {
          window.updateScoreDisplays();
        }
      }

      // Mở khóa toàn bộ nút chặng trên bản đồ
      document.querySelectorAll('.road-stop, [data-stage]').forEach(btn => {
        btn.removeAttribute('disabled');
        btn.classList.remove('locked', 'opacity-50', 'opacity-60', 'pointer-events-none');
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
        btn.style.filter = 'none';

        const iconSpan = btn.querySelector('[id^="stop-icon-"]');
        if (iconSpan && iconSpan.textContent.includes('🔒')) {
          const stg = btn.dataset.stage;
          const icons = { '1': '🍉', '2': '🌽', '3': '🥕', '4': '🍇', '5': '🏆' };
          iconSpan.textContent = icons[stg] || '⭐';
        }
      });

      // Mở nút vào chặng tiếp
      const resumeBtn = document.getElementById('btn-resume-journey');
      if (resumeBtn) {
        resumeBtn.removeAttribute('disabled');
      }
    } catch (err) {
      console.warn('Teacher unlock error:', err);
    }
  }

  // Chuyển thẳng vào một chặng bất kỳ
  function jumpToStage(stageNum) {
    unlockAllStages();
    if (typeof window.openStage === 'function') {
      window.openStage(stageNum);
    } else if (stageNum === 5 && typeof window.showStage5 === 'function') {
      window.showStage5();
    }
  }

  // Bắt sự kiện click trên bản đồ lộ trình (Capture phase: chặn handler khóa cũ của game)
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.road-stop, [data-stage]');
    if (btn && checkIsAdmin()) {
      const stageNum = parseInt(btn.dataset.stage, 10);
      if (stageNum >= 1 && stageNum <= 5) {
        e.stopImmediatePropagation();
        e.preventDefault();
        jumpToStage(stageNum);
      }
    }
  }, true);

  function createToolbar() {
    if (document.getElementById('teacher-admin-toolbar')) return;

    const bar = document.createElement('div');
    bar.id = 'teacher-admin-toolbar';
    bar.style.cssText = `
      position: fixed;
      bottom: 14px;
      right: 14px;
      z-index: 999999;
      background: rgba(15, 23, 42, 0.96);
      color: #ffffff;
      padding: 6px 10px;
      border-radius: 9999px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 6px;
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 11px;
      font-weight: 800;
      box-shadow: 0 10px 30px rgba(0,0,0,0.4);
      backdrop-filter: blur(8px);
      border: 2px solid rgba(251, 191, 36, 0.8);
      max-width: calc(100vw - 28px);
    `;

    bar.innerHTML = `
      <span style="display:flex;align-items:center;gap:3px;color:#fbbf24;padding:0 4px;">
        <span>👑</span> <span>GV:</span>
      </span>
      <button type="button" id="btn-gv-s1" title="Vào Chặng 1" style="background:#334155;color:#fff;border:none;padding:5px 8px;border-radius:8px;cursor:pointer;font-weight:800;font-size:11px;">1️⃣ C1</button>
      <button type="button" id="btn-gv-s2" title="Vào Chặng 2" style="background:#0284c7;color:#fff;border:none;padding:5px 8px;border-radius:8px;cursor:pointer;font-weight:800;font-size:11px;">2️⃣ C2</button>
      <button type="button" id="btn-gv-s3" title="Vào Chặng 3" style="background:#0284c7;color:#fff;border:none;padding:5px 8px;border-radius:8px;cursor:pointer;font-weight:800;font-size:11px;">3️⃣ C3</button>
      <button type="button" id="btn-gv-s4" title="Vào Chặng 4" style="background:#0284c7;color:#fff;border:none;padding:5px 8px;border-radius:8px;cursor:pointer;font-weight:800;font-size:11px;">4️⃣ C4</button>
      <button type="button" id="btn-gv-s5" title="Mở Giấy khen & Cúp" style="background:#f59e0b;color:#1e1b4b;border:none;padding:5px 10px;border-radius:8px;cursor:pointer;font-weight:800;font-size:11px;">🏆 Giấy khen</button>
      <button type="button" id="btn-gv-map" title="Về Bản đồ chặng" style="background:#475569;color:#fff;border:none;padding:5px 8px;border-radius:8px;cursor:pointer;font-weight:800;font-size:11px;">🗺️ Bản đồ</button>
      <a href="../index.html?mode=admin" style="background:#1e293b;color:#94a3b8;border:1px solid #475569;text-decoration:none;padding:5px 8px;border-radius:8px;font-weight:800;font-size:11px;">🏠 Cổng</a>
    `;

    document.body.appendChild(bar);

    document.getElementById('btn-gv-s1').addEventListener('click', () => jumpToStage(1));
    document.getElementById('btn-gv-s2').addEventListener('click', () => jumpToStage(2));
    document.getElementById('btn-gv-s3').addEventListener('click', () => jumpToStage(3));
    document.getElementById('btn-gv-s4').addEventListener('click', () => jumpToStage(4));
    document.getElementById('btn-gv-s5').addEventListener('click', () => jumpToStage(5));
    document.getElementById('btn-gv-map').addEventListener('click', () => {
      unlockAllStages();
      if (typeof window.showScreen === 'function') {
        window.showScreen('roadmap');
      }
    });
  }

  function init() {
    unlockAllStages();
    createToolbar();
    // Đồng bộ mở khóa liên tục nếu trò chơi cập nhật lại DOM
    setInterval(unlockAllStages, 800);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
