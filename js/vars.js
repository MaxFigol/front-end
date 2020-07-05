// переменные
// var myFirstVar;
var mySecondVar = "Hello World ";

myFirstVar = 34.34;

var num = 50;
var nothing = null;
let number = 47;
const Number = 66;
let num2 = 50;

console.log("Result " + (num + num2));
console.log("Переменная: " + mySecondVar + myFirstVar + nothing);
console.log(number + " " + Number);
console.log(Number);


//   Условные операторы

let x = 20;
let y = 20;

if (x > y) {
  console.log("Числа не равны");
} else if (x == y) {
  console.log("Равны");
}
else
  console.log("Числа равны");

let nums = 11;
let res = "";
if (nums == 12) {
  res = "12"
} else {
  res = "No12"
}
 console.log(res);

let result2 = nums == 13 ? "Big" : "Small";
console.log(result2);


// массивы

let arrey = [45, 55, 65, 75, 85]; //массив(одномернный)
arrey.push("Bob"); // добавляет последний элемент в цикл
arrey.unshift("Bob"); // добавляет первый элемент в цикл
arrey.pop(); // удаляет последний элемент в цикле
arrey.length = 5; // устанавливает количество массива
delete arrey[4]; // удаляет выбраный массив
console.log(arrey);


let arr = new Array(45, 55, 65, 75, 85); // массив
console.log(arr);

let matrix = [[56, 45],[25, "Hello"]]; // массив в массиве(двухмернный)
console.log(matrix);

matrix[1][1] = "World"; //вывод выбранного массива
console.log(matrix[1][1]);

let str = "Hello, world, 12, 12, 12, qqq";
let arrey_split = str.split(", "); // функция преобразовывает переменную в массив
console.log(arrey_split);

let arrey2 = [45, 55, 65, 75, 85];
let str2 = arrey2.join(","); // функция переводит массив в строку
console.log(str2);

let arrey_ = [45, 55, 65, 75, 85];
arrey_.splice(0, 2); // удаляет элементы в массиве в диапазоне
console.log(arrey_);


// циклы


for (var l = 0; l < 20; l++) {
  if (l > 10) {
    break;
  }
  console.log(l);
 }


let i = 1;
while (i < 30) {
  console.log(i);
  i++;
}


var p = 1;
do {
  console.log(p);
  p++;
} while (p < 10);

let arr = ["hello", 25, 35, "world"];
for (var i = 0; i < arr.length; i++) { //циклы с массивами
  console.log(arr[i]);
}

arr.forEach(function(item, i, arrey){ // циклы с масивами через функцию
  console.log(i, item,);
})


//функции

function show2(){
  let el = "Hello World";
  console.log(el);
}
setTimeout(show2, 1000);

show2();

function show(a, b){
  if (b == undefined) {
    b = 10;
  }
  let res = a + b;
  console.log(res);
}

show(21,);

function multiply(a, b, c){
  let result = a * b * c;
  return result;
}

let mult = multiply(12,12,12);
console.log(mult);

function arreyEven(arrey){
  let isEven = true;
  arrey.forEach(function(item, i, arr){ // forEach перебирае массив
    if(item % 2 !=0)
    isEven = false;
  })
  return isEven;

}

let arr = [2, 3, 3, 4];
let arr2 = [2,2,2,2];
let isEven = arreyEven(arr2);
console.log(isEven);

let interval = setInterval(function(){  //функция выполняется через интервал в секундах
  console.log('привет');
}, 2000);

setTimeout(function() { //функция выполняет через время
  clearInterval(interval); // очищает функцию и останавливает
  console.log('Stop');
}, 10000);

//функции для взаимодействия с пользователем

alert("Привет");

prompt("Сколько вам лет?", 18);

confirm("Согласны ли вы на обработку данных? ");


// обьекты
let car = {
  marka: "Volvo",
  color: "White",
  type: "Sedan",
  speed: "220",
  passengers: ["Alex", "BOB"],
};


for(let key in car) {
  console.log("Элемент" + key + car[key]);
}



class Car {
  constructor(marka, color, type, speed){  //класс
    this.marka = marka;
    this.color = color;
    this.type = type;
    this.speed = speed;
  }
  info(){
    console.log("Марка: " + this.marka); //функция в классе
  }
}

let bmw = new Car("M3", "Blue", "Sedan", 220);
let volvo = new Car("Volvo", "Red", "Sedan", 210);
console.log(bmw);
console.log(volvo);

bmw.color = "Red";

bmw.info();
volvo.info();

// JSON

let obj = '{"name": "Alex", "age": 50}'; //Json обьект

