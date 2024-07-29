let name = null;
let text = "missing";
let result = name ?? text;
document.getElementById("demo").innerHTML = "The name is " + result;

const hour = new Date().getHours;
let greeting;
if(hour > 18){
greeting = "good day";
}else{
    greeting = "good evening";
}

document.getElementById("demo1").innerHTML = greeting;

const time = new Date().getHours();
let greetings;
if (time < 10) {
  greetings = "Good morning";
} else if (time < 20) {
  greetings = "Good day";
} else {
  greetings = "Good evening";
}
document.getElementById("demo2").innerHTML = greetings;

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo3").innerHTML = "Today is " + day;

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text1 = "";
for (let i = 0; i < cars.length; i++) {
  text1 += cars[i] + "<br>";
}

document.getElementById("demo3").innerHTML = text1;

const car = ["BMW", "Volvo", "Saab", "Ford"];

let len = car.length;
let text2 = "";

for (i = 2; i < len; i++) {
  text2 += car[i] + "<br>";
}

document.getElementById("demo5").innerHTML = text2;

const num = [1,45,24,26];
let tex = "";
for (let x in num){
    tex += num[x] + "<br>";
}

document.getElementById("demo6").innerHTML = tex;


const names = "W3Schools";


let text3 = ""
for (const x of names) {
  text3 += x + "<br>";
}

document.getElementById("demo7").innerHTML = text3;

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  

  let text4 = "";
  for (const x of fruits) {
    text4 += x + "<br>";
  }
  
  document.getElementById("demo8").innerHTML = text4;