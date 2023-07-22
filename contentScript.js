let isDarkMode = false;

function playBeepSound() {
  const audio = new Audio("beep.mp3");
  audio.play();
}

function toggleMode() {
  isDarkMode = !isDarkMode;
  document.documentElement.classList.toggle("dark-mode", isDarkMode);
}

document.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    playBeepSound();
  }
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "toggleMode") {
    toggleMode();
  }
});
