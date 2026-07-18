// ==========================
// Rivals Mission Center
// Submit System Beta 1.1
// ==========================

// ==========================
// 讀取網址參數
// ==========================

const params = new URLSearchParams(window.location.search);

const type = params.get("type");
const id = params.get("id");

// ==========================
// 任務
// ==========================

if (type === "mission") {

    const mission = missions[id];

    if (!mission) {

        document.getElementById("missionName").textContent = "找不到任務";
        document.getElementById("missionType").textContent = "--";
        document.getElementById("missionCode").textContent = "--";
        document.getElementById("missionReward").textContent = "--";
        document.getElementById("missionProof").textContent = "--";

    } else {

        document.getElementById("missionName").textContent = mission.name;
        document.getElementById("missionCode").textContent = id;
        document.getElementById("missionReward").textContent = mission.reward;
        document.getElementById("missionProof").textContent = mission.proof;

        // 任務類型

        if (id.startsWith("D")) {

            document.getElementById("missionType").textContent = "📅 每日任務";

        }

        else if (id.startsWith("W")) {

            document.getElementById("missionType").textContent = "📆 每週任務";

        }

        else if (id.startsWith("P")) {

            document.getElementById("missionType").textContent = "⭐ 永久任務";

        }

        else if (id.startsWith("L")) {

            document.getElementById("missionType").textContent = "📈 升級任務";

        }

        else if (id.startsWith("C")) {
        
            document.getElementById("missionType").textContent = "🎯 CS2 永久任務";
        
        }
        
        else if (id.startsWith("O")) {
        
            document.getElementById("missionType").textContent = "📱 其他任務";

}

}

}

// ==========================
// 商品
// ==========================

else if (type === "shop") {

    const shop = {

        SC001: {
    
            name: "Skin Case",
            reward: "Skin Case",
            proof: "Roblox 名稱"
    
        },
    
        SC002: {
    
            name: "椰子鐮刀",
            reward: "Palm Scythe",
            proof: "Roblox 名稱"
    
        },
    
        SC003: {
    
            name: "漫畫閱讀券 ×1",
            reward: "一本漫畫永久閱讀權",
            proof: "請於 Google Form 填寫欲兌換的漫畫名稱"

    }

};

    const item = shop[id];

    if (item) {

        document.getElementById("missionType").textContent = "🛒 商品兌換";
        document.getElementById("missionName").textContent = item.name;
        document.getElementById("missionCode").textContent = id;
        document.getElementById("missionReward").textContent = item.reward;
        document.getElementById("missionProof").textContent = item.proof;

    }

}

// ==========================
// Gold → R 幣
// ==========================

else if (type === "exchange") {

    const gold = params.get("gold");
    const rcoin = params.get("rcoin");

    document.getElementById("missionType").textContent = "💰 Gold 兌換";

    document.getElementById("missionName").textContent =
        "Gold 兌換 R 幣";

    document.getElementById("missionCode").textContent =
        `${id}（${gold} Gold → ${rcoin} R）`;

    document.getElementById("missionReward").textContent =
        `${gold} Gold → ${rcoin} R`;

    document.getElementById("missionProof").textContent =
        "Roblox 名稱";

}

// ==========================
// Google Form
// ==========================

const submitBtn = document.getElementById("submitGoogle");

if (submitBtn) {

    submitBtn.addEventListener("click", () => {

        // 任務提交
        if (type === "mission") {

            const player =
                JSON.parse(
                    localStorage.getItem("playerData")
                );
            
            if (player) {
            
                if (!player.missions) {
            
                    player.missions = {};
            
                }
            
                player.missions[id] =
                    "submitted";
            
                localStorage.setItem(
                    "playerData",
                    JSON.stringify(player)
                );

                fetch(API_URL, {
                
                    method: "POST",
                
                    body: JSON.stringify({
                
                        action: "updatePlayer",
                
                        username: player.username,
                
                        roblox: player.roblox,
                
                        discord: player.discord,
                
                        gold: player.gold,
                
                        rcoin: player.rcoin,
                
                        exp: player.exp,
                
                        level: player.level,
                
                        battlePass: player.battlePass,
                
                        skinCase: player.skinCase,
                
                        coconutScythe: player.coconutScythe,
                
                        missions: player.missions,
                
                        shopOrders:
                            player.shopOrders || []
                
                    })
                
                })
                .catch(console.error);
            
            }

        }

        const player =
            JSON.parse(
                localStorage.getItem("playerData")
            );
        
        const username =
            player?.username || "";
        
        const formUrl =
            `https://docs.google.com/forms/d/e/1FAIpQLSdn_P_0zrWHSQXQ8EXSqjTRaVFuOEVzMELgNwCRNPFEcBnijw/viewform?usp=pp_url&entry.1989358585=${encodeURIComponent(username)}&entry.1608833829=${encodeURIComponent(id)}`;
        
        window.open(
            formUrl,
            "_blank"
        );

    });

}
