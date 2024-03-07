import {getRandomInteger, createRandomIdFromRangeGenerator} from './util.js';
import {DESCRIPTIONS, COMMENTS_MESSAGES, USERS_NAME, POST_COUNT, IdCount, IdCommentsCount, UrlCount, LikesCount, CommentsCount, CommentsAvatar} from './constants.js';

// Генерация ID и URL адресов
const generateId = createRandomIdFromRangeGenerator(IdCount.MIN, IdCount.MAX);

const generateIdComments = createRandomIdFromRangeGenerator(IdCommentsCount.MIN, IdCommentsCount.MAX);

const photosRandomUrl = createRandomIdFromRangeGenerator(UrlCount.MIN, UrlCount.MAX);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComments = () => ({
  id: generateIdComments(),
  avatar: `img/avatar-${getRandomInteger(CommentsAvatar.MIN, CommentsAvatar.MAX)}.svg`,
  message: getRandomArrayElement(COMMENTS_MESSAGES),
  name: getRandomArrayElement(USERS_NAME)
});

const createPost = () => ({
  id: generateId(),
  url: `photos/${photosRandomUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LikesCount.MIN, LikesCount.MAX),
  comments: Array.from({ length: getRandomInteger(CommentsCount.MIN, CommentsCount.MAX) }, createComments)
});

export const createdPosts = () => Array.from({ length: POST_COUNT }, createPost);

