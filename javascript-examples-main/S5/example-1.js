function a() {}

const a = () => {}

const hello = "Hello";
const name = "Abel";

function getText(hello = "Hola", name = "Pepe") {
  return hello + " " + name;
}

getText();
getText("Hello");
getText("Hello", "Abel");

// IGUALES
const getText = (hello, name) => {
  return hello + " " + name;
};

const getText = (hello, name) => hello + " " + name;
// IGUALES

const getText = (hello, name) => {
  name += " Jimenez";
  return hello + " " + name;
};

// MAL
// const getText = (hello, name) =>
//     name += ' Jimenez';
//     hello + ' ' + name;

function print(printText) {
  console.log(printText);
}

// IGUALES
const print = (printText) => {
  console.log(printText);
};

const print = printText => {
  console.log(printText);
};

// IGUALES

// MAL - solo podemos quitar los parentesis con un solo parametro. Si tenemos dos o mas hay que poner los parentesis
// const print = printText, printText2 => {
//     console.log(printText)
// }

// COMBO BREAKER xd

// function getPrint(printText){
//     return "Hola " + printText;
// }

const getPrint = (printText) => "Hola " + printText;

console.log(getPrint("Abel")); // Hola Abel;

// CON CALLBACK

const numbers = [12, 27, 88, 93];

// const luckyNumber = numbers.find(function (num) {
//   return num === 88;
// });

// const luckyNumber = numbers.find((num) => {
//   return num === 88;
// });

const luckyNumber = numbers.find(num => num === 88);
