"use strict";

const userNumber = document.querySelector(".js-userNumber");
const button = document.querySelector(".js-button");
const clue = document.querySelector(".js-clue");
const tryCount = document.querySelector(".js-counter");
const randomNumber = getRandomNumber(100);

// form
const requestPanel = document.querySelector(".js-form");

let counterStart = 0;

function counter() {
  tryCount.value = `Número de intentos: ` + (counterStart += 1);
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function numberVerification() {
  const number = parseInt(userNumber.value);
  console.log(`Has seleccionado el número: ${number}`);
  if (number > 100 || number < 1) {
    clue.value = "El número debe estar entre 1 y 100, introduce otro número";
  } else if (number < randomNumber) {
    clue.value = "Pista: Demasiado bajo";
  } else if (number > randomNumber) {
    clue.value = "Pista: Demasiado alto";
  } else if (number === randomNumber) {
    clue.value = "Has ganado campeona!!!";
  }
}

// PreventDefault submit form

function handleForm(ev) {
  ev.preventDefault();
}

function clickButtonHandler() {
  numberVerification();
  counter();
}

requestPanel.addEventListener("submit", handleForm);
button.addEventListener("click", clickButtonHandler);

console.log("El número es: " + randomNumber);
