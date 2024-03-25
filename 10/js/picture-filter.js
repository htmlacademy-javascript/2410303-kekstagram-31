import {
  imagePreview, sliderElement,
  effectLevelValue, sliderPanel,
} from './elements.js';

import { effectOption } from './effect-option-list.js';

const createSlider = () => {
  imagePreview.style.transform = 'scale(1)';
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    connect: 'lower'
  });
  sliderElement.setAttribute('disabled', true);
  sliderPanel.classList.add('hidden');
};

const editSlider = (minValue, maxValue, stepValue) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: minValue,
      max: maxValue
    },
    start: maxValue,
    step: stepValue
  });
};

const hideSlider = (name) => {
  if (name === 'none') {
    sliderPanel.classList.add('hidden');
  } else {
    sliderPanel.classList.remove('hidden');
    sliderElement.removeAttribute('disabled');
  }
};

const changeImageEffect = (button) => {
  const effect = effectOption[button];

  hideSlider(effect.FILTER_NAME);
  editSlider(effect.MIN, effect.MAX, effect.STEP);

  sliderElement.noUiSlider.on('update', () => {
    effectLevelValue.value = sliderElement.noUiSlider.get();
    if (effect.FILTER_NAME === 'none') {
      imagePreview.style.filter = 'none';
    } else {
      imagePreview.style.filter = `${effect.FILTER_NAME}(${effectLevelValue.value}${effect.UNIT})`;
    }
  });
};

const clearEffects = () => {
  sliderElement.noUiSlider.destroy();
  effectLevelValue.value = 0;
  imagePreview.style.filter = null;
};

export { changeImageEffect, sliderElement, clearEffects, createSlider };
