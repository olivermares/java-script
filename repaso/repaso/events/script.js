// const obtenerValor =() => {
//     const input$$ = document.querySelector("input")
//     console.log(input$$.value);

// }
// obtenerValor()
// const input$$ = document.querySelector("input")
// const obtenerValor =(event) => {
//    console.log(event);

//     // console.log(input$$.value);
// //   console.log("aqui estoy");
// }
// input$$.addEventListener("focus",obtenerValor)

// obtenerValor()
const nav= [
    "home",
    "about",
    "contact",
    "gallery"
]
const mostrarValor = (ev)=> {
    console.log(ev);
}
for (const element of nav) {
    const button$$ = document.createElement("button")
    button$$.addEventListener("click",mostrarValor)
    button$$.textContent= element
    document.body.appendChild(button$$)
}

const button1$$ = document.querySelector("button")
const button2$$ = document.querySelector(".button")
// console.log(button1$$,button2$$);
const contador = (ev) => {
    if (ev.target.innerText ==="+") {
        console.log("estoy sumando");
    }else{
        console.log("estoy restando");
    }
    console.log(ev);
    console.log(window.innerHeight)
    // window.innerHeight=28
}
button1$$.addEventListener("click",contador)
button2$$.addEventListener("click",contador)


