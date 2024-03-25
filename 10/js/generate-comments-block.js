import { createElement } from './util.js';

const CountCommentValues = {
  START_COUNT: 0,
  STEP_COUNT: 5
};

const commentsList = document.querySelector('.social__comments');

let count = CountCommentValues.START_COUNT;

const generateCommentsTemplate = () => {
  const commentTemplate = createElement('li', 'social__comment');
  const commentImg = createElement('img', 'social__picture');
  const commentMessage = createElement('p', 'social__text');

  commentTemplate.append(commentImg);
  commentTemplate.append(commentMessage);

  return commentTemplate;
};

const generateComments = (comments) => {
  const commentTemplate = generateCommentsTemplate();
  commentsList.textContent = '';

  const commentListFragment = document.createDocumentFragment();

  const countCommentsShow = document.querySelector('.social__comment-shown-count');
  const countCommentsTotal = document.querySelector('.social__comment-total-count');

  const loadMoreButton = document.querySelector('.social__comments-loader');

  if (count >= comments.length) {
    count = comments.length;
    loadMoreButton.classList.add('hidden');
  } else {
    loadMoreButton.classList.remove('hidden');
  }

  countCommentsShow.textContent = count;
  countCommentsTotal.textContent = comments.length;

  for (let i = 0; i < count; i++) {
    const commentElement = commentTemplate.cloneNode(true);

    const commentUserImg = commentElement.querySelector('.social__picture');
    const commentUserMessage = commentElement.querySelector('.social__text');

    commentUserImg.src = comments[i].avatar;
    commentUserImg.alt = comments[i].name;
    commentUserMessage.textContent = comments[i].message;

    commentListFragment.append(commentElement);
  }

  commentsList.append(commentListFragment);

  count += CountCommentValues.STEP_COUNT;
};

const countClear = () => {
  count = CountCommentValues.STEP_COUNT;
};

export { generateCommentsTemplate, generateComments, commentsList, countClear };
