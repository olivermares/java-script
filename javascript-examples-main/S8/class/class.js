class Book {
    type = "Papel";
    constructor(name, author) {
        this.name = name;
        this.author = author;
    }

    getFullName() {
        return `${this.name}, ${this.author} ${this.type}`
    }

    setType(newType) { 
        this.type = newType; 
    }
}

const firstBook = new Book("Game of thrones", "George");
const secondBook = new Book("Las cronicas de Abel", "Abel Luengo");

console.log(firstBook.name); // Game of thrones
console.log(secondBook.name); // Las cronicas de Abel

console.log(firstBook.getFullName()); // Game of thrones, George
firstBook.setType("Digital");
console.log(firstBook.type); // Digital