//Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.

/*
Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.

```js
const runTimeOut = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    promise.then(() => {console.log('Time out!')})
};

runTimeOut();
*/

const runTimeOut = async (i=2000) => {
    await new Promise((resolve) => {
            //console.log(i)
        setTimeout(function () {
            resolve();
        }, i);
    })
    //console.log(promise)
    console.log('Time out!')
};

//runTimeOut();
for (let index = 0; index < 5; index++) {
    runTimeOut(index*1000)
}