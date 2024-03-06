import { createdPosts } from './create-posts.js';
// console.log(createdPosts());

const similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarPhotos = createdPosts();
const pictures = document.querySelector('.pictures');


similarPhotos.forEach((post) => {
  const PhotoElement = similarPhotoTemplate.cloneNode(true);
  PhotoElement.querySelector('.picture__img').src = post.url;
  PhotoElement.querySelector('.picture__img').alt = post.description;
  PhotoElement.querySelector('.picture__likes').textContent = post.likes;
  PhotoElement.querySelector('.picture__comments').textContent = post.comments.length;
  pictures.appendChild(PhotoElement);
});


