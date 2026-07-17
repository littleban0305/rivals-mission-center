// ==========================
// Rivals Mission Center
// Admin Panel
// ==========================

const currentPlayer =
    JSON.parse(
        localStorage.getItem("playerData")
    )?.username;

const params =
    new URLSearchParams(location.search);

const selectedPlayer =
    params.get("player") ||
    currentPlayer;

const playerSelect =
    document.getElementById("playerSelect");

let adminPlayer = null;
let players = [];

async function loadPlayers() {

    try {

        const response =
            await fetch(
                `${API_URL}?action=players`
            );

        players =
            await response.json();

        console.log(players);

        if (!Array.isArray(players)) {

            console.error(
                "玩家資料不是陣列",
                players
            );

            return;

        }

        adminPlayer =
            players.find(
                p => p.username === selectedPlayer
            );

        console.log(
            "missions",
            adminPlayer.missions
        );

        if (!adminPlayer) {

            alert("找不到玩家資料！");
            return;

        }

        // 建立下拉選單

        if (playerSelect) {
            
            playerSelect.addEventListener("change", () => {

                location.href =
                    `admin.html?player=${playerSelect.value}`;
            
            });
            
            playerSelect.innerHTML = "";

            players.forEach(player => {

                const option =
                    document.createElement("option");

                option.value =
                    player.username;

                option.textContent =
                    player.username;

                if (
                    player.username === selectedPlayer
                ) {

                    option.selected = true;

                }

                playerSelect.appendChild(option);

            });

        }

        // 載入資料

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

        // 任務清單

        if (
            missionSelect &&
            adminPlayer.missions
        ) {

            missionSelect.innerHTML = "";

            for (const id in adminPlayer.missions) {

                if (
                    adminPlayer.missions[id] ===
                    "pending"
                ) {

                    const option =
                        document.createElement(
                            "option"
                        );

                    option.value = id;

                    option.textContent =
                        `${id}（審核中）`;

                    missionSelect.appendChild(
                        option
                    );

                }

            }

        }

    }

    catch (err) {

        console.error(err);

    }

    const shopOrderSelect =
        document.getElementById(
            "shopOrderSelect"
        );
    
    if (
        shopOrderSelect &&
        adminPlayer.shopOrders
    ) {
    
        shopOrderSelect.innerHTML =
            '<option value="">請選擇訂單</option>';
    
        adminPlayer.shopOrders.forEach(
            (order, index) => {
    
                if (
                    order.status === "pending"
                ) {
    
                    const option =
                        document.createElement(
                            "option"
                        );
    
                    option.value =
                        index;
    
                    option.textContent =
                        `${order.name}`;
    
                    shopOrderSelect.appendChild(
                        option
                    );
    
                }
    
            }
        );
    
    }

}

loadPlayers();

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

        fetch(API_URL, {
        
            method: "POST",
        
            body: JSON.stringify({
        
                action: "updatePlayer",
        
                username: adminPlayer.username,
        
                roblox: adminPlayer.roblox,
        
                discord: adminPlayer.discord,
        
                gold: adminPlayer.gold,
        
                rcoin: adminPlayer.rcoin,
        
                exp: adminPlayer.exp,
        
                level: adminPlayer.level,
        
                battlePass: adminPlayer.battlePass,
        
                skinCase: adminPlayer.skinCase,
        
                coconutScythe: adminPlayer.coconutScythe,
        
                missions: adminPlayer.missions
        
            })
        
        })
        
        .then(res => res.json())
        
        .then(data => {
        
            if (data.success) {
        
                alert("✅ 玩家資料已同步到 Google Sheets！");
        
            }
        
            else {
        
                alert("❌ 儲存失敗");
        
            }
        
        })
        
        .catch(err => {
        
            console.error(err);
        
            alert("❌ 無法連線到伺服器");
        
        });

    });

}

// ==========================
// 任務審核
// ==========================

const missionSelect =
    document.getElementById("missionSelect");

const approveBtn =
    document.getElementById("approveMission");

if (approveBtn) {

    approveBtn.addEventListener("click", () => {

        const missionId =
            missionSelect.value;

        console.log("missionId =", missionId);

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

        // ==========================
        // Battle Pass 升級
        // ==========================
        
        let needExp =
            adminPlayer.battlePass * 100;
        
        while (
            adminPlayer.exp >= needExp
        ) {
        
            adminPlayer.exp -= needExp;
        
            adminPlayer.battlePass++;
        
            needExp =
                adminPlayer.battlePass * 100;
        
        }

        fetch(API_URL, {
        
            method: "POST",
        
            body: JSON.stringify({

                action: "updatePlayer",
            
                username: adminPlayer.username,
            
                roblox: adminPlayer.roblox,
            
                discord: adminPlayer.discord,
            
                gold: adminPlayer.gold,
            
                rcoin: adminPlayer.rcoin,
            
                exp: adminPlayer.exp,
            
                level: adminPlayer.level,
            
                battlePass: adminPlayer.battlePass,
            
                skinCase: adminPlayer.skinCase,
            
                coconutScythe: adminPlayer.coconutScythe,
            
                missions: adminPlayer.missions
            
            })
        
        })
        
        .then(res => res.json())
        
        .then(data => {
        
            if (data.success) {
        
                alert("✅ 任務已核准並同步！");
        
                location.reload();
        
            }
        
            else {
        
                alert("❌ 同步失敗");
        
            }
        
        })
        
        .catch(err => {
        
            console.error(err);
        
            alert("❌ 無法連線到伺服器");
        
        });

    });

}

// ==========================
// 商店訂單發送
// ==========================

const approveOrderBtn =
    document.getElementById(
        "approveOrder"
    );

if (approveOrderBtn) {

    approveOrderBtn.addEventListener(
        "click",
        () => {

            const index =
                document.getElementById(
                    "shopOrderSelect"
                ).value;

            if (index === "") {

                alert("請選擇訂單");

                return;

            }

            const order =
                adminPlayer.shopOrders[index];

            // 發送商品

            if (
                order.id === "SC001"
            ) {

                adminPlayer.skinCase =
                    (adminPlayer.skinCase || 0)
                    + 1;

            }

            if (
                order.id === "SC002"
            ) {

                adminPlayer.coconutScythe =
                    (adminPlayer.coconutScythe || 0)
                    + 1;

            }

            order.status =
                "completed";

            // 同步 Google Sheets

            fetch(API_URL, {

                method: "POST",

                body: JSON.stringify({

                    action:
                        "updatePlayer",

                    username:
                        adminPlayer.username,

                    nickname:
                        adminPlayer.nickname,

                    roblox:
                        adminPlayer.roblox,

                    discord:
                        adminPlayer.discord,

                    gold:
                        adminPlayer.gold,

                    rcoin:
                        adminPlayer.rcoin,

                    exp:
                        adminPlayer.exp,

                    level:
                        adminPlayer.level,

                    battlePass:
                        adminPlayer.battlePass,

                    skinCase:
                        adminPlayer.skinCase,

                    coconutScythe:
                        adminPlayer.coconutScythe,

                    missions:
                        adminPlayer.missions,

                    shopOrders:
                        adminPlayer.shopOrders

                })

            })

            .then(res => res.json())

            .then(data => {

                if (data.success) {

                    alert(
                        "📦 商品已發送"
                    );

                    location.reload();

                }

            });

        }

    );

}
