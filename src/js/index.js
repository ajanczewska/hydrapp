import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

const counter = document.querySelector(".water__counter--js");
const buttonAdd = document.querySelector(".add-js");
const buttonRemove = document.querySelector(".remove--js");
// const buttonStory = document.querySelector(".story--js");
const key = new Date().toISOString().slice(0, 10);
let count = 0;

buttonAdd.addEventListener("click", () => {
  if (!key) {
    count = 0;

    counter.innerHTML = count;
  } else {
    count += 1;
    counter.innerHTML = count;
  }
  localStorage.setItem(key, count);
});
buttonRemove.addEventListener("click", () => {
  if (count > 0) {
    count -= 1;
    counter.innerHTML = count;
  }
  localStorage.setItem(key, count);
});
// buttonStory.addEventListener("click", () => {
    
// });
