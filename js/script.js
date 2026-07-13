// ==========================
// Rivals Mission Center Beta 3
// ==========================

const defaultPlayer = {
    username: "",
    gold: 0,
    rcoin: 0,
    exp: 0,
    level: 1,
    battlePass: 1
};

// 第一次登入
if (!localStorage.getItem("player")) {

    let username = prompt("請輸入你的 Roblox 名稱");

    if (!username || username.trim() === "") {
        username = "Guest";
    }

    defaultPlayer.username = username;

    localStorage.setItem(
        "player",
        JSON.stringify(defaultPlayer)
    );

}

// 讀取資料
const player = JSON.parse(localStorage.getItem("player"));

// 玩家資訊
const playerInfo = document.querySelector(".card p");

if (playerInfo) {
    playerInfo.innerHTML = `Roblox：${player.username}`;
}

// Navbar 登入按鈕
const loginBtn = document.querySelector(".login-btn");

if (loginBtn) {

    loginBtn.innerHTML = `
        👤 ${player.username}
    `;

}

// Gold
const goldCard = document.querySelectorAll(".card h1");

if (goldCard.length > 0) {

    goldCard[0].textContent = player.gold;

}

console.log(player);
