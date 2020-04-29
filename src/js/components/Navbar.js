class Navbar extends HTMLElement {
  
  constructor() {
    super();
    this.render();
  }

  connectedCallback() {
    console.log('Navbar connected');
  }

  render() {
    this.innerHTML = `
    <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6 sticky top-0 z-10 mb-20">
      <div class="flex items-center  text-white mr-6 ml-8">
        <i class="fab fa-github fa-2x"></i>
      </div>
      <div class="block lg:hidden mr-8" id="navbar-button">
        <button class="flex items-center px-3 py-2 border-2 rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="w-full hidden block flex-grow lg:flex lg:items-center lg:w-auto" id="list-menu">
        <div class="text-sm lg:flex-grow">
          <a href="#" class="transition duration-200 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-white border-b-2 lg:border-gray-900 hover:border-teal-500 sm:border-gray-700 sm:text-center mr-4 py-1 text-base text-w-bold">
            Home
          </a>
          <a href="#about" class="transition duration-200 ease-in-out block mt-4 lg:inline-block lg:mt-0 text-white border-b-2 lg:border-gray-900 hover:border-teal-500 sm:border-gray-700 sm:text-center mr-4 py-1 text-base text-w-bold">
            About Me
          </a>
        </div>
        <div>
        </div>
      </div>
    </nav>
    `
  }
}

customElements.define('nav-bar', Navbar);