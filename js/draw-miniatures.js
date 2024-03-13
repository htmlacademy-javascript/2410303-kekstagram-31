import { drawBigPicturePopup, openPopup } from './picture-popup.js';

const drawMiniatures = (posts) => {

  const pictures = document.querySelector('.pictures');
  const similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

  const picturesFragment = document.createDocumentFragment();

  posts.forEach((post) => {
    const {id, url, description, likes, comments} = post;
    const PhotoElement = similarPhotoTemplate.cloneNode(true);

    const pictureImage = PhotoElement.querySelector('.picture__img');
    const countComments = PhotoElement.querySelector('.picture__comments');
    const countLikes = PhotoElement.querySelector('.picture__likes');

    pictureImage.src = url;
    pictureImage.alt = description;
    pictureImage.id = id.toString();
    countComments.textContent = comments.length;
    countLikes.textContent = likes;

    PhotoElement.querySelector('.picture__likes').textContent = likes;
    PhotoElement.querySelector('.picture__comments').textContent = comments.length;

    PhotoElement.addEventListener('click', () => {
      drawBigPicturePopup(posts);
      openPopup();
    });

    picturesFragment.append(PhotoElement);
  });

  pictures.append(picturesFragment);

};

export { drawMiniatures };
