function showAlert() {
    alert('Hey!');
}

setTimeout(showAlert, 3000);


let tiempo = 0;
function imprimirAumentarTiempo() {
    console.log(tiempo++)
}

const interval = setInterval(imprimirAumentarTiempo, 1000);

function cleanInterval() {
    clearInterval(interval);
}

setTimeout(cleanInterval, 5000)

