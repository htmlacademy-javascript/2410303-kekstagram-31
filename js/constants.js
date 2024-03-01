const DESCRIPTIONS = [
  'Место',
  'Women',
  'Man',
  'family',
  'photoshop'
];

const COMMENTS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


const USERS_NAME = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор'
];

const POST_COUNT = 25;

const GenerateIdCount = {
  MIN: 1,
  MAX: 25
};

const GenerateIdCommentsCount = {
  MIN: 1,
  MAX: 1000
};
const UrlCount = {
  MIN: 1,
  MAX: 25
};

const LikesCount = {
  MIN: 15,
  MAX: 200
};

const CommentsCount = {
  MIN: 0,
  MAX: 30
};

const CommentsAvatar = {
  MIN: 1,
  MAX: 6
};

export {DESCRIPTIONS, COMMENTS_MESSAGES, USERS_NAME, POST_COUNT, GenerateIdCount, GenerateIdCommentsCount, UrlCount, LikesCount, CommentsCount, CommentsAvatar};
