// Проверка длины строки

function StringLength(line, lgth) {
  return line.length <= lgth;
}

StringLength('проверяемая строка', 20);

// Проверка является ли слово палиндромом

function Palindrom(string) {
  const lowerString = string.toLowerCase();
  const characters = lowerString.replaceAll(/[^а-яa-z1-9]/gi, '');
  const len = characters.length;
  for (let i = 0; i < len / 2; i++) {
    if (characters[i] !== characters[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

Palindrom('');


// // Строка является палиндромом
// имяФункции('топот'); // true
// // Несмотря на разный регистр, тоже палиндром
// имяФункции('ДовОд'); // true
// // Это не палиндром
// имяФункции('Кекс');  // false


// Module5-task2
// Проверка встречи checkMeetingTime

const getDate = (timeString = false/*true*/) => {

  const date = new Date();

  const array = timeString.toString().replaceAll(' ', '').split(':');

  if (array.length !== 2) {
    return null;
  }

  date.setHours(parseInt(array[0], 10));

  const minuteString = array[1];
  date.setMinutes(parseInt(minuteString, 10));

  date.setSeconds(0);
  date.setMilliseconds(0);

  return date;
};

const checkMeetingTime = (workTimeBeginString, workTimeEndString, meetTimeBeginString, meetDurationMinutes) => {
  if (meetDurationMinutes <= 0) {
    return false;
  }

  const workDateBegin = getDate(workTimeBeginString);
  const workDateEnd = getDate(workTimeEndString);

  if (workDateBegin > workDateEnd) {
    return false;
  }

  const meetDateBegin = getDate(meetTimeBeginString);
  const meetDateEnd = new Date(meetDateBegin);
  meetDateEnd.setMinutes(meetDateEnd.getMinutes() + meetDurationMinutes);

  return ((meetDateBegin >= workDateBegin) && (meetDateEnd <= workDateEnd));
};

checkMeetingTime('08:00', '17:30', '14:00', 90); // true
checkMeetingTime('8:0', '10:0', '8:0', 120); // true
checkMeetingTime('08:00', '14:30', '14:00', 90); // false
checkMeetingTime('14:00', '17:30', '08:0', 90); // false
checkMeetingTime('8:00', '17:30', '08:00', 900); // false
checkMeetingTime('8:00', '17:30', '08:5', 900); // false
checkMeetingTime('8:00', '17:30', '08:05', 900); // false
checkMeetingTime('8:00', '17:30', '08:05', 9000); // false
