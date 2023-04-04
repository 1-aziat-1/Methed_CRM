import listener from './listenersElements.js';
import renderGoods from './renders.js';
import './dataLoad.js';
import {fetchRequest} from './dataLoad.js';


const init = () => {
  listener();
  fetchRequest('https://peaceful-holly-muskox.glitch.me/api/goods', {
    method: 'GET',
    callback: renderGoods,
  });
};

init();
