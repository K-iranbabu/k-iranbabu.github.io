const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('kiran-theme');

function applyTheme(theme) {
  const dark = theme === 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.body.classList.toggle('dark-mode', dark);
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  themeToggle.querySelector('.theme-icon').textContent = dark ? '☀' : '☾';
  themeToggle.querySelector('.theme-label').textContent = dark ? 'Light' : 'Dark';
}

applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('kiran-theme', nextTheme);
  applyTheme(nextTheme);
});
