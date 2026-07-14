// ==========================
// Rivals Mission Center
// Admin Panel
// ==========================

// ==========================
// 讀取玩家資料
// ==========================

const players =
    JSON.parse(localStorage.getItem("players")) || {};

const currentPlayer =
    localStorage.getItem("currentPlayer");

let player =
    players[currentPlayer];

if (!player) {

    alert("找不到玩家資料！");

    window.location.href = "login.html";

}

// ==========================
// 載入資料
// ==========================

document.getElementById("adminUsername").value =
    player.username || "";

document.getElementById("adminRoblox").value =
    player.roblox || "";

document.getElementById("adminDiscord").value =
    player.discord || "";

document.getElementById("adminGold").value =
    player.gold || 0;

document.getElementById("adminRcoin").value =
    player.rcoin || 0;

document.getElementById("adminExp").value =
    player.exp || 0;

document.getElementById("adminBP").value =
    player.battlePass || 1;

document.getElementById("adminLevel").value =
    player.level || 1;

document.getElementById("adminSkinCase").value =
    player.skinCase || 0;

document.getElementById("adminScythe").value =
    player.coconutScythe || 0;

// ==========================
// 儲存
// ==========================

const saveBtn = document.getElementById("saveAdmin");

saveBtn.addEventListener("click", () => {

    player.roblox =
        document.getElementById("adminRoblox").value;

    player.discord =
        document.getElementById("adminDiscord").value;

    player.gold =
        Number(document.getElementById("adminGold").value);

    player.rcoin =
        Number(document.getElementById("adminRcoin").value);

    player.exp =
        Number(document.getElementById("adminExp").value);

    player.battlePass =
        Number(document.getElementById("adminBP").value);

    player.level =
        Number(document.getElementById("adminLevel").value);

    player.skinCase =
        Number(document.getElementById("adminSkinCase").value);

    player.coconutScythe =
        Number(document.getElementById("adminScythe").value);

players[currentPlayer] = player;

localStorage.setItem(
    "players",
    JSON.stringify(players)
);

    alert("✅ 玩家資料已儲存！");

});
