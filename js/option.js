import {btnResultTable} from './variables.js';

export const resultCost = () => {
  const arrItemResults = document.querySelectorAll('.body-result');
  let result = 0;
  arrItemResults.forEach((item) => result += +item.textContent);
  btnResultTable.textContent = `$ ${result}`;
};

export const collectionData = async (form, toBase64) => {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  data.price = +data.price;
  data.count = +data.count;
  data.image = await toBase64(data.image);
  return data;
};

