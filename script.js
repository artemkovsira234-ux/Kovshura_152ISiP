const btn = document.getElementById('theme-toggle');
const body = document.body;

btn.onclick = () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    btn.textContent = '🌙 Тёмная';
  } else {
    body.classList.add('dark');
    btn.textContent = '☀️ Светлая';
  }
};
