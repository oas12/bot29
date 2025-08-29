let points = 0;
const earnBtn = document.getElementById("earnBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const pointsDisplay = document.getElementById("points");

// Ambil user dari Telegram
let tg = window.Telegram.WebApp;
document.getElementById("username").innerText = `Hi, ${tg.initDataUnsafe.user?.first_name || "User"}!`;

earnBtn.addEventListener("click", () => {
  let add = Math.floor(Math.random() * 10) + 1; // random 1–10 poin
  points += add;
  pointsDisplay.textContent = points;
  alert(`Kamu dapat ${add} poin!`);
});

withdrawBtn.addEventListener("click", () => {
  if (points < 50) {
    alert("Minimal 50 poin untuk withdraw!");
  } else {
    alert("✅ Withdraw diproses! (simulasi)");
    points = 0;
    pointsDisplay.textContent = points;
  }
});
