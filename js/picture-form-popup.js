import { isEscapeKey } from './util.js';
import { doPictureBigger, doPictureSmaller, resetImageScale, changeImageEffect, clearEffects, createSlider } from './picture-filter.js';
import { checkForm } from './form-validation.js';
import {
  loadImageFormPopup, loadImageFormPopupOpen, loadImageFormPopupClose,
  hashtagInput, commentInput, scaleSmallerButton,
  scaleBiggerButton, effectChoseButtons,
} from './elements.js';

let onDocumentKeydown = () => {};

const openLoadImageForm = () => {
  checkForm();
  createSlider();

  loadImageFormPopup.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);
  scaleSmallerButton.addEventListener('click', doPictureSmaller);
  scaleBiggerButton.addEventListener('click', doPictureBigger);

  effectChoseButtons.forEach((button) => {
    button.addEventListener('change', () => {
      changeImageEffect(button);
    });
  });
};

const closeLoadImageForm = () => {
  loadImageFormPopup.classList.add('hidden');
  loadImageFormPopupOpen.value = '';
  resetImageScale();

  document.removeEventListener('keydown', onDocumentKeydown);
  scaleSmallerButton.removeEventListener('click', doPictureSmaller);
  scaleBiggerButton.removeEventListener('click', doPictureBigger);

  clearEffects();
};

loadImageFormPopupOpen.addEventListener('change', () => {
  openLoadImageForm();
});

loadImageFormPopupClose.addEventListener('click', () => {
  closeLoadImageForm();
});

onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    if (!(document.activeElement === hashtagInput) || !(document.activeElement === commentInput)) {
      evt.preventDefault();
      closeLoadImageForm();
    }
  }
};
