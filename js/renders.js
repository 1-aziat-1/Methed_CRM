import {createRow} from './createElements.js';
import { fetchRequest } from './dataLoad.js';
import showModal from './modal.js';
import {resultCost} from './option.js';
import {tbody} from './variables.js';


const renderGoods = (err, arrObj) => {
  if (err) {
    console.warn(err);
    return;
  }
  if (Array.isArray(arrObj)) {
    const massiv = arrObj.map(item => createRow(item));
    tbody.append(...massiv);
    resultCost();
  } else {
    tbody.append(createRow(arrObj));
    resultCost();
  }
};

export default renderGoods;
