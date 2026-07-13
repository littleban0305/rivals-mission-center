// ==========================
// Rivals Mission Center
// Submit System Beta 1
// ==========================

// 所有任務資料
const missions = {

    // 每日
    D001: {
        name: "每日登入",
        reward: "20 Gold ・10 EXP",
        proof: "登入截圖"
    },

    D002: {
        name: "完成 3 場 Rivals",
        reward: "40 Gold ・20 EXP",
        proof: "戰績截圖"
    },

    D003: {
        name: "贏得 5 場 Rivals",
        reward: "60 Gold ・30 EXP",
        proof: "戰績截圖"
    },

    // 每週
    W001: {
        name: "完成 30 場 Rivals",
        reward: "250 Gold ・100 EXP",
        proof: "戰績截圖"
    },

    W002: {
        name: "贏得 15 場 Rivals",
        reward: "350 Gold ・150 EXP",
        proof: "戰績截圖"
    },

    // 升級
    L001: {
        name: "Lv.300",
        reward: "20 R 幣",
        proof: "等級截圖"
    },

    L002: {
        name: "Lv.400",
        reward: "50 R 幣",
        proof: "等級截圖"
    },

    L003: {
        name: "Lv.500",
        reward: "100 R 幣",
        proof: "等級截圖"
    },

    L004: {
        name: "安裝 Medal",
        reward: "10 R 幣",
        proof: "安裝完成截圖"
    },

    L005: {
        name: "安裝指定手機遊戲",
        reward: "10 R 幣",
        proof: "安裝完成截圖"
    },

    // 幫助
    H001: {
        name: "幫哥哥升到100等",
        reward: "20 R 幣",
        proof: "等級截圖"
    },

    H002: {
        name: "登入哥哥 Medal",
        reward: "20 R 幣",
        proof: "登入畫面"
    },

    // 成就
    A001: {
        name: "SkinApe 30000 Coins",
        reward: "10 R 幣",
        proof: "Coins 截圖"
    },

    A002: {
        name: "SkinApe 40000 Coins",
        reward: "20 R 幣",
        proof: "Coins 截圖"
    },

    // 永久
    P001: {
        name: "500 次雙殺",
        reward: "50 R 幣",
        proof: "Medal 影片"
    },

    P002: {
        name: "魔王模式獲勝",
        reward: "50 R 幣",
        proof: "Medal 影片"
    },

    P003: {
        name: "開到紅武",
        reward: "10 R 幣",
        proof: "開箱截圖"
    },

    P004: {
        name: "完成手機任務",
        reward: "20 R 幣",
        proof: "完成截圖"
    }

};

// ==========================
// 讀取網址參數
// submit.html?id=D001
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

    } else {

        document.getElementById("missionName").textContent = mission.name;

        document.getElementById("missionCode").textContent = id;

        document.getElementById("missionReward").textContent = mission.reward;

        document.getElementById("missionProof").textContent = mission.proof;

    }

}

// ==========================
// 商品
// ==========================

else if (type === "shop") {

    const shop = {

        SC001: {

            name:"Skin Case",

            reward:"Skin Case",

            proof:"Roblox 名稱"

        },

        SC002:{

            name:"椰子鐮刀",

            reward:"Palm Scythe",

            proof:"Roblox 名稱"

        }

    };

    const item = shop[id];

    document.getElementById("missionName").textContent = item.name;

    document.getElementById("missionCode").textContent = id;

    document.getElementById("missionReward").textContent = item.reward;

    document.getElementById("missionProof").textContent = item.proof;

}

// ==========================
// Gold → R 幣
// ==========================

else if (type === "exchange") {

    const gold = params.get("gold");

    const rcoin = params.get("rcoin");

    document.getElementById("missionName").textContent = "Gold 兌換 R 幣";

    document.getElementById("missionCode").textContent = id;

    document.getElementById("missionReward").textContent =
        `${gold} Gold → ${rcoin} R`;

    document.getElementById("missionProof").textContent =
        "Roblox 名稱";

}

// Google Form
const submitBtn = document.getElementById("submitGoogle");

submitBtn.addEventListener("click", () => {

    window.open(
    "https://forms.gle/kvrLmooCyYbGAsKP9",
    "_blank"
);

    // 之後改成：
    // window.open("你的GoogleForm網址");

});
