function g(b = 10, c = 5) {
    console.log(b + c)
}

const a = (b = 2, c = 4) => {
    console.log(b + c)
}

a(4, 4);
a();
a(20);
g();
g(4, 10)