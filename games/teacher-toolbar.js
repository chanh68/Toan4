/**
 * Teacher Admin Toolbar & Progression Bypass
 * Dành riêng cho giáo viên Trường TH & THCS Thụy Lâm khi trình chiếu / giảng dạy / dự thi
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

  function forceUnlockAllStages() {
    try {
      // 1. Ghi đè trạng thái trong appState
      if (typeof window.appState === 'object' && window.appState !== null) {
        window.appState.hasRegistered = true;
        if (!window.appState.student || !window.appState.student.name) {
          window.appState.student = { name: 'Giáo viên', class: 'Toán 4', school: 'Trường TH & THCS Thụy Lâm' };
        }
        window.appState.unlockedStages = [1, 2, 3, 4, 5];
        if (typeof window.updateScoreDisplays === 'function') {
          window.updateScoreDisplays();
        }
      }

      // 2. Mở khóa toàn bộ nút chặng trên DOM
      document.querySelectorAll('.road-stop, [data-stage]').forEach(btn => {
        btn.removeAttribute('disabled');
        btn.classList.remove('locked', 'opacity-50', 'opacity-60', 'pointer-events-none');
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
        btn.style.filter = 'none';

        // Đổi biểu tượng ổ khóa sang biểu tượng chặng
        const iconSpan = btn.querySelector('[id^="stop-icon-"]');
        if (iconSpan && iconSpan.textContent.includes('🔒')) {
          const stg = btn.dataset.stage;
          const icons = { '1': '🍉', '2': '🌽', '3': '🥕', '4': '🍇', '5': '🏆' };
          iconSpan.textContent = icons[stg] || '⭐';
        }
      });

      // 3. Mở khóa nút tiếp tục
      const resumeBtn = document.getElementById('btn-resume-journey');
      if (resumeBtn) {
        resumeBtn.removeAttribute('disabled');
      }
    } catch (err) {
      console.warn('Teacher unlock error:', err);
    }
  }

  function init() {
    forceUnlockAllStages();
    setInterval(forceUnlockAllStages, 1000);

    // Tạo thanh công cụ nổi dành cho Giáo viên
    if (document.getElementById('teacher-admin-toolbar')) return;

    const bar = document.createElement('div');
    bar.id = 'teacher-admin-toolbar';
    bar.style.cssText = `
      position: fixed;
      bottom: 16px;
      right: 16px;
      z-index: 99999;
      background: rgba(15, 23, 42, 0.94);
      color: #ffffff;
      padding: 8px 14px;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 12px;
      font-weight: 800;
      box-shadow: 0 12px 32px rgba(0,0,0,0.35);
      backdrop-filter: blur(8px);
      border: 2px solid rgba(251, 191, 36, 0.6);
    `;

    bar.innerHTML = `
      <span style="display:flex;align-items:center;gap:4px;color:#fbbf24;">
        <span>👑</span> <span>Chế độ Giáo viên</span>
      </span>
      <button type="button" id="btn-gv-stages" title="Mở khóa tất cả chặng" style="background:#0284c7;color:#fff;border:none;padding:5px 11px;border-radius:12px;cursor:pointer;font-weight:800;font-size:11px;display:flex;align-items:center;gap:4px;transition:transform 0.15s;">
        <span>🔓</span> <span>Mở hết chặng</span>
      </button>
      <button type="button" id="btn-gv-cert" title="Xem màn hình Giấy khen & Cúp" style="background:#f59e0b;color:#1e1b4b;border:none;padding:5px 11px;border-radius:12px;cursor:pointer;font-weight:800;font-size:11px;display:flex;align-items:center;gap:4px;transition:transform 0.15s;">
        <span>🏅</span> <span>Xem Giấy khen</span>
      </button>
      <a href="../index.html?mode=admin" style="background:#334155;color:#fff;text-decoration:none;padding:5px 11px;border-radius:12px;font-weight:800;font-size:11px;display:flex;align-items:center;gap:4px;">
        <span>🏠</span> <span>Về cổng</span>
      </a>
    `;

    document.body.appendChild(bar);

    document.getElementById('btn-gv-stages').addEventListener('click', () => {
      forceUnlockAllStages();
      if (typeof window.showScreen === 'function') {
        window.showScreen('roadmap');
      }
      alert('Đã mở khóa 100% các chặng! Cô có thể bấm trực tiếp vào bất kỳ chặng nào trên bản đồ để giảng dạy.');
    });

    document.getElementById('btn-gv-cert').addEventListener('click', () => {
      forceUnlockAllStages();
      if (typeof window.openStage === 'function') {
        window.openStage(5);
      } else if (typeof window.showScreen === 'function') {
        window.showScreen('stage5');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
