// Components
import './components/Navbar';
import './components/Header';
import './components/Biodata';

// Styles / CSS
import '../styles/style.css';

// Image
import hero from "../img/hero.png";

// Hamburder navbar
const hamburger = document.getElementById('navbar-button');
const listMenu = document.getElementById('list-menu');

hamburger.addEventListener('click', ()=> {
  listMenu.classList.toggle('hidden');
});