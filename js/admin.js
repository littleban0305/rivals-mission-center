// ==========================
// Rivals Mission Center
// Admin Panel
// ==========================

// ==========================
// 玩家資料
// ==========================

const params = new URLSearchParams(location.search);

const selectedPlayer =
    params.get("player") ||
    localStorage.getItem("currentPlayer");

const playerSelect =
    document.getElementById("playerSelect");

let player =
    players[selectedPlayer];

if (!player) {

    alert("找不到玩家資料！");

    window.location.href = "login.html";

}

// 建立玩家下拉選單

if (playerSelect) {

    for (const username in players) {

        const option =
            document.createElement("option");

        option.value = username;

        option.textContent = username;

        if (username === selectedPlayer) {

            option.selected = true;

        }

        playerSelect.appendChild(option);

    }

    playerSelect.addEventListener("change", () => {

        location.href =
            `admin.html?player=${playerSelect.value}`;

    });

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

players[selectedPlayer] = player;

localStorage.setItem(
    "players",
    JSON.stringify(players)
);

    alert("✅ 玩家資料已儲存！");

});

// ==========================
// 任務審核
// ==========================

const missionSelect =
    document.getElementById("missionSelect");

if (missionSelect && player.missions) {

    for (const id in player.missions) {

        if (player.missions[id] === "pending") {

            const option =
                document.createElement("option");

            option.value = id;

            option.textContent = `${id}（審核中）`;

            missionSelect.appendChild(option);

        }

    }

}

const approveBtn =
    document.getElementById("approveMission");

if (approveBtn) {

    approveBtn.addEventListener("click", () => {

        const missionId =
            missionSelect.value;

        if (!missionId) {

            alert("請先選擇任務！");
            return;

        }

        const mission =
            missions[missionId];

        if (!mission) {

            alert("找不到任務！");
            return;

        }

        // 標記完成
        player.missions[missionId] =
            "completed";

        // 發放 Gold
        const gold =
            parseInt(mission.reward) || 0;

        player.gold += gold;

        // EXP
        const expMatch =
            mission.reward.match(/(\d+)\s*EXP/);

        if (expMatch) {

            player.exp +=
                Number(expMatch[1]);

        }

        // 存回玩家資料
        players[selectedPlayer] = player;

        localStorage.setItem(
            "players",
            JSON.stringify(players)
        );

        alert("✅ 任務已核准！");

        location.reload();

    });

}
