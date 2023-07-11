const result1 = true == 1;
const result2 = false == 0;
const result3 = "1" == 1;
const result4 = undefined == null;

const result5 = true === 1;
const result6 = false === 0;
const result7 = "1" === 1;
const result8 = undefined === null;

const wtf = result6 === result7 || result8; // 🤯

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);
console.log(result8);
console.log(wtf);

const result9 = 2 != 1;

console.log(result9);


const edad = 15;

const soyMenor = edad < 18; // true

const mePuedoJubilar = edad >= 65; // false