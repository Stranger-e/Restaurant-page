export function aboutInfo() {
  const container = document.getElementById('content');

  const info = document.createElement('div');
  info.classList.add('about-page-info');
  container.appendChild(info);

  const aboutHead = document.createElement('h1');
  aboutHead.innerHTML = 'ABOUT US';
  info.appendChild(aboutHead);
}
