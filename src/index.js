import './style.css';
import Image from './Assets/pexels-athena-2961968.jpg';
import { startUp } from './home';
import { MenuItems } from './menu';
import { aboutInfo } from './about';

startUp();

const switchTabs = (function () {
  const container = document.getElementById('content');

  const home = document.getElementById('Home-button');
  home.addEventListener('click', () => {
    container.innerHTML = '';
    startUp();
  });

  const menu = document.getElementById('Menu-button');

  menu.addEventListener('click', () => {
    container.innerHTML = '';
    MenuItems();
  });

  const about = document.getElementById('About-button');

  about.addEventListener('click', () => {
    container.innerHTML = '';
    aboutInfo();
  });
})();
