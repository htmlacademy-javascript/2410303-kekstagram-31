const drawMiniatures = (posts) => {

  const pictures = document.querySelector('.pictures');
  const similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const picturesFragment = document.createDocumentFragment();

  posts.forEach(({url, description, likes, comments}) => {

    const PhotoElement = similarPhotoTemplate.cloneNode(true);

    const pictureImage = PhotoElement.querySelector('.picture__img');

    pictureImage.src = url;
    pictureImage.alt = description;

    PhotoElement.querySelector('.picture__likes').textContent = likes;

    PhotoElement.querySelector('.picture__comments').textContent = comments.length;

    picturesFragment.append(PhotoElement);
  });

  pictures.append(picturesFragment);

};

export { drawMiniatures };
