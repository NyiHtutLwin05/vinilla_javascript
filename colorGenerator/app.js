const colorBtn = document.querySelector("#color-btn");
const colorCode = document.querySelector("#color-code");

colorBtn.addEventListener("click", () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
  colorCode.textContent = `Current Color:${randomColor}`;
});
