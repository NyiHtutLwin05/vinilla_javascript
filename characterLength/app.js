const textInput = document.querySelector("#text-input");
const charCount = document.querySelector("#char-count");

textInput.addEventListener("input", () => {
  charCount.textContent = `character Count: ${textInput.value.length}`;
});
