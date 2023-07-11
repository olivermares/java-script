const myArray = ['Alberto', 'Mario', 'Jose', 'Juan'];

const myFunction = function (element) {
    console.log(element);
}

myArray.forEach(myFunction);

// IGUAL

myArray.forEach(function (element) {
    console.log(element);
});

// FOR

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index]
    console.log(element);
}

// FOROF

for (const element of myArray) {
    console.log(element)
}


// FOR IN

// Definimos un objeto con los datos de una spiederman
const spiderman = {
    nombre: "Peter",
    apellidos: "Parker",
    pais: "USA",
    profesion: "Student"
}

for (var key in spiderman) {
    console.log("Spiderman tiene " + key + " con valor: " + spiderman[key]);
}