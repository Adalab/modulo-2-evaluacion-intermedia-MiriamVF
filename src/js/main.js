"use strict";

const userNumber = document.querySelector(".js-userNumber");
const button = document.querySelector(".js-button");
const clue = document.querySelector(".js-clue");
const tryCount = document.querySelector(".js-counter");
const randomNumber = getRandomNumber(100);

let counterStart = 0;

function counter() {
  tryCount.value = `Número de intentos: ` + (counterStart += 1);
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function numberVerification() {
  const number = parseInt(userNumber.value);
  if (number > 100 || number < 1) {
    clue.value = "El número debe estar entre 1 y 100";
    console.log(`Has seleccionado el número: ${number}`);
  } else if (number < randomNumber) {
    clue.value = "Demasiado bajo";
    console.log(`Has seleccionado el número: ${number}`);
  } else if (number > randomNumber) {
    clue.value = "Demasiado alto";
    console.log(`Has seleccionado el número: ${number}`);
  } else if (number === randomNumber) {
    clue.value = "Has ganado campeona!!!";
    console.log(`Has seleccionado el número: ${number}`);
  }
}

function clickButtonHandler() {
  numberVerification();
  counter();
}

button.addEventListener("click", clickButtonHandler);

console.log("El número es: " + randomNumber);
