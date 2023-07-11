const pilots = [
    { id: 10, name: "Poe Dameron", years: 14, },
    { id: 2, name: "Temmin 'Snap' Wexley", years: 30, },
    { id: 41, name: "Tallissan Lintra", years: 16, },
    { id: 99, name: "Ello Asty", years: 22, }
];

const totalYears = pilots.reduce((accumulator, pilot) => {
    console.log(accumulator);
    return accumulator + pilot.years;
}, 0);

// const totalYears = pilots.reduce((accumulator, pilot) => accumulator + pilot.years, 0);

console.log(totalYears);
