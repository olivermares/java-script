//Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos.

const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}]
var result = 0;
console.log(result);

products.forEach(element => {
    result += element.sellCount;
});

console.log(result);
result=0;

for (let i=0;i<products.length;i++){
    result += products[i].sellCount;
}
console.log(result);
