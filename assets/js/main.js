const html = document.querySelector('html');
const toggle = document.getElementById('toggle');

toggle.addEventListener("click", () => {
  const theme = html.dataset.theme
  html.dataset.theme = theme == 'dark' ? 'light' : 'dark'
})