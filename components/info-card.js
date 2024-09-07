class InfoCard extends HTMLElement {
  static get observedAttributes() {
    return ["name", "rating", "address", "price", "type", "image"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  get name() {
    return this.getAttribute("name");
  }

  set name(value) {
    this.setAttribute("name", value);
  }

  get rating() {
    return this.getAttribute("rating");
  }

  set rating(value) {
    this.setAttribute("rating", value);
  }

  get address() {
    return this.getAttribute("address");
  }

  set address(value) {
    this.setAttribute("address", value);
  }

  get price() {
    return this.getAttribute("price");
  }

  set price(value) {
    this.setAttribute("price", value);
  }

  get type() {
    return this.getAttribute("type");
  }

  set type(value) {
    this.setAttribute("type", value);
  }

  get image() {
    return this.getAttribute("image");
  }

  set image(value) {
    this.setAttribute("image", value);
  }

  Render() {
    return `
      <style>
        .info-card { /* Add your styles here */ }
        .info-card-img { width: 100%; }
      </style>
      <article class="info-card">
        <img src="${this.image || "../assets/gate6.png"}" alt="${
      this.name
    }" class="info-card-img" />
        <div class="info-card-name">
          <h4>${this.name}</h4>
          <p>Rating: ${this.rating}</p>
        </div>
        <p>${this.address}</p>
        <p>2 хүний ${this.price}</p>
      </article>
    `;
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.Render();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      this.shadowRoot.innerHTML = this.Render();
    }
  }
}

window.customElements.define("info-card", InfoCard);
