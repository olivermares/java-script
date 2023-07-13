/*  Titulo
Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
`removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.
*/

let ejemplos =[['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], ["Saab", "Volvo", "BMW"], ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']]

console.log(ejemplos)

function findArrayIndex(array, text) {
    return array.indexOf(text)
} 

function removeArrayIndex(array, text){  
    if(findArrayIndex(array, text) != -1) array.splice(findArrayIndex(array, text),1)
}

for (const ejemplo of ejemplos) {
    removeArrayIndex(ejemplo,'Volvo');
}

console.log(ejemplos)