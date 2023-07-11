const div$$ = document.querySelector("[data-fn='add']");
const text = "Hola";

// const childDiv$$ = document.createElement("div");
// const p$$ = document.createElement("p");
// p$$.textContent = "Hola";
// childDiv$$.classList.add("juan");
// childDiv$$.appendChild(p$$);
// div$$.appendChild(childDiv$$);


div$$.innerHTML = '<div class="juan"><p>' + text + '</p></div>';



function clicked(){
    console.log("Me han clickado")
}

const divClick$$ = document.querySelector("[data-fn='click']");

divClick$$.addEventListener("click", clicked);

divClick$$.innerHTML = `<div>
    <p>
        <span>Click me ${text}</span>
    </p>
</div>`






