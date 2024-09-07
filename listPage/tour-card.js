export default class TourCard {
  constructor(itemObj) {
    this.id = itemObj.id;
    this.name = itemObj.name;
    this.rating = itemObj.rating;
    this.address = itemObj.address;
    this.price = itemObj.price;
    this.type = itemObj.type;
  }

  Render() {
    return `
  <article class="info-card">
    <img
      src="..//assets/gate6.png"
      alt="aylal"
      class="info-card-img"
    />
    <div class="info-card-name">
      <h4>${this.name}</h4>
      <p>${this.rating}</p>
    </div>
    <p>${this.address}</p>
    <p>2 хүний ${this.price}</p>
  </article>`;
  }
}
