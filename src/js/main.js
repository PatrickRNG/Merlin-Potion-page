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
    <img class="potion__image" src="assets/products/${image}" onerror="imgError(${image});">
    <p class="potion__name">${name} -
    <span>$${price}</span>
    </p>
  </div>
  `;

  potionsEl.innerHTML += potionContent;

}

function createModal({id, name, image, price, effect, ingredients}) {

  let ingredientsLi = '';

  ingredients.forEach(el => {
    ingredientsLi += `<li>${el}</li>`;
  });

  const modalContent =
  `<div class="modal">
    <div class="modal__image" style="background-image:url(assets/products/${image})"></div>
    <div class="modal__body" id="js_modal_body">
      <span class="closeBtn" id="js_closeBtn">&times;</span>
      <h3 class="modal__name">${name}</h3>
      <h3>Use/Effect:</h3>
      <p>${effect}</p>
      <h3>Ingredients:</h3>
      <ul class="modal__ingredients">
        ${ingredientsLi}
      </ul>
      <h3 class="modal__price">Price:<br><span>$${price}</span></h3>
      <button class="btn btn--orange">Add to cart</button>
    </div>
  </div>`;

  modal.innerHTML = modalContent;

}

window.addEventListener('click', e => {

	let closeBtn = document.getElementById('js_closeBtn');

	if (e.target == modal) {
		modal.style.display = 'none';
	}
	if (e.target == closeBtn) {
		modal.style.display = 'none';
	}
});

function imgError(image) {
  image.onerror = "";
  image.src = "./assets/imgError.png";
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