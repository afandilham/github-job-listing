export const elements = {
  searchDescription: document.getElementById('input-deskripsi'),
  searchLocation: document.getElementById('input-lokasi'),
  searchForm: document.getElementById('search-form'),
  searchButton: document.getElementById('search-button'),
  clearContent: document.getElementById('filter-card'),
  siteContent: document.getElementById('content')
};

// For loader



// For navigation bar
const hamburger = document.getElementById('navbar-button');
const listMenu = document.getElementById('list-menu');

hamburger.addEventListener('click', () => {
  listMenu.classList.toggle('hidden');
});

// Prevent to download image 
const header = document.querySelector('.hero-image');

header.addEventListener('mousedown', (e) => {
  if (e.button === 2) {
    return false;
  }
});
