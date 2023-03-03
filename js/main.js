import listener from './listenersElements.js';
import renderGoods from './renders.js';
import {getStorage} from './serviceStorage.js';

const data = getStorage();


const init = () => {
  listener(data);
  renderGoods(data);
};

init();
