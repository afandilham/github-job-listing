class Header extends HTMLElement {
  
  constructor() {
    super();
    this._shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowDOM.innerHTML = `

    `;
  }
}

customElements.define('hero-section', Header);