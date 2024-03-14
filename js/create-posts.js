import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';
import {DESCRIPTIONS, POST_COUNT, IdCount, UrlCount, LikesCount, CommentsCount} from './constants.js';
import {createComments} from './create-comments.js';

// Генерация ID и URL адресов
const generateId = createRandomIdFromRangeGenerator(IdCount.MIN, IdCount.MAX);

const photosRandomUrl = createRandomIdFromRangeGenerator(UrlCount.MIN, UrlCount.MAX);

const createPost = () => ({
  id: generateId(),
  url: `photos/${photosRandomUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LikesCount.MIN, LikesCount.MAX),
  comments: Array.from({ length: getRandomInteger(CommentsCount.MIN, CommentsCount.MAX) }, createComments)
});

export const createdPosts = () => Array.from({ length: POST_COUNT }, createPost);

