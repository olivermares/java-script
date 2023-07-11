class Moto {
    #color = "Rojo";
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    get color() {
        return "Color de la moto: " + this.#color;
    }
    // getColor() {
    //     return "Color de la moto: " + this.#color;
    // }

    // set color(color){
    //     this.#color = color;
    // }

    set color(color){
        if(color === 'Verde' || color === 'Negro'){
            this.#color = color;
        } else{
            console.error('Solo tenemos Motos Verdes y Negras')
        }
    }
}

const moto1 = new Moto('Kawasaki', 'Ninja');
<<<<<<< HEAD
console.log(moto1.color); // Rojo
moto1.color = "Verde";
console.log(moto1.color); // Verde

// console.log(moto1.getColor());
=======
moto1.color = "Negro"
console.log(moto1.color);
console.log(moto1.marca);
>>>>>>> 2ca48af48e1d3e04bcba58c080f1bd5be28884fe
