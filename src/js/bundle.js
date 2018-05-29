(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "potions": {
    "1": {
      "id": 1,
      "name": "Aging Potion",
      "image": "aging-potion.png",
      "price": 29.99,
      "effect": "Causes the drinker to advance in age",
      "ingredients": [
        "Red Wine",
        "Prune Juice",
        "Hairy Fungus",
        "Tortoise Shell",
        "Caterpillar",
        "Bat Tongue"
      ]
    },
    "2": {
      "id": 2,
      "name": "Bulgeye Potion",
      "image": "bulgeye-potion.png",
      "price": 19.99,
      "effect": "It affects one's eyes, causing them to swell",
      "ingredients": [
        "Beetle eyes",
        "Eel eyes"
      ]
    },
    "3": {
      "id": 3,
      "name": "Dragon Tonic",
      "image": "dragon-tonic.png",
      "price": 64.99,
      "effect": "A tonic used to cure sick dragons",
      "ingredients": [
        "Eagle Owl feathers",
        "Peacock feathers",
        "Giant Purple Toad warts"
      ]
    },
    "4": {
      "id": 4,
      "name": "Love Potion",
      "image": "love-potion.png",
      "price": 29.99,
      "effect": "The one who drinks it falls deeply in love with the first person they see",
      "ingredients": [
        "Petals from a red rose",
        "Essence of violet",
        "Canary flight and down feathers",
        "Newt eyes"
      ]
    },
    "5": {
      "id": 5,
      "name": "Polyjuice Potion",
      "image": "polyjuice-potion.png",
      "price": 99.99,
      "effect": "Allows the drinker to assume the form of someone else",
      "ingredients": [
        "Lacewing flies",
        "Leeches",
        "Powdered bicorn horn",
        "Knotgrass",
        "Fluxweed",
        "Shredded Boomslang skin"
      ]
    },
    "6": {
      "id": 6,
      "name": "Sleeping Draught",
      "image": "sleeping-draught.png",
      "price": 29.99,
      "effect": "Causes the drinker to fall almost instantaneously into a deep but temporary sleep",
      "ingredients": [
        "Sprigs of Lavender",
        "Measures of Standard Ingredient",
        "Blobs of Flobberworm Mucus",
        "Valerian sprigs"
      ]
    }
  }
}

},{}],2:[function(require,module,exports){
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

},{"../assets/potions.json":1}]},{},[2]);
