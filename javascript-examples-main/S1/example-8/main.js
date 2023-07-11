var avengers = ["Hulk", "Thor", "Iron-Man", "ViudaNegra"];

avengers.push("SpiderMan", "AntMan")

console.log('Push', [...avengers]);

avengers.pop();

console.log('Pop', [...avengers]);

avengers.splice(0,1);
avengers.splice(1,1);

console.log('Splice', [...avengers])

avengers.sort();

console.log('Sort', [...avengers])
