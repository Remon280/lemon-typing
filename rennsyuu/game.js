let isStarted = false;
let time = 30;
let score = 0;
let combo = 0;
let currentWord = "grape";
const words = ["grape", "apple", "lemon", "orange", "banana"];

document.addEventListener("keydown", (e) => {
  if (!isStarted && e.code === "Space") {
    document.getElementById("message").style.display = "none";
    document.getElementById("game").style.display = "block";
    startGame();
  }
});

function startGame() {
  isStarted = true;
  updateWord();
  let timer = setInterval(() => {
    time--;
    document.getElementById("time").textContent = time;
    if (time <= 0) {
      clearInterval(timer);
      document.getElementById("input").disabled = true;
    }
  }, 1000);

  document.getElementById("input").addEventListener("input", () => {
    const input = document.getElementById("input").value;
    if (input === currentWord) {
      score += 10;
      combo++;
      updateWord();
      document.getElementById("input").value = "";
    } else {
      combo = 0;
    }
    updateUI();
  });
}

function updateWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  document.getElementById("word").textContent = currentWord;
}

function updateUI() {
  document.getElementById("score").textContent = score;
  document.getElementById("combo").textContent = combo;
  // 称号の処理はお好みで
}
