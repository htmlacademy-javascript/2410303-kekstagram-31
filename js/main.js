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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

// Генерация ID и URL адресов
const generateId = createRandomIdFromRangeGenerator(GenerateIdCount.MIN, GenerateIdCount.MAX);

const generateIdComments = createRandomIdFromRangeGenerator(GenerateIdCommentsCount.MIN, GenerateIdCommentsCount.MAX);

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

const createdPosts = Array.from({ length: POST_COUNT }, createPost);

function addPosts() {
  return createdPosts;
}

addPosts();

