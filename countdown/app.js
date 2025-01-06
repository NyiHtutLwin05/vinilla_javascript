const timerInput = document.querySelector("#timer-input");
const startTimeButton = document.querySelector("#start-timer");
const timerDisplay = document.querySelector("#timer-display");

let timer;

startTimeButton.addEventListener("click", () => {
  clearInterval(timer);

  let time = parseInt(timerInput.value);
  if (isNaN(time) || time <= 0) {
    alert("Please enter a valid number greater than 0");
    return;
  }
  timerDisplay.innerHTML = `Time: ${time}`;

  timer = setInterval(() => {
    time--;
    timerDisplay.textContent = `Time: ${time}`;
    if (time <= 0) {
      clearInterval(timer);
      alert("Time up!!");
    }
  }, 1000);
});
