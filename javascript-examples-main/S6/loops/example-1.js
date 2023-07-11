const officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 25, name: 'General Veers' },
    { id: 57, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];

const officersId = officers.map((officer, index) => {
    console.log(officer, index);
    return officer.id;
});

console.log(officersId);

// console.log(officersId); // [20, 24, 46, 88];


// officers.map(officer => {
//     console.log(officer);
// }); // MAL X