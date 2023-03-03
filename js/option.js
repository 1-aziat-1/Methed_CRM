import {btnResultTable} from './variables.js';

const resultCost = () => {
  const arrItemResults = document.querySelectorAll('.body-result');
  let result = 0;
  arrItemResults.forEach((item) => result += +item.textContent);
  btnResultTable.textContent = `$ ${result}`;
};

export default resultCost;
