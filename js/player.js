// ==========================
// Rivals Mission Center
// Player Center
// ==========================

// 讀取玩家資料
const player = JSON.parse(localStorage.getItem("player"));

// 沒登入就跳回登入頁
if (!player) {

    window.location.href = "login.html";

}

// ==========================
// 基本資料
// ==========================

document.getElementById("playerName").textContent = player.username;

document.getElementById("gold").textContent = player.gold;

document.getElementById("rcoin").textContent = player.rcoin;

document.getElementById("playerLevel").textContent =
`Lv.${player.level}`;

document.getElementById("joinDate").textContent =
`加入日期：${player.joinDate}`;

document.getElementById("settingUsername").textContent =
player.roblox || "未設定";

document.getElementById("settingJoinDate").textContent =
player.joinDate;

// ==========================
// Battle Pass
// ==========================

document.getElementById("battlePassLevel").textContent =
`Lv.${player.battlePass}`;

document.getElementById("currentBP").textContent =
`Lv.${player.battlePass}`;

document.getElementById("battlePassExp").textContent =
`${player.exp} / 100 EXP`;

document.getElementById("nextLevelExp").textContent =
`${100-player.exp} EXP`;

document.getElementById("battlePassProgress").style.width =
`${player.exp}%`;

document.getElementById("expProgress").style.width =
`${player.exp}%`;

// ==========================
// 玩家稱號
// ==========================

let rank = "Rookie";

if(player.level >= 10){

    rank = "Elite";

}

if(player.level >= 30){

    rank = "Master";

}

if(player.level >= 60){

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

if(player.skinCase === undefined){

    player.skinCase = 0;

}

if(player.coconutScythe === undefined){

    player.coconutScythe = 0;

}

document.getElementById("inventorySkinCase").textContent =
player.skinCase;

document.getElementById("inventoryScythe").textContent =
player.coconutScythe;

// ==========================
// 登出
// ==========================

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click",()=>{

    if(confirm("確定要登出嗎？")){

        localStorage.removeItem("player");

        window.location.href="login.html";

    }

});

// ==========================
// 更新玩家資料
// ==========================

localStorage.setItem(
    "player",
    JSON.stringify(player)
);
