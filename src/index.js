import './style.css';
import Image from './Assets/pexels-athena-2961968.jpg';
import { startUp } from './home';
import { MenuItems } from './menu';

const container = document.getElementById('content');

startUp();

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
