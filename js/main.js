const DESCRIPTION = [
  'Место',
  'Women',
  'Man',
  'family',
  'photoshop'
];

const COMMENTS_MESSAGE = [
  'КоментКоментКоментКоментКомент',
  'КоментКоментКоментКоментКомент',
  'КоментКоментКоментКоментКомент',
  'КоментКоментКоментКоментКомент',
  'КоментКоментКоментКоментКомент',
  'КоментКоментКоментКоментКомент'
];


const USERS_NAME = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор'
];

const POST_COUNT = 25;

const likesCount = {
  MIN: 15,
  MAX: 200
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
const generateId = createRandomIdFromRangeGenerator(1, 25);

const generateIdComments = createRandomIdFromRangeGenerator(1, 1000);

const photosRandomUrl = createRandomIdFromRangeGenerator(1, 25);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComments = () => ({
  id: generateIdComments(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS_MESSAGE),
  name: getRandomArrayElement(USERS_NAME)
});

const createPost = () => ({
  id: generateId(),
  url: `photos/${photosRandomUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(likesCount.MIN, likesCount.MAX),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComments)
});

const createdPosts = Array.from({length: POST_COUNT}, createPost);
console.log(createdPosts);
