'use strict';
console.log('Ready');

//genero un número random y lo guardo en una constante.(lo imprimo en console)
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

const numberToGuess = getRandomNumber(100);
console.log(numberToGuess);
//hago una función que me lea el input del usuario (lo tiene que convertir a integer) y lo compare con el número que he generado previamente
    //son 3 casos que desencadenan 3 mensajes en el párrafo azul
        //el número es mayor que el input
        //el número es menor que input
        //el número es igual que input
const inputEl = document.querySelector('.user--guess');
const buttonEl = document.querySelector('.try');


function handleClickButton(event){
    event.preventDefault();
    const inputToInt= parseInt(inputEl.value)
    console.log(inputToInt);
}
buttonEl.addEventListener('click', handleClickButton);
//por cada vez que el usuario pulse el botón, el contador de intentos sube 1. Puedo anidar esta fundión para que solo sea un listener y un handler?