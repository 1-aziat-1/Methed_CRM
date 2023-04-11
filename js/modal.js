import { fetchRequest } from './dataLoad.js';
import loadModalStyle from './loadModalStyle.js';
import renderGoods from './renders.js';

const showModal = async (err, data) => {
  await loadModalStyle('../css/modal.css');

  const overlay = document.createElement('div');
  overlay.className = 'overlay';

  const modal = document.createElement('div');
  modal.className = 'modal';

  const modalTitle = document.createElement('div');
  modalTitle.className = 'modal__wrapper-title';
  modalTitle.innerHTML = `
    <div class="modal__title">Добавить товар</div>
    <div class="modal__id">id: <span></span></div>
  `;

  const btnClose = document.createElement('div');
  btnClose.className = 'modal__btn-close';
  btnClose.innerHTML = '<span></span>';
  modalTitle.append(btnClose);

  const form = document.createElement('form');
  form.className = 'modal__form form';
  form.id = 'form';
  form.method = 'POST';

  const formContainer = document.createElement('div');
  formContainer.className = 'form__container';

  const fieldsetName = document.createElement('fieldset');
  fieldsetName.className = 'form__item name';
  fieldsetName.innerHTML = `
    <label for="name" class="form__item-title">Наименование </label>
    <input class="form__item-input form__item-input-name" id="name" name="title" type="text" required>
  `;

  const fieldsetCategory = document.createElement('fieldset');
  fieldsetCategory.className = 'form__item category';
  fieldsetCategory.innerHTML = `
    <label for="category" class="form__item-title">Категория</label>
    <input class="form__item-input form__item-input-category" id="category" name="category" type="text" required>
  `;

  const fieldsetUnits = document.createElement('fieldset');
  fieldsetUnits.className = 'form__item units';
  fieldsetUnits.innerHTML = `
    <label for="units" class="form__item-title">Единицы измерения</label>
    <input class="form__item-input form__item-input-units" id="units" name="units" type="text" required>
  `;

  const fieldsetDiscount = document.createElement('fieldset');
  fieldsetDiscount.className = 'form__item discount';
  fieldsetDiscount.innerHTML = `
    <label for="checkbox" class="form__item-title">Дисконт </label>
    <fieldset class="form__item-wrapper">
      <input class="form__item-checkbox" id="checkbox" name="checkbox" type="checkbox">
      <input class="form__item-input form__item-input-discount" name="discount" type="text" disabled>
    </fieldset>
  `;

  const fieldsetArea = document.createElement('fieldset');
  fieldsetArea.className = 'form__item area';
  fieldsetArea.innerHTML = `
    <label for="description" class="form__item-title">Описание </label>
    <textarea class="form__item-area" id="description" name="description" required></textarea>
  `;

  const fieldsetAmount = document.createElement('fieldset');
  fieldsetAmount.className = 'form__item amount';
  fieldsetAmount.innerHTML = `
    <label for="amount" class="form__item-title">Количество</label>
    <input class="form__item-input form__item-input-amount" id="amount" name="count" type="number" required>
  `;

  const fieldsetPrice = document.createElement('fieldset');
  fieldsetPrice.className = 'form__item price';
  fieldsetPrice.innerHTML = `
    <label for="price" class="form__item-title">Цена </label>
    <input class="form__item-input form__item-input-price" id="price" name="price" type="number" required>
  `;

  const formTextWrapper = document.createElement('div');
  formTextWrapper.className = 'form__text-wrapper';
  formTextWrapper.innerHTML = `
    <p class="form__text-error">Изображение не должно</p>
    <p class="form__text-error">превышать размер 1 Мб</p>
  `;

  const formBtnWrapper = document.createElement('div');
  formBtnWrapper.className = 'form__btn-wrapper';
  formBtnWrapper.innerHTML = `
    <label class="form__btn-label " for="add-file">Добавить изображение
      <input class="form__btn image" form="form" type="file" id="add-file">
    </label>
  `;

  formContainer.append(
      fieldsetName,
      fieldsetCategory,
      fieldsetUnits,
      fieldsetDiscount,
      fieldsetArea,
      fieldsetAmount,
      fieldsetPrice,
      formTextWrapper,
      formBtnWrapper,
  );

  const formPicture = document.createElement('div');
  formPicture.className = 'form__wrapper-img form-picture';
  formPicture.innerHTML = `
    <img class="form-picture__img" src="img/img/cofe.jpg" alt="кофе машина">
    <button class="form-picture__delete">
      <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.5334 12.45L12 15.9833L8.45004 12.45L6.10004 14.8L9.65004 18.3333L6.11671 21.8667L8.46671 24.2167L12 20.6833L15.5334 24.2167L17.8834 21.8667L14.35 18.3333L17.8834 14.8L15.5334 12.45ZM17.8334 1.66667L16.1667 0H7.83337L6.16671 1.66667H0.333374V5H23.6667V1.66667H17.8334ZM2.00004 26.6667C2.00004 28.5 3.50004 30 5.33337 30H18.6667C20.5 30 22 28.5 22 26.6667V6.66667H2.00004V26.6667ZM5.33337 10H18.6667V26.6667H5.33337V10Z"
          fill="white" />
      </svg>
    </button>
  `;

  form.append(formContainer, formPicture);

  const modalFooter = document.createElement('div');
  modalFooter.className = 'modal__footer-wrapper';
  modalFooter.innerHTML = '<p class="modal__footer-costs">Итоговая стоимость: <span>$ 000.00</span></p>';
  const btnFooter = document.createElement('button');
  btnFooter.className = 'modal__footer-btn';
  btnFooter.setAttribute('form', 'form');
  btnFooter.type = 'submit';
  btnFooter.textContent = 'Добавить товар';
  modalFooter.append(btnFooter);

  modal.append(modalTitle, form, modalFooter);
  overlay.append(modal);

  document.body.append(overlay);

  if (data) {
    form.title.value = data.title;
    form.category.value = data.category;
    form.description.value = data.description;
    form.price.value = data.price;
    form.count.value = data.count;
    form.units.value = data.units;
  }

  return new Promise(resolve => {
    overlay.addEventListener('click', ({target}) => {
      if (target.closest('.modal__btn-close') ||
        !target.closest('.modal')
      ) {
        overlay.remove();
        resolve(false);
      }
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      fetchRequest('https://peaceful-holly-muskox.glitch.me/api/goods', {
        method: 'POST',
        body: {
          title: form.title.value,
          category: form.category.value,
          description: form.description.value,
          price: +form.price.value,
          count: +form.count.value,
          units: form.units.value,
        },
        callback(err, data) {
          if (err) {
            // variables.modalError.classList.add('is-visible');
            // if (data?.errors) {
            //   variables.modalErrorText.textContent = `${data.errors[0].field} - ${data.errors[0].message}`;
            // }
            console.warn(err);
            return;
          }
          renderGoods(null, data);
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      overlay.remove();
      form.reset();
      resolve(true);
    });
  });
};

export default showModal;
