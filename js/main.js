import { createdPosts } from './create-posts.js';
// console.log(createdPosts());

const body = document.body;
const similarPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarPhotos = createdPosts();


similarPhotos.forEach((post) => {
  const PhotoElement = similarPhotoTemplate.cloneNode(true);
  const container = document.createElement('div');
  PhotoElement.querySelector('.picture__img').src = post.url;
  PhotoElement.querySelector('.picture__img').alt = post.description;
  PhotoElement.querySelector('.picture__likes').textContent = post.likes;
  PhotoElement.querySelector('.picture__comments').textContent = post.comments.length;
  body.appendChild(container);
  container.classList.add('container');
  container.appendChild(PhotoElement);
});


