// ==========================
// Rivals Mission Center
// Player Center
// ==========================

// ==========================
// 讀取玩家資料
// ==========================

const playerData = player;

if (!playerData || !isLogin || isLogin !== "true") {

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
"創始玩家";

document.getElementById("settingUsername").textContent =
playerData.roblox || "未設定";

document.getElementById("settingJoinDate").textContent =
"創始玩家";

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

const completedMissions =
    Object.entries(player.missions || {})
        .filter(([id, status]) =>
            status === "completed"
        );

const dailyCount =
    completedMissions.filter(
        ([id]) => id.startsWith("D")
    ).length;

const weeklyCount =
    completedMissions.filter(
        ([id]) => id.startsWith("W")
    ).length;

const permanentCount =
    completedMissions.filter(
        ([id]) =>
            id.startsWith("P") ||
            id.startsWith("L") ||
            id.startsWith("C")
    ).length;

document.getElementById(
    "dailyMissionCount"
).textContent =
    dailyCount;

document.getElementById(
    "weeklyMissionCount"
).textContent =
    weeklyCount;

document.getElementById(
    "permanentMissionCount"
).textContent =
    permanentCount;

document.getElementById(
    "totalMissionCount"
).textContent =
    completedMissions.length;

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

        localStorage.setItem("isLogin", "false");
        window.location.href = "login.html";
    });

});
