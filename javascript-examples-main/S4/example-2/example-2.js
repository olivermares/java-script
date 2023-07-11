function callbackexample(list, message) {
    console.log(`Soy un dinosaurio me estinguí: ${list.join(', ')} -`, message);
}

function callbackexample2(list, message) {
    console.log(`Soy una mariposa mira como vuelo: ${list.join(', ')} -`, message);
}

function addItemAndTrigger(item, list, functionCallbackExample) {
    list.push(item);
    functionCallbackExample(list, '[OK]');
}

addItemAndTrigger('Mario', ['Alberto', 'Jose'], callbackexample);
addItemAndTrigger('Mario', ['Alberto', 'Jose'], callbackexample2);


// SIMPLE




function callbackexample() {
    console.log(`Soy un dinosaurio me estinguí`);
}

function callbackexample2() {
    console.log(`Soy una mariposa mira como vuelo`);
}

function addItemAndTrigger(callback) {
    console.log('Soy el padre');
    // const p$$ = document.createElement('p')
    // p$$.classList.add('fn-loquesea')
    callback();
}

addItemAndTrigger(callbackexample);

addItemAndTrigger(callbackexample2);

addItemAndTrigger(function () {
    console.log(`Soy un puercospin`);
});



function a(callback) {
    console.log("Hey!");
    callback("Pepe");
}

function c(name) {
    console.log("Hola! " + name);
}

function d(name) {
    console.log("Adios! " + name);
}

a(c);
a(d);
c("Juan");
d("Luisa");



array.filter(function (item, index){
    console.log(item)
})

const text = "Hola";

function print(param) {
    console.log(param)
}

print(text);


a(function () {
    console.log("Hola! " + name);
});

a(() => {
    console.log("Adios! " + name);
})



// function sum(a, b){
//     return a + b
// }
// sum(false, {});



function print(callback, vehicle) {
    const nodeToPrint$$ = callback(vehicle)
    document.body.appendChild(nodeToPrint$$)
}

function createCar(car) {
    const div$$ = document.createElement("div");
    div$$.innerHTML = `
        <div><h1>${car.name}</h1></div>
    `
    return div$$
}

function createMotorBike(bike) {
    const div$$ = document.createElement("div");
    div$$.innerHTML = `
        <span>${bike.name}</span>
    `
    return div$$
}

const car = { name: "Mazda 6" }
const motorbike = { name: "Kawasaki" };


print(createCar, car);
print(createMotorBike, motorbike);





function print(){
    console.log("Hey!");
}

div$$.addEventListener("click", print);

div$$.addEventListener("click", function(){
    console.log("Hey!");
});


const numbers = [1,2,456,35,6234]
numbers.find(function (num){return num === 456})









function print(callback){
    console.log("Resultado de tu operación matematica: " + callback())
}

function sum(a, b){
    return a + b;
}

// function substract(a, b){
//     return a - b;
// }

function pepe(){
    sum(10, 5)
}

print(pepe) // 10 + 5
print(function() {sum(20, 10)}) // 20 + 10