'use strict';
console.log('Ready');

//genero un número random y lo guardo en una constante.(lo imprimo en console)
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

const numberToGuess = getRandomNumber(100);
console.log(numberToGuess);

//función contador
const counterEl = document.querySelector('.counter--output');

let defaultValue = 0;
counterEl.innerHTML = defaultValue;


//Función que compara el input de la usuaria con el número aleatorio.
const inputEl = document.querySelector('.user--guess');
const buttonEl = document.querySelector('.try');
const clueEl = document.querySelector('.clue');


function handleClickButton(event){
    event.preventDefault();
    defaultValue += 1;
    counterEl.innerHTML = defaultValue;
    const inputToInt= parseInt(inputEl.value)

    if(inputToInt === numberToGuess){
        clueEl.innerHTML = "!!!Enhorabuena, has acertado!!!"
    }else if(inputToInt < numberToGuess){
        clueEl.innerHTML = "Te has quedado corta, el número es mayor"
    }else{
        clueEl.innerHTML = "Te has pasado, el número es menor"
    }
}
buttonEl.addEventListener('click', handleClickButton);
//por cada vez que el usuario pulse el botón, el contador de intentos sube 1. Puedo anidar esta fundión para que solo sea un listener y un handler?