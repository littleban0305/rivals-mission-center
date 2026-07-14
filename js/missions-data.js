// ==========================
// Rivals Mission Center
// Missions Data
// ==========================

const missions = {

    // ==========================
    // 每日任務
    // ==========================

    D001: {
        icon: "🟢",
        category: "daily",
        status: "active",
        name: "每日登入",
        desc: "登入網站一次。",
        reward: "10 Gold ・10 EXP",
        proof: "登入截圖"
    },

    D002: {
        icon: "🟢",
        category: "daily",
        status: "active",
        name: "完成 3 場 Rivals",
        desc: "完成任意三場 Rivals 對戰。",
        reward: "20 Gold ・20 EXP",
        proof: "戰績截圖"
    },

    D003: {
        icon: "🟡",
        category: "daily",
        status: "active",
        name: "贏得 5 場 Rivals",
        desc: "成功獲勝五場 Rivals。",
        reward: "30 Gold ・30 EXP",
        proof: "戰績截圖"
    },

    // ==========================
    // 每週任務
    // ==========================

    W001: {
        icon: "🟢",
        category: "weekly",
        status: "active",
        name: "完成 30 場 Rivals",
        desc: "一週內完成 30 場 Rivals。",
        reward: "150 Gold ・100 EXP",
        proof: "戰績截圖"
    },

    W002: {
        icon: "🟡",
        category: "weekly",
        status: "active",
        name: "贏得 15 場 Rivals",
        desc: "一週內贏得 15 場 Rivals。",
        reward: "250 Gold ・150 EXP",
        proof: "戰績截圖"
    },

    // ==========================
    // 一次性任務
    // ==========================

    L001: {
        icon: "⭐",
        category: "once",
        status: "active",
        name: "Rivals 等級達到 Lv.300",
        desc: "將 Rivals 帳號提升至 300 等。",
        reward: "100 Gold",
        proof: "等級截圖"
    },

    L002: {
        icon: "⭐",
        category: "once",
        status: "active",
        name: "Rivals 等級達到 Lv.400",
        desc: "將 Rivals 帳號提升至 400 等。",
        reward: "200 Gold",
        proof: "等級截圖"
    },

    L003: {
        icon: "⭐",
        category: "once",
        status: "active",
        name: "Rivals 等級達到 Lv.500",
        desc: "將 Rivals 帳號提升至 500 等。",
        reward: "500 Gold",
        proof: "等級截圖"
    },

    L004: {
        icon: "💻",
        category: "once",
        status: "active",
        name: "安裝指定軟體",
        desc: "完成指定軟體安裝。",
        reward: "60 Gold",
        proof: "安裝完成截圖"
    },

    L005: {
        icon: "📱",
        category: "once",
        status: "active",
        name: "安裝指定手機遊戲",
        desc: "完成指定手遊安裝。",
        reward: "60 Gold",
        proof: "安裝完成截圖"
    },

    L006: {
        icon: "🤝",
        category: "once",
        status: "active",
        name: "幫 ELO 升到 Lv.100",
        desc: "協助 ELO 帳號升到 100 等。",
        reward: "100 Gold",
        proof: "等級截圖"
    },

    L007: {
        icon: "🤝",
        category: "once",
        status: "active",
        name: "幫 ELO 升到 Lv.200",
        desc: "協助 ELO 帳號升到 200 等。",
        reward: "300 Gold",
        proof: "等級截圖"
    },

    L008: {
        icon: "🤝",
        category: "once",
        status: "active",
        name: "幫 ELO 升到 Lv.300",
        desc: "協助 ELO 帳號升到 300 等。",
        reward: "600 Gold",
        proof: "等級截圖"
    },

    L009: {
        icon: "🏆",
        category: "once",
        status: "active",
        name: "SkinApe 達到 30000 Coins",
        desc: "SkinApe Coins 累積達到 30000。",
        reward: "200 Gold",
        proof: "Coins 截圖"
    },

    L010: {
        icon: "🏆",
        category: "once",
        status: "active",
        name: "SkinApe 達到 40000 Coins",
        desc: "SkinApe Coins 累積達到 40000。",
        reward: "400 Gold",
        proof: "Coins 截圖"
    },

    // ==========================
    // Rivals 永久任務
    // ==========================

    P001: {
        icon: "🔥",
        category: "permanent",
        status: "active",
        name: "2v2 達成 20 次雙殺",
        desc: "累積完成 25 次雙殺。",
        reward: "150 Gold",
        proof: "Medal 影片"
    },

    P002: {
        icon: "👑",
        category: "permanent",
        status: "active",
        name: "大魔王模式當魔王並贏三整場",
        desc: "成為魔王並贏得三整場。",
        reward: "200 Gold",
        proof: "Medal 影片"
    },

    P003: {
        icon: "🎥",
        category: "permanent",
        status: "active",
        name: "錄製 50 個精華",
        desc: "累積錄製 50 個 Medal 精華。",
        reward: "150 Gold",
        proof: "Medal 個人頁截圖"
    },

    P004: {
        icon: "🎁",
        category: "permanent",
        status: "active",
        name: "開 Skin Case 開到超稀有武器（紅色）",
        desc: "抽到紅色超稀有武器。",
        reward: "100 Gold",
        proof: "開箱截圖"
    },

    // ==========================
    // CS2 永久任務
    // ==========================

    C001: {
        icon: "🎯",
        category: "cs2",
        status: "active",
        name: "與 ELO 單挑獲勝 1 場",
        desc: "在 CS2 單挑中擊敗 ELO。",
        reward: "200 Gold",
        proof: "比賽截圖"
    },

    C002: {
        icon: "🤝",
        category: "cs2",
        status: "active",
        name: "與 ELO 組隊贏得 1 場",
        desc: "與 ELO 一起完成一場競技或優先勝利。",
        reward: "250 Gold",
        proof: "比賽截圖"
    },

    // ==========================
    // 其他任務
    // ==========================

    O001: {
        icon: "📱",
        category: "other",
        status: "active",
        name: "完成一個指定手遊任務",
        desc: "完成指定手機遊戲任務。",
        reward: "50 Gold",
        proof: "完成截圖"
    }

};
