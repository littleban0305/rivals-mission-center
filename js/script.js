// ==========================
// Rivals Mission Center
// Main Script Beta 3
// ==========================

// 取得玩家資料
const player = JSON.parse(localStorage.getItem("player"));

// 沒登入就跳到登入頁
if (!player) {

    window.location.href = "login.html";

}

// ==========================
// Navbar
// ==========================

const loginBtn = document.querySelector(".login-btn");

if (loginBtn) {

    loginBtn.innerHTML = `
        <i class="bi bi-person-circle"></i>
        ${player.username}
    `;

}

// ==========================
// 玩家資訊
// ==========================

// 玩家名稱
const playerName = document.querySelector(".card p");

if (playerName) {

    playerName.textContent = `Roblox：${player.username}`;

}

// 等級
const playerLevel = document.querySelectorAll(".card p")[1];

if (playerLevel) {

    playerLevel.textContent = `等級：Lv.${player.level}`;

}

// EXP
const playerExp = document.querySelectorAll(".card p")[2];

if (playerExp) {

    playerExp.textContent = `EXP：${player.exp} / 100`;

}

// ==========================
// Gold
// ==========================

const goldText = document.querySelector(".dashboard .card:nth-child(2) h1");

if (goldText) {

    goldText.textContent = player.gold;

}

// ==========================
// Battle Pass
// ==========================

const bpText = document.querySelector(".dashboard .card:nth-child(3) p");

if (bpText) {

    bpText.textContent = `Lv.${player.battlePass}`;

}

const progressBar = document.querySelector(".progress-bar");

if (progressBar) {

    progressBar.style.width = `${player.exp}%`;

}

// ==========================
// 開始挑戰
// ==========================

const startBtn = document.getElementById("startBtn");

if (startBtn) {

    startBtn.addEventListener("click", () => {

        window.location.href = "missions.html";

    });

}

console.log(player);
