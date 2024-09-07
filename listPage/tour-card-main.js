const usp = new URLSearchParams(document.location.search);

function createInfoCard(item) {
  const card = document.createElement("info-card");
  card.name = item.name;
  card.rating = item.rating;
  card.address = item.address;
  card.price = item.price;
  card.type = item.type;
  card.image = item.image || "";
  return card;
}

fetch("http://localhost:5000?" + usp)
  .then((result) => result.json())
  .then((resultObj) => {
    const foods = resultObj;
    const hashmap = new Map();

    foods.forEach((itemObj) => {
      let infoCardGroup;
      if (!hashmap.has(itemObj.type)) {
        infoCardGroup = document.createElement("info-card-group");
        infoCardGroup.type = itemObj.type;
        hashmap.set(itemObj.type, infoCardGroup);
      } else {
        infoCardGroup = hashmap.get(itemObj.type);
      }
      const infoCard = createInfoCard(itemObj);
      infoCardGroup.appendChild(infoCard);
    });
    let tourGroupList = Array.from(hashmap.values());
    const listBody = document.getElementById("listBody");
    listBody.innerHTML = "";
    tourGroupList.forEach((group) => {
      listBody.appendChild(group);
    });

    // Add event listener after content is loaded
    addEventListeners();
  });

function addEventListeners() {
  var elements = document.querySelectorAll("article.info-card");

  elements.forEach(function (element) {
    element.addEventListener("click", navigateToDetail);
  });
}

function navigateToDetail() {
  console.log("clicked");
  window.location = "../detailPage/html.html";
}

console.log("done");
