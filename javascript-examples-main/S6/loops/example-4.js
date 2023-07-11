const officers = [  
    { id: 20, name: 'Captain Piett' },  
    { id: 24, name: 'General Veers' },  
    { id: 56, name: 'Admiral Ozzel' },  
    { id: 88, name: 'Commander Jerjerrod' }
  ];

officers.forEach(print);

for (let index = 0; index < officers.length; index++) {
    print(officers[index]);
}

for (const iterator of officers) {
    print(iterator);
}

function print(item) {
    console.log(item)
}