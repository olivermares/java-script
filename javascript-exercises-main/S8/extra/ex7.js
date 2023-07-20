/*
De nuevo vamos a usar JSON SERVER para simular nuestra api en local. Ejecuta ``json-server --watch exercise-7.json`` y obtendremos de la url `http://localhost:3000` los datos del ejercicio.

En este caso tenemos 2 endpoints, o lo que es lo mismo, dos urls a las que llamar para recibir los datos.

El endpoint `http://localhost:3000/orders` nos devolverá una lista de pedidos de la tienda Mari & Juan y el endpoint `http://localhost:3000/products` que nos devuelve una lista de productos.

La intención es pintar todos los pedidos ordenados por fecha (ultimos pedidos al principio) y en los que pongamos tanto los productos que contiene el pedido como la cantidad pedida de cada uno de los productos.

Si os fijáis, en el endpoint de los pedidos no tenemos la información del producto, si no su id y cantidad pedida. Para obtener el nombre de los productos tendremos que hacer peticiones al endpoint de productos pasando el id del producto, por ejemplo ``http://localhost:3000/products/2``. De esta forma podremos obtener ya toda la información y pintarla en el html.
*/
const ordersPos = 0;
const productsPos = 1;

const getCharacters = async () => {
  const orders = await (await fetch(`http://localhost:3000/orders`)).json();
  const products = await (await fetch(`http://localhost:3000/products`)).json();
  const characters = [orders, products];
  return characters;
};

const orderCharacters = (characters) => {
  return characters.sort((a, b) =>
    new Date(a.date).getTime() < new Date(b.date).getTime() ? -1 : 1
  );
};

const drawCharacters = (characters) => {
    const body$$ = document.body;
    
    body$$.innerHTML = "";
    characters[ordersPos].forEach(order => {
        //console.log(order)
        const div$$ = document.createElement("div");
        div$$.innerHTML = `
              <h3>Pedido realizdo el dia: ${order.date}</h3>
              <h4>Con numero: ${order.id}</5>
              <h5>Articulos:</h5>
          `;
          let section$$ = document.createElement('section')
          order.products.forEach(product => {
            //console.log(product.productId)
            const aux= characters[productsPos].find(characte => characte.id ===product.productId)
            //console.log(aux)
            let article$$ = document.createElement('article')
            article$$.innerHTML = `
                <h5>${aux.name} </h5>
                <p>Cantidad : ${product.quantity}</p>
            `
            section$$.appendChild(article$$);
          });
          div$$.appendChild(section$$)
          body$$.appendChild(div$$)
    });

};

const init = async () => {
  const characters = await getCharacters();
  //console.log(characters[ordersPos]);
  //console.log(characters[productsPos]);
  characters[ordersPos] = orderCharacters(characters[ordersPos]);
  //console.log(characters[ordersPos]);
  drawCharacters(characters);
};

init();
