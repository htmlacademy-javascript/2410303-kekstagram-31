import {COMMENTS_MESSAGES, USERS_NAME, IdCommentsCount, CommentsAvatar} from './constants.js';
import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';

const generateIdComments = createRandomIdFromRangeGenerator(IdCommentsCount.MIN, IdCommentsCount.MAX);

const createComments = () => ({
  id: generateIdComments(),
  avatar: `img/avatar-${getRandomInteger(CommentsAvatar.MIN, CommentsAvatar.MAX)}.svg`,
  message: getRandomArrayElement(COMMENTS_MESSAGES),
  name: getRandomArrayElement(USERS_NAME)
});

export { createComments };
