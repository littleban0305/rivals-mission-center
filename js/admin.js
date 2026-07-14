// ==========================
// Rivals Mission Center
// Admin Panel
// ==========================

const params =
    new URLSearchParams(location.search);

const selectedPlayer =
    params.get("player") ||
    currentPlayer;

const playerSelect =
    document.getElementById("playerSelect");

const adminPlayer =
    players[selectedPlayer];

if (!adminPlayer) {

    alert("找不到玩家資料！");

    window.location.href = "login.html";

}

// ==========================
// 建立玩家下拉選單
// ==========================

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
    adminPlayer.username || "";

document.getElementById("adminRoblox").value =
    adminPlayer.roblox || "";

document.getElementById("adminDiscord").value =
    adminPlayer.discord || "";

document.getElementById("adminGold").value =
    adminPlayer.gold || 0;

document.getElementById("adminRcoin").value =
    adminPlayer.rcoin || 0;

document.getElementById("adminExp").value =
    adminPlayer.exp || 0;

document.getElementById("adminBP").value =
    adminPlayer.battlePass || 1;

document.getElementById("adminLevel").value =
    adminPlayer.level || 1;

document.getElementById("adminSkinCase").value =
    adminPlayer.skinCase || 0;

document.getElementById("adminScythe").value =
    adminPlayer.coconutScythe || 0;

// ==========================
// 儲存
// ==========================

const saveBtn =
    document.getElementById("saveAdmin");

if (saveBtn) {

    saveBtn.addEventListener("click", () => {

        adminPlayer.roblox =
            document.getElementById("adminRoblox").value;

        adminPlayer.discord =
            document.getElementById("adminDiscord").value;

        adminPlayer.gold =
            Number(document.getElementById("adminGold").value);

        adminPlayer.rcoin =
            Number(document.getElementById("adminRcoin").value);

        adminPlayer.exp =
            Number(document.getElementById("adminExp").value);

        adminPlayer.battlePass =
            Number(document.getElementById("adminBP").value);

        adminPlayer.level =
            Number(document.getElementById("adminLevel").value);

        adminPlayer.skinCase =
            Number(document.getElementById("adminSkinCase").value);

        adminPlayer.coconutScythe =
            Number(document.getElementById("adminScythe").value);

        players[selectedPlayer] =
            adminPlayer;

        localStorage.setItem(
            "players",
            JSON.stringify(players)
        );

        alert("✅ 玩家資料已儲存！");

    });

}

// ==========================
// 任務審核
// ==========================

const missionSelect =
    document.getElementById("missionSelect");

if (missionSelect && adminPlayer.missions) {

    for (const id in adminPlayer.missions) {

        if (adminPlayer.missions[id] === "pending") {

            const option =
                document.createElement("option");

            option.value = id;

            option.textContent =
                `${id}（審核中）`;

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

        // 完成任務

        adminPlayer.missions[missionId] =
            "completed";

        // 發放 Gold

        const gold =
            parseInt(mission.reward) || 0;

        adminPlayer.gold += gold;

        // 發放 EXP

        const expMatch =
            mission.reward.match(/(\d+)\s*EXP/);

        if (expMatch) {

            adminPlayer.exp +=
                Number(expMatch[1]);

        }

        // 存回資料

        players[selectedPlayer] =
            adminPlayer;

        localStorage.setItem(
            "players",
            JSON.stringify(players)
        );

        alert("✅ 任務已核准！");

        location.reload();

    });

}
