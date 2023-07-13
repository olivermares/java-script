
/*
Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:

```js
function findArrayIndex(array, text) {}
```

Ej array:
````js
['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
*/

let ejemplos =[['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], ["Saab", "Volvo", "BMW"], ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']]
let texts = ['mosquito' , 'bmw', 'no']

function findArrayIndex(array, text) {
    return array.findArrayIndex()
}

for (const ejemplo of ejemplos) {
    console.log(findArrayIndex(ejemplo,ejemplo[0]));
}

