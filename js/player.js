// ==========================
// Rivals Mission Center
// Player Center
// ==========================

// 讀取玩家資料
const playerData = JSON.parse(localStorage.getItem("player"));

// 沒登入就跳回登入頁
if (!playerData) {

    window.location.href = "login.html";

}

// ==========================
// 基本資料
// ==========================

document.getElementById("playerName").textContent = playerData.username;

document.getElementById("playerRoblox").textContent =
playerData.roblox || "未設定";

document.getElementById("playerDiscord").textContent =
playerData.discord || "未設定";

document.getElementById("gold").textContent = playerData.gold;

document.getElementById("rcoin").textContent = playerData.rcoin;

document.getElementById("playerLevel").textContent =
`Lv.${playerData.level}`;

document.getElementById("joinDate").textContent =
`加入日期：${playerData.joinDate}`;

document.getElementById("settingUsername").textContent =
playerData.roblox || "未設定";

document.getElementById("settingJoinDate").textContent =
playerData.joinDate;

// ==========================
// Battle Pass
// ==========================

document.getElementById("battlePassLevel").textContent =
`Lv.${playerData.battlePass}`;

document.getElementById("currentBP").textContent =
`Lv.${playerData.battlePass}`;

document.getElementById("battlePassExp").textContent =
`${playerData.exp} / 100 EXP`;

document.getElementById("nextLevelExp").textContent =
`${100-playerData.exp} EXP`;

document.getElementById("battlePassProgress").style.width =
`${playerData.exp}%`;

document.getElementById("expProgress").style.width =
`${playerData.exp}%`;

// ==========================
// 玩家稱號
// ==========================

let rank = "Rookie";

if(playerData.level >= 10){

    rank = "Elite";

}

if(playerData.level >= 30){

    rank = "Master";

}

if(playerData.level >= 60){

    rank = "Legend";

}

document.getElementById("playerRank").textContent = rank;

document.getElementById("playerTitle").textContent = rank;

// ==========================
// 任務統計
// ==========================

// 之後會串 Google Sheets
document.getElementById("dailyMissionCount").textContent = 0;

document.getElementById("weeklyMissionCount").textContent = 0;

document.getElementById("permanentMissionCount").textContent = 0;

document.getElementById("totalMissionCount").textContent = 0;

// ==========================
// 背包
// ==========================

// 之後商店會更新這些數值

if(playerData.skinCase === undefined){

    playerData.skinCase = 0;

}

if(playerData.coconutScythe === undefined){

    playerData.coconutScythe = 0;

}

document.getElementById("inventorySkinCase").textContent =
playerData.skinCase;

document.getElementById("inventoryScythe").textContent =
playerData.coconutScythe;

// ==========================
// 登出
// ==========================

const logoutBtns = document.querySelectorAll("#logoutBtn, #logoutBtnPage");

logoutBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        if (confirm("確定要登出嗎？")) {

            localStorage.setItem("isLogin", "false");
            window.location.href = "login.html";

        }

    });

});

// ==========================
// 更新玩家資料
// ==========================

localStorage.setItem(
    "player",
    JSON.stringify(playerData)
);
