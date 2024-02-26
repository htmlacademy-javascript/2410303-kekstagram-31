// // Проверка длины строки

// function StringLength(line, lgth) {
//   line = 'проверяемая строка';
//   lgth = 20;
//   return line.length <= lgth;
// }

// StringLength();

// // Проверка является ли слово палиндромом

// function Palindrom(string) {
//   const lowerString = string.toLowerCase();
//   const characters = lowerString.replaceAll(/[^а-яa-z1-9]/gi, '');
//   const len = characters.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (characters[i] !== characters[len - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// Palindrom('');


// // // Строка является палиндромом
// // имяФункции('топот'); // true
// // // Несмотря на разный регистр, тоже палиндром
// // имяФункции('ДовОд'); // true
// // // Это не палиндром
// // имяФункции('Кекс');  // false
