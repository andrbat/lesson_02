/*
  * Створити функцію filter(arr, fn), яка
  * - приймає як аргументи масив arr і функцію fn
  * - повертає новий масив, який містить ті елементи arr, котрим fn повертає true.
  */

const arr = [11, 66, 33, 44, 22, 55, 2];

function filter(arr, fn) {
  const out = []
  for (let value of arr) {
    fn(value) && out.push(value);
  }
  return out;
}

// Перевірка - повернути масив з елементами значення яких більше 50
const filteredArr = filter(arr, function (item) { return item > 50; });

console.log(filteredArr); //   [66, 55]]
