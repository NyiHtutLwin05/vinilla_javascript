const counterElement = document.querySelector("#counter");
const incrementBtn = document.querySelector("#increment-btn");
const decrementBtn = document.querySelector("#decrement-btn");
let counter = 0;

const updateElement = () => {
  counterElement.textContent = counter;
};

incrementBtn.addEventListener("click", () => {
  counter++;
  updateElement();
});
decrementBtn.addEventListener("click", () => {
  counter--;
  updateElement();
});
