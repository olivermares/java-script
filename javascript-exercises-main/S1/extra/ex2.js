//Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

let i=0;
foodSchedule.forEach(element => {
    if(!element.isVegan){
        if(fruits.length>i)element.name=fruits[i];
        else console.log("ERROR");
        element.isVegan = true;
        i++;
    } 
});

console.log(foodSchedule);