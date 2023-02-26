'use strict';

const arr = [
  {
    "id": 253842678,
    "title": "Смартфон Xiaomi 11T 8/128GB",
    "price": 27000,
    "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    "category": "mobile-phone",
    "discont": false,
    "count": 3,
    "units": "шт",
    "images": {
      "small": "img/smrtxiaomi11t-m.jpg",
      "big": "img/smrtxiaomi11t-b.jpg"
    }
  },
  {
    "id": 296378448,
    "title": "Радиоуправляемый автомобиль Cheetan",
    "price": 4000,
    "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    "category": "toys",
    "discont": 5,
    "count": 1,
    "units": "шт",
    "images": {
      "small": "img/cheetancar-m.jpg",
      "big": "img/cheetancar-b.jpg"
    }
  },
  {
    "id": 215796548,
    "title": "ТВ приставка MECOOL KI",
    "price": 12400,
    "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    "category": "tv-box",
    "discont": 15,
    "count": 4,
    "units": "шт",
    "images": {
      "small": "img/tvboxmecool-m.jpg",
      "big": "img/tvboxmecool-b.jpg"
    }
  },
  {
    "id": 246258248,
    "title": "Витая пара PROConnect 01-0043-3-25",
    "price": 22,
    "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    "category": "cables",
    "discont": false,
    "count": 420,
    "units": "v",
    "images": {
      "small": "img/lan_proconnect43-3-25.jpg",
      "big": "img/lan_proconnect43-3-25-b.jpg"
    }
  }
];

const modal = document.querySelector('.modal');
const modalTitle = modal.querySelector('.modal__title');
const modalCloseBtn = modal.querySelector('.modal__btn-close');
const modalForm = modal.querySelector('.modal__form');
const modalCheckbox = modal.querySelector('.form__item-checkbox');
const modalInputCheckbox = modal.querySelector('.form__item-input-discount');
const modalResultCosts = modal.querySelector('.modal__footer-costs>span');
const modalId = modal.querySelector('.modal__id');

const tbody = document.querySelector('.cms__body');
const btnItemAdd = document.querySelector('.header-add__btn');

const createBtn = () => {
  const tdButton = document.createElement('td');
  tdButton.classList.add('body-item', 'body-icon');

  const btnImg = document.createElement('button');
  btnImg.classList.add('body-icon__btn-img');

  const btnFix = document.createElement('button');
  btnFix.classList.add('body-icon__btn-fix');

  const btnDelete = document.createElement('button');
  btnDelete.classList.add('body-icon__btn-delete');

  tdButton.append(btnImg, btnFix, btnDelete);

  return {
    tdButton,
    btnImg,
    btnFix,
    btnDelete,
  };
};

const createRow = ({id, title, category, units, count, price}) => {
  const tr = document.createElement('tr');
  tr.classList.add('cms__body-list');

  const tdId = document.createElement('td');
  tdId.classList.add('body-item', 'body-id');
  tdId.textContent = id;

  const tdTitle = document.createElement('td');
  tdTitle.classList.add('body-item', 'body-name');
  tdTitle.textContent = title;

  const tdCategory = document.createElement('td');
  tdCategory.classList.add('body-item', 'body-category');
  tdCategory.textContent = category;

  const tdUnits = document.createElement('td');
  tdUnits.classList.add('body-item', 'body-unit');
  tdUnits.textContent = units;

  const tdCount = document.createElement('td');
  tdCount.classList.add('body-item', 'body-count');
  tdCount.textContent = count;

  const tdPrice = document.createElement('td');
  tdPrice.classList.add('body-item', 'body-cost');
  tdPrice.textContent = price;

  const tdResult = document.createElement('td');
  tdResult.classList.add('body-item', 'body-result');
  tdResult.textContent = price*count;

  const btn = createBtn();
  const {tdButton} = btn;


  tr.append(tdId, tdTitle, tdCategory, tdUnits, tdCount, tdPrice, tdResult, tdButton);
  
  return tr;
};

const renderGoods = (arrObj) => {
  const massiv = arrObj.map(item => createRow(item));
  tbody.append(...massiv);
};

btnItemAdd.addEventListener('click', () => {
  modal.classList.add('is-visible');
});

modal.addEventListener('click', event => {
  const target = event.target;
  if ((target.closest('.modal__container') === null) || (target.closest('.modal__btn-close'))) {
    modal.classList.remove('is-visible');
  }
});


console.log('renderGoods(arr);: ', renderGoods(arr));