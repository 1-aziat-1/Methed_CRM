import {createId, createWinImg} from './createElements.js';
import resultCost from './option.js';
import renderGoods from './renders.js';
import {removeStorage} from './serviceStorage.js';
import * as variables from './variables.js';


export const listener = (data) => {
  variables.btnItemAdd.addEventListener('click', () => {
    variables.modal.classList.add('is-visible');
    variables.modalId.textContent = createId(data);
  });

  variables.modal.addEventListener('click', event => {
    const target = event.target;
    if ((target.closest('.modal__container') === null) || (target.closest('.modal__btn-close'))) {
      variables.modal.classList.remove('is-visible');
    }
  });

  variables.modalForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = Object.fromEntries(formData);
    newItem['id'] = +variables.modalId.textContent;
    renderGoods(newItem);
    variables.modalForm.reset();
    variables.modal.classList.remove('is-visible');
    variables.modalResultCosts.textContent = '$ 000.00';
  });

  variables.modalCount.addEventListener('blur', () => {
    if (variables.modalCount.value !== '' && variables.modalPrice.value !== '') {
      variables.modalResultCosts.textContent = `$ ${+variables.modalCount.value * +variables.modalPrice.value }`;
    }
  });

  variables.modalPrice.addEventListener('blur', () => {
    if (variables.modalCount.value !== '' && variables.modalPrice.value !== '') {
      variables.modalResultCosts.textContent = `$ ${+variables.modalCount.value * +variables.modalPrice.value }`;
    }
  });

  variables.modalCheckbox.addEventListener('change', () => {
    if (variables.inputDiscount.disabled) {
      variables.inputDiscount.disabled = false;
    } else {
      variables.inputDiscount.value = '';
      variables.inputDiscount.disabled = true;
    }
  });

  variables.tbody.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.body-icon__btn-delete')) {
      const item = target.closest('.cms__body-list');
      item.remove();
      const idItem = +item.querySelector('.body-id').textContent;
      removeStorage(idItem);
      resultCost();
    }
    if (target.closest('.body-icon__btn-img')) {
      const dataUrl = target.dataset.pic;
      createWinImg(dataUrl);
    }
  });
};

export default listener;
