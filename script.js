const launchButton = document.getElementById("launchDuck");
const duckContainer = document.getElementById("duckContainer");
const quackSound = document.getElementById("quackSound");
const countDisplay = document.getElementById("duckCount");
const toggleThemeBtn = document.getElementById("toggleTheme");

let duckCount = Number(localStorage.getItem("duckCount")) || 0;
countDisplay.textContent = duckCount;

launchButton.addEventListener("click", () => {
  const duck = document.createElement("img");
  duck.src = "https://upload.wikimedia.org/wikipedia/commons/3/3b/Rubber_duck_debugging.svg";
  duck.className = "duck";
  duck.style.top = Math.random() * 200 + "px";
  duckContainer.appendChild(duck);

  // Play quack
  quackSound.currentTime = 0;
  quackSound.play();

  // Update count
  duckCount++;
  countDisplay.textContent = duckCount;
  localStorage.setItem("duckCount", duckCount);

  // Clean up
  setTimeout(() => {
    duck.remove();
  }, 5000);
});

// Theme toggle
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
