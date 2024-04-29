import TourCard from "./tour-card.js";
import TourCardGroup from "./tour-card-group.js";

const usp = new URLSearchParams(document.location.search);
// const filterValue = usp.get("category");

fetch("http://localhost:5000?" + usp)
  .then((result) => result.json())
  .then((resultObj) => {
    const foods = resultObj;
    const hashmap = new Map();

    foods.map((itemObj) => {
      const tourCard = new TourCard(itemObj);
      let tourCardGroup;
      if (!hashmap.has(tourCard.type)) {
        tourCardGroup = new TourCardGroup(tourCard.type);
        hashmap.set(tourCard.type, tourCardGroup);
      } else {
        tourCardGroup = hashmap.get(tourCard.type);
      }
      tourCardGroup.tourCardList.push(tourCard);
    });
    let tourGroupList = hashmap.values();
    const tourGroupListHTML = tourGroupList.map((group) => {
      return group.Render();
    });
    const foodsHTML = tourGroupListHTML.reduce(
      (prev, current) => prev + current
    );

    document.getElementById("listBody").innerHTML = foodsHTML;
  });
