"use strict";
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// const elements = document.getElementById("super_link");
// console.log(elements);
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// const element = document.querySelectorAll('.card-link');    
//       element.textContent = 'ссылка';
//     console.log(element)

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const elem = document.querySelectorAll('.card-body .card-link');    
      console.log(elem)
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const atribut = document.querySelector('[data-number="50"]');    
      console.log(atribut)
// 5. Выведите содержимое тега title в консоль.
console.log(document.title)
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const rod = document.querySelector('.card-title').parentNode;    
      console.log(rod)
// 7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

// 8. Удалите тег h6 на странице.
