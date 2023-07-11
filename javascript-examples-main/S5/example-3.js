//CLOUSURE

// const generateAMultiplier = a => b => a * b;
// const generateAMultiplier = a => (b) => a * b;

const generateAMultiplier = (a) => {
  return (b) => {
    return a * b;
  };
};

const multiplier = generateAMultiplier(5);

const foo = multiplier(10);

console.log(foo);
// Devuelve - 50

// function print(){
//     console.log("pepe")
//     return function(){
//         alert("pepe")
//     }
// }

// const soyYo = print();

// soyYo();

