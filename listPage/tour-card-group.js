export default class TourCardGroup {
  tourCardList = [];
  constructor(type) {
    this.type = type;
  }

  Render() {
    return `
   <section class="list-main">
        <h2>${this.type}</h2>
        <ul>
            <li>
                ${this.tourCardList[0].Render()}
            </li>
            <li>
                ${this.tourCardList[1].Render()}
            </li>
            <li>
                ${this.tourCardList[2].Render()}
            </li>
        </ul>
    </section>`;
  }
}
