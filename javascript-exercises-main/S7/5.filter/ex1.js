//Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const ageMore18 = ages.filter(function(edad){  
    return edad>18;
})
console.log(ageMore18);

/*
FUNCION ANONIMA

function anonima(edad){
    return edad > 18
}

MI FUNCION filter
function filter(funcion){
    funcion()
}

for (let index = 0; index < ages.length; index++) {
    return anonima(ages[index]);
}
*/
