const pilots = [
    { id: 2, name: "Wedge Antilles", faction: "Rebels"},
    { id: 8, name: "Ciena Ree", faction: "Empire"},
    { id: 40, name: "Iden Versio", faction: "Empire"},
    { id: 66, name: "Thane Kyrell", faction: "Rebels"}
];


const empirePilots = pilots.filter((pilot) => {
    return pilot.faction === 'Empire';
});

console.log(empirePilots) // [{ id: 8, name: "Ciena Ree", faction: "Empire", { id: 40, name: "Iden Versio", faction: "Empire"}]


// const empireBooleanPilots = pilots.map((pilot) => {
//     return pilot.faction === 'Empire';
// });

// console.log(empireBooleanPilots);