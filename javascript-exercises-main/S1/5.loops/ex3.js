//Crea un bucle para conseguir dormir contando ovejas. Este bucle empieza en 0 y termina en 10. Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle y cambia el mensaje en la última vuelta a 'Dormido!'.

console.log( 'Primera forma');
for(let i=1; i<=10; i++){
    if(i<10)console.log('Intentando dormir');
    else console.log('Dormido');
}

console.log('Segunda forma');
for(let i=1;i<10;i++){
    if(i<10)console.log('Intentando dormir');
}
console.log('Dormido');

console.log('Tercera forma')
let dormiendo=flase;  //Variable que se deve cambiar de alguna forma.
let i=1;
while(i<=10 && !dormiendo){
    if(i<10)console.log('Intentando dormir');
    else console.log('Dormido');
    i++;
}

console.log('Cuarta forma. Igual que la tercera pero con la forma de la segunda');