class InfoCardGroup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.items = [];
  }

  static get observedAttributes() {
    return ["type"];
  }

  get type() {
    return this.getAttribute("type");
  }

  set type(value) {
    this.setAttribute("type", value);
  }

  setItems(items) {
    this.items = items;
    this.render();
  }

  render() {
    const cardsHTML = this.items
      .map(
        (item) => `
      <li>
        <info-card
          name="${item.name}"
          rating="${item.rating}"
          address="${item.address}"
          price="${item.price}"
          type="${item.type}"
          image="${item.image || ""}"
        ></info-card>
      </li>
    `
      )
      .join("");

    this.shadowRoot.innerHTML = `
      <style>
        .list-main { /* Add your styles here */ }
      </style>
      <section class="list-main">
        <h2>${this.type}</h2>
        <ul>
          ${cardsHTML}
        </ul>
      </section>
    `;
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      this.render();
    }
  }
}

window.customElements.define("info-card-group", InfoCardGroup);