obj = JSON.parse(obj); //переводит JSON в обьект
console.log(obj.name);

var object = {
  name: "Max",
  "age": 45,
  "state": 'UA'

};

let str = JSON.stringify(object, "", 5); // переводит в JSON формат
console.log(str);

//работа с обьектами HTML

let content = document.getElementById("content"); // выбирает по id
let tagname = document.getElementsByTagName("body"); // выбирает по имени тега
let elements = content.getElementsByTagName("p")[2]; //
console.log(content);
console.log(tagname);
console.log(elements);

//for (var i = 0; i < elements.length; i++) {
  //console.log(elements[i]);
//};

//let el = document.getElementsByName("name")[0].tagName;
//console.log(el);

let allclass = document.getElementsByClassName("sum");
console.log(allclass);

let el2 = document.querySelectorAll(".sum");
console.log(el2);

let el1 = document.querySelector(".sum");
console.log(el1);

let el3 = document.querySelectorAll(".sum")[1]; // меняет значение в выбраном элементе
el3.innerHTML = "Привет";

let input = document.querySelector("input[type='text']");
input.value = "New text";
if(input.hasAttribute("type"))
   input.getAttribute("text");// получает значение атрибута


input.setAttribute("classs", "world"); //устанавливает атрибут

input.className = "some new test";
//alert(input.className);


document.write("Text");
input.style.border = "2px sold silver";
input.style.borderRadius = "2px";
input.style.backgroundColor = "silver";
input.style.padding = "5px";

// события клавиатуры и мыши

let text = document.querySelector(".fulltext")

text.onkeydown = function(e){ //отслеживает нажатие на клавиатуру
  console.log("onkeydown: " + e.key);
};

text.onkeypress = function(e){ //отслеживает нажатие на клавиатуру
  console.log("onkeypress: " + e.key);
};

text.onkeyup = function(e){ //отслеживает нажатие на клавиатуру
  console.log("onkeyup: " + e.key);
};


let boldText = document.querySelector("p > b.boldtext");

boldText.ondblclick = function() {
  boldText.style.color = "blue";
};


//boldText.onclick = function() {
  //boldText.style.color = "red";
//};

boldText.onmousedown = function() {
  boldText.style.color = "silver";
};

boldText.onmouseup = function() {
  boldText.style.color = "yellow";
};

boldText.oncontextmenu = function() {
  boldText.style.color = "pink";
};

let inputField = document.querySelector('.input');
let helpField = document.querySelector('.hint');

inputField.onmouseenter = function() {
  helpField.style.display = "block";
};

inputField.onmousemove = function(e) {
  helpField.style.left = e.pageX + "px";
  helpField.style.top = e.pageY + "px";
};

inputField.onmouseleave = function() {
  helpField.style.display = "none";
};


// события сенсорного экрана

let tap = document.querySelector("#tap");
window.addEventListener('touchstart', function(e) {
  tap.style.background = "red";
});

window.addEventListener('touchmove', function(e) {
  tap.style.left = e.targetTouches[0].pageX + "px";
  tap.style.top = e.targetTouches[0].pageY + "px";
});

window.addEventListener('touchend', function(e) {
  tap.style.background = "blue";
});


// страница комментариев

let btnForm = document.querySelector("#comments-form button");
let countComments = 0;
let idComment = 0;

btnForm.onclick = function() {
  idComment++;
  let form = document.querySelector("#comments-form");
  if(form.name.value.length < 4) {
    document.querySelector("#error").innerHTML = "Длина имени не менее 4 символов";
    return false;
  } else if (form.comment.value.length < 10) {
    document.querySelector("#error").innerHTML = "Длина сообщения не менее 10 символов";
    return false;
  }

  document.querySelector("#error").innerHTML = "";

  //установим новое значение для комментариев

  if (countComments == 0)
    document.querySelector("#comments").innerHTML = "";

    countComments++;
    document.querySelector(".count-comm").innerHTML = countComments;

  let newComment = "<div class='comment' id='block-" + idComment +"'>" +
  "<span class='delete' onclick='delComm(" + idComment + ")'>&times;</span>" +
  "<p class='name'>" + form.name.value + "</p>" +
  "<p class='mess'>" + form.comment.value + "</p>" +
  "</div>";

  document.querySelector("#comments")
    .insertAdjacentHTML('afterbegin', newComment); //beforeend

   // очистка формы

   form.comment.value = "";
};

function delComm(id) {
  document.querySelector("#block-" + id).remove();

  countComments--;
  document.querySelector(".count-comm").innerHTML = countComments;

  if(countComments == 0)
  document.querySelector("#comments").innerHTML = "Пока Нет Комментариев";
}
