import { drawBigPicturePopup, openPopup } from './picture-popup.js';

const drawMiniatures = (posts) => {

  const pictures = document.querySelector('.pictures');
  const similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

  const picturesFragment = document.createDocumentFragment();

  posts.forEach((post) => {
    const {id, url, description, likes, comments} = post;
    const photoElement = similarPhotoTemplate.cloneNode(true);

    const pictureImage = photoElement.querySelector('.picture__img');
    const countComments = photoElement.querySelector('.picture__comments');
    const countLikes = photoElement.querySelector('.picture__likes');

    pictureImage.src = url;
    pictureImage.alt = description;
    pictureImage.id = id.toString();
    countComments.textContent = comments.length;
    countLikes.textContent = likes;

    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;

    photoElement.addEventListener('click', () => {
      drawBigPicturePopup(post);
      openPopup();
    });

    picturesFragment.append(photoElement);
  });

  pictures.append(picturesFragment);

};

export { drawMiniatures };
