// Nav active state
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(r => obs.observe(r));

  // Modal
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    const modal = overlay.querySelector('.modal');
    document.querySelectorAll('[data-modal]').forEach(el => {
      el.addEventListener('click', () => {
        const data = JSON.parse(el.getAttribute('data-modal'));
        modal.querySelector('h3').textContent = data.title;
        modal.querySelector('.modal-meta').textContent = data.year + (data.director ? ' · ' + data.director : '');
        modal.querySelector('.stars').textContent = data.stars || '';
        const reviewEl = modal.querySelector('.review');
        if (data.note) {
          reviewEl.textContent = data.note;
          reviewEl.style.display = 'block';
        } else {
          reviewEl.style.display = 'none';
        }
        overlay.classList.add('open');
      });
    });
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') overlay.classList.remove('open');
    });
  }
});

// Tabs
function initTabs(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const tabs = container.querySelectorAll('.tab');
  const panels = container.querySelectorAll('[data-panel]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.getAttribute('data-tab');
      panels.forEach(p => {
        p.style.display = p.getAttribute('data-panel') === target ? 'block' : 'none';
      });
    });
  });
}

// Stars helper
function stars(rating) {
  if (!rating) return '';
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return '★'.repeat(full) + (half ? '½' : '');
}