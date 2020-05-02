class Biodata extends HTMLElement {
  
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <aside id="about" class="pt-6">
      <div class="bg-gray-800 h-auto pt-6 pb-24">
        <h3 class="text-white text-3xl text-w-base text-center">About Me</h4>
        <div class="container mx-auto flex justify-center shadow-lg rounded-sm bg-white p-4 max-w-screen-md relative mt-20">
          <img src="./d592b60a464a2577840869c6649c2de3.jpg" alt="Profile" class="absolute bottom-0 top-0 flex justify-center w-32 rounded-md border-4 border-teal-500 -mt-12">
          <div class="flex justify-center flex-col mt-24 mb-6">
            <h4 class="text-2xl text-w-base text-teal-700 text-center">Moch. Ilham Afandi</h4>
            <p class="text-sm md:text-base w-full md:w-auto text-center text-gray-700 px-2 md:px-24 mx-0 md:mx-4 mt-4">Web Developer, Linux User. I enjoy experimenting with other languages and Framework</p>
            <div class="social-icon text-center flex justify-center items-center flex-wrap pt-4">
              <a href="https://wa.me/081232294925" target="_blank" class="text-gray-200 pl-6"><i class="fab fa-whatsapp bg-gray-800 fa-3x rounded-full p-3"></i></a>
              <a href="https://www.twitter.com/afandilham" target="_blank" class="text-gray-200 pl-6"><i class="fab fa-twitter bg-gray-800 fa-3x rounded-full p-3"></i></a>
              <a href="htpps://www.github.com/afandilham" target="_blank" class="text-gray-200 pl-6"><i class="fab fa-github bg-gray-800 fa-3x rounded-full p-3"></i></a>
              <a href="https://www.instagram.com/afandilham_" target="_blank" class="text-gray-200 pl-6"><i class="fab fa-instagram bg-gray-800 fa-3x rounded-full p-3"></i></a>
              <a href="https://www.facebook.com/beeforeverybody" target="_blank" class="text-gray-200 pl-6"><i class="fab fa-facebook bg-gray-800 fa-3x rounded-full p-3"></i></a>
            </div>
          </div>
        </div>
      </div>
    </aside>
    `;
  }
}

customElements.define('bio-section', Biodata);
