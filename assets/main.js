'use strict';

const numberToGuess = getRandomNumber(100);

console.log(numberToGuess);

const inputEl = document.querySelector('.user--guess');
const buttonEl = document.querySelector('.try');
const clueEl = document.querySelector('.clue');
const counterEl = document.querySelector('.counter--display');
let clueContent = clueEl.innerHTML;
let defaultValue = 0;

const possibleFeedback = ["Escribe un número", "El número es mayor que 0", "¡¡¡Enhorabuena, has acertado!!!", "Te has quedado corta, el número es mayor" , "Te has pasado, el número es menor"]

counterEl.innerHTML= defaultValue;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
function counter(){
    defaultValue += 1;
    counterEl.innerHTML = defaultValue;
}

function paintFeedback(a){
    clueEl.innerHTML = possibleFeedback[a]
}

function getFeedback(){
    const inputToInt = parseInt(inputEl.value);
    if (!inputToInt){
        paintFeedback(0) 
    }else if(inputToInt <=0){
        paintFeedback(1);
    }else if(inputToInt === numberToGuess){
        paintFeedback(2);
    }else if(inputToInt < numberToGuess){
        paintFeedback(3);
    }else{
        paintFeedback(4);
    }
}
function clearInput(){
    inputEl.value = '';
}
function handleButtonClick(event){
    event.preventDefault();
    counter();
    getFeedback();
    clearInput();
}

function forceButtonClick(event){
    event.preventDefault();
    if (event.keycode===13){
        buttonEl.click();
    }
};

buttonEl.addEventListener('click', handleButtonClick);
clueEl.addEventListener('focus', forceButtonClick);
