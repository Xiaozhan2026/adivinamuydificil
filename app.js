//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';

//let numerosecreto = Generarnumerosecreto();
//let intentos = 1;

let numerosecreto = 0;
let intentos = 0;
let listanumerossorteados = [];
let numeromaximo = 10;

console.log(numerosecreto);

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarintento() {
    let numerodeusuario = parseInt(document.getElementById('valorusuario').value);

    //console.log(intentos);
  
    //console.log(typeof(numerodeusuario)); 
    //console.log(numerosecreto);   
    //console.log(typeof(numerosecreto));
    //console.log(numerodeusuario);
    //console.log(numerodeusuario === numerosecreto);

    //console.log(numerosecreto);

    if (numerodeusuario === numerosecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        //el usuario no acerto
        if (numerodeusuario > numerosecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarcaja();
    }
    return;
}

//function limpiarcaja() {
    //let valorcaja = document.querySelector('#valorusuario');
    //valorcaja.value = '';
//}

//lo mismo pero mas simplificado:

function limpiarcaja() {
    document.querySelector('#valorusuario').value = '';
}


function Generarnumerosecreto () {
    let numerogenerado = Math.floor(Math.random()*numeromaximo)+1;

    console.log(numerogenerado);
    console.log(listanumerossorteados);
    //si ya sorteamos todos los numeros posibles
    if (listanumerossorteados.length == numeromaximo) {
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');
    } else {

        //si el numero generado esta incluido en la lista
        if (listanumerossorteados.includes(numerogenerado)){
           return Generarnumerosecreto();
        } else {
           listanumerossorteados.push(numerogenerado);
           return numerogenerado;
        }
    }
}

function condicionesiniciales() {
    asignarTextoElemento('h1', 'Medicion de homosexualidad de Anthony');
    asignarTextoElemento('p', `del 1 al ${numeromaximo} que tan gay es Anthony`);
    numerosecreto = Generarnumerosecreto();
    intentos = 1;
}

function reiniciarjuego() {
    //limpiar caja
    limpiarcaja();

    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesiniciales();

    //deshsbilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesiniciales();