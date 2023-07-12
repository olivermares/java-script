//Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

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

 const volumeInfo = { totalVolume: 0, totalCount: 0 };

 for (const user of users) {
    for (const key in user.favoritesSounds) {
        volumeInfo.totalVolume += user.favoritesSounds[key].volume;
        volumeInfo.totalCount++;
    }
}


console.log('El volumen medio de los sonidos favoritos es de: ' + volumeInfo.totalVolume / volumeInfo.totalCount)