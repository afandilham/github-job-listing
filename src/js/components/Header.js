class Header extends HTMLElement {
  
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .header {
          height: 100vh;
        }
        
        .header-image {
          width: 100%;
          height: auto;
        }
        
        .header-image .hero-image {
          width: 50%;
          pointer-events: none;
        }
      </style>
      <div class="bg-teal-400 h-screen flex justify-center items-center md:justify-start md:items-center mb-8 md:-mt-20 md:mb-20">
        <div class="w-4/5 mx-12 mt-12 lg:mt-0 md:mt-8 sm:mt-12 animated" data-aos="fade-right" data-aos-duration="900">
          <h1 class="text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-w-bold">Github Job Listing</h1>
          <p class="w-full sm:w-4/5 md:w-2/3 lg:w-2/3 xl:lg:w-1/3 text-base xl:text-lg lg:text-lg md:text-base text-w-regular mt-2 mb-8">Aplikasi ini digunakan untuk mencari lowongan pekerjaan yang terdapat pada Github Jobs. Untuk menggunakannya, cukup dengan mengisi deskripsi pekerjaan serta lokasi di kolom form.</p>
          <a href="#search" class="py-4 px-4 text-lg text-w-bold rounded-md shadow transition duration-500 ease-in-out bg-white hover:bg-gray-900 hover:text-white">
            Get Started <i class="fas fa-angle-down"></i>
          </a>
        </div>
        <div class="w-1/3 flex header-image header-clip flex justify-end mr-8 hidden lg:flex" data-aos="fade-left" data-aos-duration="900">
          <img class="hero-image" src="" alt="">
        </div>
      </div>
    `;
  }
}

customElements.define('hero-section', Header);
