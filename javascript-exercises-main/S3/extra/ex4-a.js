//Dado el siguiente array de objetos. Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen. 

const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const ul$$=document.createElement('ul');
document.body.appendChild(ul$$);

countries.forEach(element => {
    const li$$ =document.createElement('li');
    createElement(element, li$$)
    ul$$.appendChild(li$$);
});

function createElement(element, li$$){
    const div$$ =document.createElement('div');
    const h4$$ =document.createElement('h4');
    div$$.appendChild(h4$$);
    const img$$ = document.createElement('img')
    div$$.appendChild(img$$)
    li$$.textContent = element.title;
    div$$.appendChild(li$$);
}

//