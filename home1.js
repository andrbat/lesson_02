/* 
 Завдання
1. За допомогою debugger проаналізувати чому виходить
так що при натисканні на будь-який елемент li ми в alert() отримуємо цифру 5
а за логікою повинні отримувати номер елемента, на який клікнули

2. За допомогою замикання зробити так, щоб при натисканні на елемент
    li отримували його номер (let НЕ ВИКОРИСТОВУВАТИ)
   
3. Виконати задачу 2 але використовуючи оголошення
    ітераційної змінної через let
*/

const list = document.getElementById("list");
const els = list.getElementsByTagName("li");

for (var i = 0, len = els.length; i < len; i++) {
  els[i].onclick = fn.bind(null, i);
  function fn(i) {
    // debugger;
    alert(i);
  };
}
