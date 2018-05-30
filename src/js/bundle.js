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

const potionsEl = document.getElementById('potions__js');
const modal = document.getElementById('js__modal');
let data;

function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]];
  }
  data = obj;
}

for (let [key, value] of entries(potions)) {
  createPotions(value);
}

potionsEl.childNodes.forEach(el => {
  el.addEventListener('click', (e) => {
    let { id } = e.currentTarget;
    if (!id || !e.currentTarget.id.startsWith('potion_')) return;
    let modalDataIndex = Number(id.match(/\d$/)[0]);
	  const modalData = data[modalDataIndex];    
    modal.style.display = 'block';
    createModal(modalData);
  });
});


function createPotions({id, name, image, price}) {

  const potionContent = 
  `<div class="potion" id="potion_${id}">
    <img class="potion__image" src="assets/products/${image}">
    <p class="potion__name">${name} -
    <span>${price}</span>
    </p>
  </div>
  `;

  potionsEl.innerHTML += potionContent;

}

function createModal({id, name, image, price, effect, ingredients}) {

  // let ingredientsLi = '';
  // ingredients.forEach(el => {
  //   ingredientsLi += `<li>${el}</li>`;
  // });

  const modalContent =
  `<div class="modal">
    <div class="modal__image" style="background-image:url(${image})"></div>
    <div class="modal__body" id="js_modal_body">
      <span class="closeBtn" id="js_closeBtn">&times;</span>
      <h3>${name}</h3>
      <h3>Use/Effect:</h3>
      <p>${effect}</p>
      <h3>Ingredients:</h3>
      <ul class="modal__ingredients">
        
      </ul>
      <h3>Price:<br>${price}</h3>
      <div class="btn btn--orange">Add to cart</a>
    </div>
  </div>`;

  modal.innerHTML = modalContent;

}





function imgError(image) {
  image.onerror = "";
  image.src = "./images/imgError.png";
  return true;
}

// MOBILE MENU

const menu = document.getElementById('menu__mobile');
const nav = document.getElementById('nav__js');
const header = document.querySelector('.header--after');
const logo = document.querySelector('.header__logo');
const profile = document.querySelector('.header__profile');
const input = document.querySelector('.header__input');

menu.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    header.classList.toggle('header--after');
    menu.classList.toggle('is-active');

    if (nav.style.display === 'flex') {
      logo.style.display = 'none';
      profile.style.display = 'none';
      input.style.display = 'block';
    } else {
      logo.style.display = 'block';
      profile.style.display = 'flex';
      input.style.display = '';
    }
});
},{"../assets/potions.json":1}]},{},[2]);
