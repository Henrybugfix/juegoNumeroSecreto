let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

        // Validación: si es NaN o está fuera del rango, detenemos la función
    if (Number.isNaN(numeroDeUsuario) || numeroDeUsuario < 1 || numeroDeUsuario > 10) {
        asignarTextoElemento('p', 'Por favor, ingresa un número entre 1 y 10.');
        limpiarcaja();
        return; // <-- Aquí termina si es inválido
    }
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'
        }`);
        limpiarcaja();
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acertó.
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','el número secreto es menor');
        } else{asignarTextoElemento('p','el número secreto es mayor');
        }
        intentos++;
        limpiarcaja();
    }
    return;
}

function limpiarcaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los números mostarr mensaje en pantalla
    if(listaNumerosSorteados.length== numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
    // si el número generado está incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }

}

function condicionesIniciales(){
asignarTextoElemento('h1','Juego del número secreto');
asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
intentos=1;
numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego(){
    // limpiar la caja 
    limpiarcaja();
    // indicar mensaje de inicio
    // generar número aleatorio
    // reiniciar contador
    condicionesIniciales();
    // deshabilitar botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled" , "true");
}

condicionesIniciales();
