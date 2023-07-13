//Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul$$=document.createElement('ul');
document.body.appendChild(ul$$);

/*
apps.forEach(element => {
    createElement(element)
});
*/

/*
for (const app of apps) {
    createElement(app)
}
*/


for (let index = 0; index < apps.length; index++) {
    createElement((apps[index]));   
}


function createElement(app){
    const li$$ =document.createElement('li');
    li$$.textContent = app;
    ul$$.appendChild(li$$);
}