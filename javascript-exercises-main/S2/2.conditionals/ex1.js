//Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

alumns.forEach(element => {
    //Algreba de Boole

    let result = 0;
    result = element.T1 ? result + 1 : result;
    result = element.T2 ? result + 1 : result;
    result = element.T3 ? result + 1 : result;

    //Forma normal
    /*
    if(result >= 2)  element.isApproved= true;
    else element.isApproved= false;
    */
   //Foma ternaria
   //Donde se guarda    Condicion     if     else
   element.isApproved = result >=2 ? true : false;

   console.log(element);
});