const a$$ = document.querySelector('.fn-pepe')

a$$.removeAttribute("id");
a$$.setAttribute("href", "http://google.es");
const aHref = a$$.getAttribute("href"); 
console.log(aHref);//http://google.es

const div$$ = document.querySelector('.fn-check-me')

const attributeValue = div$$.getAttribute("data-aria-label");

console.log(div$$.attributes);

console.log(div$$.className);

console.log(div$$.classList);
div$$.classList.add('clase-nueva'); // añade una clase
div$$.classList.remove('pepe-class'); // elimina una clase
div$$.classList.toggle('clase-nueva'); // si la clase esta añadida, la quita, y si no esta añadida, la pone
console.log(div$$.classList);

console.log(div$$.id);



//<div>
//     <p>Soy un <span>div</span></p>
//</div>

// const p$$ = document.createElement("p");
// p$$.classList.add("clase-dinamica");
// const span$$ = document.createElement("span");
// span$$.textContent = "Pepe";
// p$$.appendChild(span$$);
// div$$.appendChild(p$$);
const nombre = "Abel";

console.log(div$$.innerHTML); // <p>Soy un <span>div</span></p>
div$$.innerHTML = '<p class="clase-dinamica"><span>Pepe</span></p>'; // <div><p>...</p></div>
// ESTA LINEA ES IGUAL A LO DE ABAJO
// const p$$ = document.createElement("p");
// p$$.classList.add("clase-dinamica");
// const span$$ = document.createElement("span");
// span$$.innerHTML = "Pepe";
// p$$.appendChild(span$$);
// div$$.appendChild(p$$);

console.log(div$$.outerHTML); // <div><p>Soy un <span>div</span></p></div>
// div$$.innerHTML = `<p>pepe</p>` // <div><p>pepe</p></div>
// div$$.outerHTML = `<p>pepe</p>` // <p>pepe</p>



console.log(div$$.nodeName);

console.log(div$$.nodeValue);

console.log(div$$.style);

div$$.style.color = 'red';
div$$.style.fontSize = '24px';
div$$.style.fontFamily = 'Arial';

console.log(div$$.tagName);

console.log(div$$.title);

console.log(div$$.childNodes);


// EXAMPLE
const p3$$ = document.querySelector('.fn-access-here p');
const h4$$ = document.querySelector('.fn-access-here h4');

const div2$$ = document.querySelector('.fn-access-here')
const p4$$ = div2$$.querySelector('p');
const h42$$ = div2$$.querySelector('h4');