// ── Theme Toggle ──
const html = document.documentElement;
const btn  = document.getElementById('themeBtn');
const icon = document.getElementById('themeIcon');
const saved = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', saved);
icon.className = saved === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';

btn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  icon.className = next === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
});

// ── Reveal on scroll ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Skill bars ──
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(fill => {
        fill.style.width = fill.dataset.pct + '%';
      });
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('#skills .col-lg-8').forEach(el => barObserver.observe(el));

// ── Active nav link ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(l => {
    l.classList.toggle('active-link', l.getAttribute('href') === '#' + current);
  });
});
