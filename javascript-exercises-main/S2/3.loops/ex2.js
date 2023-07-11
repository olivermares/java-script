//Usa un forin para imprimir por consola los datos del alienigena.

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for(const key in alien){
    console.log('Aline tinene como ' + key + ' : ' + alien[key]);
}