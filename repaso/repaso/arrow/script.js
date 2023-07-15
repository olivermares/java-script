function sumar(a,b){
    console.log(a+b);
}
sumar(2,3)

const sumar = (a, b) => {
  let resultado = a + b;
  return resultado;
};

// sumar(2,3)
// console.log(sumar(2,3));
const resultadofinal = sumar(2, 3);
// console.log(resultadofinal);

const alimentos = ["🍔", "🍔", "🍔", "🍟", "🥞"];

const patatas = alimentos.filter((alimento) => alimento === "🍟");
// console.log(patatas);

const officers = [
  { id: 20, name: "Captain Piett", hair: "brow" },
  { id: 24, name: "General Veers", hair: "brow" },
  { id: 56, name: "Admiral Ozzel", hair: "brow" },
  { id: 88, name: "Commander Jerjerrod", hair: "brow" },
];
const oficialessinpelo = officers.map((officer)=>({
    nombre: officer.name,
    id: officer.id
   }
    ))


console.log(oficialessinpelo);
// const prueba = officers.map((officer)=>{
//     if (officer.id>30) {
//         console.log("oficiales mayores de 30",officer);
//         return officer.name
//     }
//     // else{
//     //     console.log("estos no pasan");
//     // }
// } )
// console.log(prueba);
