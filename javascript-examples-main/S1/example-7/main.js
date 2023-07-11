// Primitivos
let a; // undefined

a = "Pepe";
a = 15;
a = true; // false
a = null;

const x = "Abel";
const y = x;

let person = {
  name: "Abel",
  role: "Teacher",
  age: 27,
};

console.log(person.name); // "Abel"
console.log(person.role); // "Teacher"
console.log(person.age); // 27

person.alias = "El Pepe";
console.log(person.alias); // "El Pepe"

// No primitivos
const b = {
  name: { firstName: "Abel", secondName: "Felix" },
  surname: "Cabeza Román",
  years: 99,
};

console.log(b);
console.log(b.name.firstName, b.surname, b.years);

b.name.firstName = "Pepe";
b.role = "Profesor";

console.log(b.role); // Profesor

// b = "Juan" Esto no

a = ["Abel Cabeza Román", "Jesica Victoria", "Angel Garcia Lopez"];
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

a = [99, 34, 23];
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

a = [
  { name: "Abel", surname: "Cabeza Román", years: 99 },
  { name: "Jesica", surname: "Victoria", years: 34 },
  { name: "Angel", surname: "Garcia Lopez", years: 23 },
];
console.log(a);
console.log(a[0]);
console.log(a[0].name);
console.log(a[0].surname);
console.log(a[0].years);
console.log(a[1]);
console.log(a[2]);

// Referencias
let b = 10;
let c = b; // 10
c = 20;
// b = 10 y c = 20

let d = { name: "Abel", surname: "Cabeza Román" };
let e = d;
e = { name: "Juan", surname: "Pepe" };

e.name = "Pedro";
console.log(d.name);
console.log(e.name);

const f = { name: "Gris", gender: "F" };
const g = { name: "Abel", surname: "Cabeza Román", pet: f };
const h = { ...g };

h.name = "Sara";

h.pet.name = "Julius";

console.log(f.name);
console.log(h.pet.name);
console.log(g.name);

const i = JSON.parse(JSON.stringify(g));
console.log(i);

JSON.stringify(g); // "{name: 'Abel', surname: 'Cabeza Román', pet: {name: "Gris", gender: "F"}}"
JSON.parse(JSON.stringify(g)); // {name: 'Abel', surname: 'Cabeza Román', pet: {name: "Gris", gender: "F"}}

// Referencias de list
const list = [1, 5, 7, 8];

function remove(paramList) {
  paramList.splice(0, 1);
  console.log(paramList);
}

remove([...list]); // [5, 7, 8]
remove([6, 9, 10]); // [9, 10]

console.log(list); // [1, 5, 7, 8]
