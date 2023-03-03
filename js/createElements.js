export const createBtn = () => {
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

export const createRow = ({id, title, category, units, count, price}) => {
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

export const createId = (arr) => {
  const randomId = Math.floor(Math.random() * 1000000000);
  arr.forEach(item => {
    if (item.id === randomId) {
      createId(arr);
    }
  });
  return randomId;
};
