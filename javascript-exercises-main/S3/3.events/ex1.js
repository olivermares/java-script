//Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

document.body.innerHTML = `<button id=btnToClick>CLICK 1</button>`

const btn1$$ = document.querySelector('#btnToClick')

btn1$$.addEventListener('click',print)

function print (){
    console.log("voy bien")
}

//mejor 
document.body.insertAdjacentHTML("beforeend", `<button id=btnToClick1 onclick="print">CLICK 2</button>`) //Funciona pero hay que preguntar que hace onclick

const btn2$$ = document.querySelector('#btnToClick1')

btn2$$.addEventListener('click',print);
