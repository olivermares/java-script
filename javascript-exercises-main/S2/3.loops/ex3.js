//Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array.

const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}];

/*Primera forma. NO acabada. Preguntar
placesToTravel.forEach(element => {
    if(element.id === 11 || element.id === 40)placesToTravel.splice(element)
});
*/

//Segunda forma
for(let i=0; i<placesToTravel.length; i++){
    if(placesToTravel[i].id === 11 || placesToTravel[i].id === 40)console.log(placesToTravel.splice(i,1));
}

console.log(placesToTravel);

//Tercera forma en una linia. Forma avanzada
//console.log(placesToTravel.splice(placesToTravel.indexOf(id=11),1));
//de momneto no, mas adelante