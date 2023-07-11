class Vehiculo {
    constructor(nombre, color) {
        this.nombre = nombre
        this.color = color
    }

    arrancar() {
        console.log(`Arrancando el ${this.nombre}`);
    }

    aparcar() {
        console.log(`Aparcando el ${this.nombre}`);
    }

}

class Coche extends Vehiculo {
    constructor(nombre, color = "Blanco", esDescapotable = true) {
        super(nombre, color);
        this.esDescapotable = esDescapotable;
    }
}

class Moto extends Coche {
    constructor(nombre, color, tieneSidecar) {
        super(nombre, color);
        this.tieneSidecar = tieneSidecar;
    }

}

const coche1 = new Coche('Ford Mustang', 'Negro', false);
console.log(coche1.arrancar());
const coche2 = new Coche('Ferrari Mula');

const moto1 = new Moto('Kawasaki Ninja', 'Verde', false);
console.log(moto1.arrancar());