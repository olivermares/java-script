const dragonBall = {
    name: 'Son',
    lastname: 'Goku',
    fullname: function () {
        console.log('Dentro', this);
        return this.name + ' ' + this.lastname;
    }
}

// console.log(dragonBall.name);
// console.log(dragonBall.fullname())
// console.log('Fuera', this);

// // ARROW FUNCTIONS

const dragonBall = {
  name: "Son",
  lastname: "Goku",
  fullname: () => {
    console.log("Dentro", this);
    return this.name + " " + this.lastname;
  }
};

console.log(dragonBall.name);
console.log(dragonBall.fullname());
console.log("Fuera", this);
