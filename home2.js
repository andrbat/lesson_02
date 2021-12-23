/*
 * Написати функцію, яка отримуватиме в аргумент
 * масив votes та повертати масив унікальних значень
 * відсортованих за кількістю їх входження до масиву votes
 * Результат повинен вийти таким [react, vue, angular]
 * */

const votes = [
  "angular",
  "react",
  "vue",
  "react",
  "angular",
  "react",
  "vue",
  "react",
  "vue",
];

function getVotes(list) {
  return [... new Set(list)];
}

function getVotes2(list) {
  return list.reduce((acc, item) => { !acc.includes(item) && acc.push(item); return acc; }, []);
}

console.log(getVotes(votes)); // [react, vue, angular]
console.log(getVotes2(votes)); // [react, vue, angular]
