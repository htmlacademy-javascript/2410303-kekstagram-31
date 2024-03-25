// Элементы попап формы

const loadImageFormPopup = document.querySelector('.img-upload__overlay');
const loadImageFormPopupOpen = document.querySelector('.img-upload__input');
const loadImageFormPopupClose = loadImageFormPopup.querySelector('.img-upload__cancel');

const hashtagInput = loadImageFormPopup.querySelector('.text__hashtags');
const commentInput = loadImageFormPopup.querySelector('.text__description');

const scaleSmallerButton = loadImageFormPopup.querySelector('.scale__control--smaller');
const scaleBiggerButton = loadImageFormPopup.querySelector('.scale__control--bigger');

const effectRadioButton = document.querySelector('.effects__list');


// Элементы фильтра

const imagePreview = document.querySelector('.img-upload__preview img');

const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const sliderPanel = document.querySelector('.img-upload__effect-level');


// Элементы валидации

const loadImageForm = document.querySelector('.img-upload__form');
const hashtagInputForm = loadImageForm.querySelector('.text__hashtags');
const commentInputForm = loadImageForm.querySelector('.text__description');


export {
  loadImageFormPopup,
  loadImageFormPopupOpen,
  loadImageFormPopupClose,
  hashtagInput,
  commentInput,
  scaleSmallerButton,
  scaleBiggerButton,
  effectRadioButton,

  imagePreview,
  sliderElement,
  effectLevelValue,
  sliderPanel,

  loadImageForm,
  hashtagInputForm,
  commentInputForm,

};
