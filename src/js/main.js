const { potions } = require('../assets/potions.json');

function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]];
  }
}

for (let [key, value] of entries(potions)) {
  console.log(value.name);
}

function createItem({name, image, price, effect, ingredients}) {

  const itemContent = 
  `
  `;

}

function imgError(image) {
  image.onerror = "";
  image.src = "./images/imgError.png";
  return true;
}
