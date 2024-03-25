import { addModalOpen, isEscapeKey } from './util.js';
import { changeImageEffect, clearEffects, createSlider } from './picture-filter.js';
import { doPictureBigger, doPictureSmaller, resetImageScale } from './picture_scale.js';
import { checkForm } from './form-validation.js';
import {
  loadImageFormPopup, loadImageFormPopupOpen, loadImageFormPopupClose,
  hashtagInput, commentInput, scaleSmallerButton,
  scaleBiggerButton,
  effectRadioButton,
} from './elements.js';


const addEffects = () => {
  const checkedButton = effectRadioButton.querySelector('input[name="effect"]:checked').value;
  changeImageEffect(checkedButton);
};

let onDocumentKeydown = () => {};

const openLoadImageForm = () => {

  checkForm();
  createSlider();

  addModalOpen();

  loadImageFormPopup.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);
  scaleSmallerButton.addEventListener('click', doPictureSmaller);
  scaleBiggerButton.addEventListener('click', doPictureBigger);
  effectRadioButton.addEventListener('change', addEffects);
};

const closeLoadImageForm = () => {
  loadImageFormPopup.classList.add('hidden');
  loadImageFormPopupOpen.value = '';
  resetImageScale();

  addModalOpen();

  document.removeEventListener('keydown', onDocumentKeydown);
  scaleSmallerButton.removeEventListener('click', doPictureSmaller);
  scaleBiggerButton.removeEventListener('click', doPictureBigger);
  effectRadioButton.removeEventListener('change', addEffects);

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
