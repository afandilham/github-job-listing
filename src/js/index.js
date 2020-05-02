// Components
import './components/Navbar';
import './components/Header';
import './components/About';

// Styles / CSS
import '../styles/style.css';

// Image
import hero from "../img/hero.png";
import profile from "../img/profile.jpg";

// Hamburder navbar
const hamburger = document.getElementById('navbar-button');
const listMenu = document.getElementById('list-menu');

hamburger.addEventListener('click', ()=> {
  listMenu.classList.toggle('hidden');
});

// Protect image download
const header = document.querySelector('..hero-image');
        
header.addEventListener('mousedown', (e) => {
  if(e.button === 2) {
    return false;
  }
});
