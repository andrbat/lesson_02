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
  const out = [];
  list.forEach(el => {
    let idx = findEl(el);
    if (idx == -1) {
      out.push({ name: el, count: 1 });
    } else {
      out[idx].count += 1;
    }
  });
  out.sort((a, b) => { return b.count - a.count });
  function findEl(el) {
    for (let i = 0; i < out.length; i++) {
      if (out[i].name == el) {
        return i;
      }
    }
    return -1;
  }
  return out.map(item => { return item.name });
}

console.log(getVotes(votes)); // [react, vue, angular]
