const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Citroen C4'];

const indexOfAudi = cars.indexOf('Audi A4');
console.log(indexOfAudi);

cars.splice(indexOfAudi, 1);
console.log(cars);