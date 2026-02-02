const scrollButtons = document.querySelectorAll('[data-scroll], .nav-links a');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const yearEl = document.getElementById('year');

const smoothScroll = target => {
  const el = document.querySelector(target);
  if (!el) return;
  const offsetTop = el.getBoundingClientRect().top + window.scrollY - 60;
  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
};

scrollButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const target = btn.dataset.scroll || btn.getAttribute('href');
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
    }
    smoothScroll(target);
  });
});

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
