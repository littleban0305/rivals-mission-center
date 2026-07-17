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
// Battle Pass 升級檢查
// ==========================

let needExp =
    player.battlePass * 100;

let leveledUp = false;

while (player.exp >= needExp) {

    player.exp -= needExp;

    player.battlePass++;

    needExp =
        player.battlePass * 100;

    leveledUp = true;

}

if (leveledUp) {

    localStorage.setItem(
        "playerData",
        JSON.stringify(player)
    );

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

const bpNeedExp =
    playerData.battlePass * 100;

document.getElementById("battlePassLevel").textContent =
    `Lv.${playerData.battlePass}`;

document.getElementById("currentBP").textContent =
    `Lv.${playerData.battlePass}`;

document.getElementById("battlePassExp").textContent =
    `${playerData.exp} / ${bpNeedExp} EXP`;

document.getElementById("nextLevelExp").textContent =
    `${bpNeedExp - playerData.exp} EXP`;

const progress =
    Math.min(
        (playerData.exp / bpNeedExp) * 100,
        100
    );

document.getElementById(
    "battlePassProgress"
).style.width =
    `${progress}%`;

document.getElementById(
    "expProgress"
).style.width =
    `${progress}%`;

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

// ==========================
// 購買紀錄
// ==========================

const purchaseHistory =
    document.getElementById(
        "purchaseHistory"
    );

if (
    purchaseHistory &&
    playerData.shopOrders
) {

    playerData.shopOrders
        .slice()
        .reverse()
        .forEach(order => {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "mission";

            const statusText =
                order.status ===
                "completed"
                ? "✅ 已發送"
                : "🟡 待發送";

            card.innerHTML = `

                <div>

                    <h3>
                        ${order.name}
                    </h3>

                    <p>
                        ${statusText}
                    </p>

                    <small>
                        ${order.time}
                    </small>

                </div>

            `;

            purchaseHistory.appendChild(
                card
            );

        });

}
