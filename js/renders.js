import {createRow} from './createElements.js';
import resultCost from './option.js';
import {getStorage, setStorage} from './serviceStorage.js';
import {tbody} from './variables.js';

const renderGoods = (arrObj) => {
  if (Array.isArray(arrObj)) {
    const massiv = arrObj.map(item => createRow(item));
    tbody.append(...massiv);
    resultCost();
  } else {
    const data = getStorage();
    data.push(arrObj);
    setStorage(data);
    tbody.append(createRow(arrObj));
    resultCost();
  }
};

export default renderGoods;