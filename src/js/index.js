import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

const counter = document.querySelector(".glass__counter--js");
const buttonAdd = document.querySelector(".add--js");
const buttonRemove = document.querySelector(".remove--js");
// const buttonStory = document.querySelector(".story--js");
const key = new Date().toLocaleString().slice(0, 10);
let count = 0;

const localStorageValue = localStorage.getItem(key);

//sprawdzamy czy w local storage jest zapisana wartość
//jeżeli nie jest zapisujemy wartość 0
if (localStorageValue) {
  count = localStorageValue
}
else{
  localStorage.setItem(key, 0)
}

//zmieniamy element html na ilość szklanek zapisanych w local storage
counter.innerHTML = count;

buttonAdd.addEventListener("click", () => {
  count++;
  counter.innerHTML = count;
  localStorage.setItem(key, count);
});

buttonRemove.addEventListener("click", () => {
  if (count > 0) {
    count--;
  }
  counter.innerHTML = count;
  localStorage.setItem(key, count);
});
// buttonStory.addEventListener("click", () => {

// });
