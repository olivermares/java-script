/*
Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a
favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para
comprender que hay muchas formas de hacer las cosas en javascript.
*/

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let favorites =[];
let format = [];
let totalVolume =[];
let count =[];


for (const user of users) {
    for (const key in user.favoritesSounds) {
        if (!favorites.includes(key)){
            favorites.push(key);
            format.push(user.favoritesSounds[key].format);
            totalVolume.push(user.favoritesSounds[key].volume);
            count.push(1)
        }
        else{
            let i = favorites.indexOf(key);
            totalVolume[i] += user.favoritesSounds[key].volume
            count[i] += 1;
        }
    }
}
console.log(favorites)
console.log(format)
console.log(totalVolume)
console.log(count)

console.log(`Los sonidos favoritos son:`)
for (let index = 0; index < favorites.length; index++) {
    console.log(`${index + 1}.- ${favorites[index]} con formato ${format[index]} con una media de ${ totalVolume[index]/count[index]}`)    
}