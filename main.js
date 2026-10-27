const toggle = document.querySelector('.menu-toggle');
const header = document.querySelector('.site-header');
toggle.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.main-nav a').forEach(a =>
  a.addEventListener('click', () => {
    header.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);
document.getElementById('year').textContent = new Date().getFullYear();

// Contact page: preselect the inquiry type from ?type=
const params = new URLSearchParams(location.search);
const inquiry = document.getElementById('inquiry-type');
if (inquiry && params.get('type')) {
  const opt = inquiry.querySelector(`option[data-key="${params.get('type')}"]`);
  if (opt) opt.selected = true;
}

// Thank-you page: message for House of Brammer signups
const thanks = document.getElementById('thanks-msg');
if (thanks && params.get('form') === 'society') {
  thanks.textContent = 'Welcome to House of Brammer. You will be the first to hear our news.';
}
