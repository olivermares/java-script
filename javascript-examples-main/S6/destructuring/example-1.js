// OBJECT
// const name = "Christian";

const user = { 
    name: 'Abel', 
    role: {
        name:'Profesor', 
        years: 3
    }, 
    age: 27
};

const {  name: otherName, role: { name, years}, age } = user; 
console.log(name); // Pro
console.log(otherName); // Abel
console.log(years); // 3
console.log(age); // 27
// Es igual a declararlo así. En el destructurín las variables tienene que llamarse igual a las propiedades del objeto
// const name = user.name;
// const role = user.role;


console.log(username, role);


const returnObj = () => {
    return { city: 'Seul', country: 'Corea del sur' };
}

const {city: ciudad, country} = returnObj(); // city = 'Seul', country = 'Corea del sur'
// IGUAL
// const {country, city} = returnObj(); // city = 'Seul', country = 'Corea del sur'

console.log(city, country);


// ARRAY

const cities = ['Seul', 'Tokio', 'Madrid', 'Londres'];

const [ciudadAsiatica, ciudadArchipielago, ladelcentro, ciudadinglesa] = cities;
// IGUAL
// const cities = ['Seul', 'Tokio', 'Madrid', 'Londres'];
// const ciudadAsiatica = cities[0];
// const ciudadArchipielago = cities[1];
// const ladelcentro = cities[2];
// const ciudadinglesa = cities[3];

console.log(ciudadAsiatica);
console.log(ciudadArchipielago);
console.log(ladelcentro);
console.log(ciudadinglesa);


