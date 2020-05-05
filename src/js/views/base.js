export const elements = {
  app: document.getElementById('app'),
  searchDescription: document.getElementById('input-deskripsi'),
  searchLocation: document.getElementById('input-lokasi'),
  searchForm: document.getElementById('search-form'),
  searchButton: document.getElementById('search-button'),
  filterCard: document.getElementById('filter-card'),
  siteContent: document.getElementById('content')
};

// For loader
export const svgElements = {
  findLoader: 'findLoader',
  windowLoader: 'windowLoader'
};

export const renderFindLoader = element => {
  const findLoader = `
    <div class="${svgElements.findLoader}">
      <?xml version="1.0" encoding="utf-8"?>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: #e2e8f0 none repeat scroll 0% 0%; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <g transform="translate(50 50)">
        <g transform="scale(0.8)">
          <g transform="translate(-50 -50)">
            <g>
              <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="1s" values="-20 -20;20 -20;0 20;-20 -20" keyTimes="0;0.33;0.66;1"></animateTransform>
              <path fill="#2bde73" d="M44.19 26.158c-4.817 0-9.345 1.876-12.751 5.282c-3.406 3.406-5.282 7.934-5.282 12.751 c0 4.817 1.876 9.345 5.282 12.751c3.406 3.406 7.934 5.282 12.751 5.282s9.345-1.876 12.751-5.282 c3.406-3.406 5.282-7.934 5.282-12.751c0-4.817-1.876-9.345-5.282-12.751C53.536 28.033 49.007 26.158 44.19 26.158z"></path>
              <path fill="#020621" d="M78.712 72.492L67.593 61.373l-3.475-3.475c1.621-2.352 2.779-4.926 3.475-7.596c1.044-4.008 1.044-8.23 0-12.238 c-1.048-4.022-3.146-7.827-6.297-10.979C56.572 22.362 50.381 20 44.19 20C38 20 31.809 22.362 27.085 27.085 c-9.447 9.447-9.447 24.763 0 34.21C31.809 66.019 38 68.381 44.19 68.381c4.798 0 9.593-1.425 13.708-4.262l9.695 9.695 l4.899 4.899C73.351 79.571 74.476 80 75.602 80s2.251-0.429 3.11-1.288C80.429 76.994 80.429 74.209 78.712 72.492z M56.942 56.942 c-3.406 3.406-7.934 5.282-12.751 5.282s-9.345-1.876-12.751-5.282c-3.406-3.406-5.282-7.934-5.282-12.751 c0-4.817 1.876-9.345 5.282-12.751c3.406-3.406 7.934-5.282 12.751-5.282c4.817 0 9.345 1.876 12.751 5.282 c3.406 3.406 5.282 7.934 5.282 12.751C62.223 49.007 60.347 53.536 56.942 56.942z"></path>
            </g>
          </g>
        </g>
      </g>
      <!-- [ldio] generated by https://loading.io/ --></svg>
    </div>
  `;
  element.insertAdjacentHTML('beforeend', findLoader);
};

export const renderWindowLoader = element => {
  const windowLoader = `
    <div class="${svgElements.windowLoader}">
    <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
    <svg width="55" height="80" viewBox="0 0 55 80" xmlns="http://www.w3.org/2000/svg" fill="#FFF">
        <g transform="matrix(1 0 0 -1 0 80)">
            <rect width="10" height="20" rx="3">
                <animate attributeName="height"
                    begin="0s" dur="4.3s"
                    values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear"
                    repeatCount="indefinite" />
            </rect>
            <rect x="15" width="10" height="80" rx="3">
                <animate attributeName="height"
                    begin="0s" dur="2s"
                    values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear"
                    repeatCount="indefinite" />
            </rect>
            <rect x="30" width="10" height="50" rx="3">
                <animate attributeName="height"
                    begin="0s" dur="1.4s"
                    values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear"
                    repeatCount="indefinite" />
            </rect>
            <rect x="45" width="10" height="30" rx="3">
                <animate attributeName="height"
                    begin="0s" dur="2s"
                    values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear"
                    repeatCount="indefinite" />
            </rect>
        </g>
    </svg>
    </div>
  `;
  element.insertAdjacentHTML('beforeend', windowLoader);
};


export const clearFindLoader = () => {
  const findLoader = document.querySelector(`.${svgElements.findLoader}`);
  if (findLoader) findLoader.parentElement.removeChild(findLoader);
}

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
