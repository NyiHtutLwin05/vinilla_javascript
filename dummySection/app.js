// const colorItems = document.querySelectorAll("#fruits li");
// const checkboxes = document.querySelectorAll(".lang-checkbox");
// const countDisplay = document.querySelector("#selected-count");
// const colorArrays = Array.from(colorItems);

// colorArrays.forEach((color) => {
//   color.addEventListener("click", () => {
//     colorArrays.forEach((e) => (e.style.backgroundColor = ""));
//     color.style.backgroundColor = "yellow";
//     console.log(`${color.textContent} is selected`);
//   });
// });
// const checkCount = Array.from(checkboxes);
// checkboxes.forEach((checkbox) => {
//   checkbox.addEventListener("change", () => {
//     const checkedCount = checkCount.filter((cb) => cb.checked).length;

//     countDisplay.textContent = checkedCount;
//   });
// });
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => {
//   console.log(num * 2);
// });
// colorArrays.forEach((color) => {
//   color.textContent = color.textContent.toUpperCase();
// });

// const buttonContainer = document.querySelector("#button-container");

// for (let i = 0; i < 5; i++) {
//   const button = document.createElement("button");
//   button.textContent = `Button ${i}`;
//   buttonContainer.appendChild(button);
// }

// const buttons = document.querySelectorAll("#button-container button");

// const buttonArray = Array.from(buttons);

// buttonArray.forEach((button) => {
//   button.addEventListener("click", () => {
//     console.log(`${button.textContent} clicked!`);
//   });
// });

// const numbersTwo = [10, 20, 30, 40, 50];

// const filteredNumbers = numbersTwo.filter((num) => num > 20);
// console.log(filteredNumbers);

// const nodeList = document.querySelectorAll("#fruits li");
// const nodeListArray = Array.from(nodeList);

// const fruitsStartingWithB = nodeListArray.filter((fruits) => {
//   fruits.textContent.startsWith("B");
// });

// console.log(fruitsStartingWithB.map((fru) => fru.textContent));

const buttonContainer = document.querySelectorAll("#button-container button");

buttonContainer.forEach((button) => {
  button.addEventListener("click", () => {
    buttonContainer.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    console.log(`${button.textContent} is now Active`);
  });
});
