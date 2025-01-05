const sizeButtons = document.querySelectorAll("#size-buttons button");
const crustButtons = document.querySelectorAll("#crust-buttons button");
const toppingCheckboxes = document.querySelectorAll(".topping-checkbox");
const totalPriceElement = document.querySelector("#total-price");
const taxAmountElement = document.querySelector("#tax-amount");
const finalAmountElement = document.querySelector("#final-amount");

let basePrice = 0;
let crustPrice = 0;
let toppingCount = 0;

const updatePrice = () => {
  const toppingPrice = toppingCount * 1;
  const subtotal = basePrice + crustPrice + toppingPrice;
  const tax = subtotal * 0.1;
  const finalAmount = subtotal + tax;
  totalPriceElement.textContent = `$${subtotal.toFixed(2)}`;
  taxAmountElement.textContent = `$${tax.toFixed(2)}`;
  finalAmountElement.textContent = `$${finalAmount.toFixed(2)}`;
};

sizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sizeButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");

    const size = button.getAttribute("data-size");
    basePrice = size === "Small" ? 8 : size === "Medium" ? 12 : 15;
    updatePrice();
  });
});
crustButtons.forEach((button) => {
  button.addEventListener("click", () => {
    crustButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");

    const crust = button.getAttribute("data-crust");
    crustPrice = crust === "Thin" ? 2 : crust === "Thick" ? 3 : 4;
    updatePrice();
  });
});
toppingCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    toppingCount = Array.from(toppingCheckboxes).filter(
      (cb) => cb.checked
    ).length;
    updatePrice();
  });
});
