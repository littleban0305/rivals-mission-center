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
    
        reward: "50 Gold ・10 EXP",
    
        rewardGold: 50,
        rewardExp: 10,
    
        proofCount: 1,
    
        proof: "登入截圖"
    },
    
    D002: {
        icon: "🟢",
        category: "daily",
        status: "active",
        name: "完成 3 場 Rivals",
        desc: "完成任意三場 Rivals 對戰。",
    
        reward: "100 Gold ・30 EXP",
    
        rewardGold: 100,
        rewardExp: 30,
    
        proofCount: 3,
    
        proof: "戰績截圖"
    },
    
    D003: {
        icon: "🟡",
        category: "daily",
        status: "active",
        name: "贏得 5 場 Rivals",
        desc: "成功獲勝五場 Rivals。",
    
        reward: "50 Gold ・60 EXP",
    
        rewardGold: 50,
        rewardExp: 60,
    
        proofCount: 5,
    
        proof: "戰績截圖"
    },

    // ==========================
    // 每週任務
    // ==========================

    W001: {
        icon: "🟢",
        category: "weekly",
        status: "active",
        name: "完成 60 場 Rivals",
    
        reward: "150 Gold ・300 EXP",
    
        rewardGold: 150,
        rewardExp: 300,
    
        proofCount: 30,
    
        proof: "戰績截圖"
    },
    
    W002: {
        icon: "🟡",
        category: "weekly",
        status: "active",
        name: "贏得 30 場 Rivals",
    
        reward: "200 Gold ・500 EXP",
    
        rewardGold: 250,
        rewardExp: 500,
    
        proofCount: 15,
    
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
    
        reward: "200 Gold ・100 EXP",
    
        rewardGold: 200,
        rewardExp: 100,
    
        proofCount: 1,
    
        proof: "等級截圖"
    },

    L002: {
        icon: "⭐",
        category: "once",
        status: "active",
    
        name: "Rivals 等級達到 Lv.400",
        desc: "將 Rivals 帳號提升至 400 等。",
    
        reward: "500 Gold ・200 EXP",
    
        rewardGold: 500,
        rewardExp: 200,
    
        proofCount: 1,
    
        proof: "等級截圖"
    },

    L003: {
        icon: "⭐",
        category: "once",
        status: "active",
    
        name: "Rivals 等級達到 Lv.500",
        desc: "將 Rivals 帳號提升至 500 等。",
    
        reward: "1000 Gold ・500 EXP",
    
        rewardGold: 1000,
        rewardExp: 500,
    
        proofCount: 1,
    
        proof: "等級截圖"
    },

    L004: {
        icon: "🤝",
        category: "once",
        status: "active",
        
        name: "幫 ELO 升到 Lv.100",
        desc: "協助 ELO 帳號升到 100 等。",
        
        reward: "350 Gold ・100 EXP",

        rewardGold: 350,
        rewardExp: 100,
        
        proofCount: 1,
        
        proof: "等級截圖"
    },

    L005: {
        icon: "🤝",
        category: "once",
        status: "active",
        
        name: "幫 ELO 升到 Lv.200",
        desc: "協助 ELO 帳號升到 200 等。",
        
        reward: "700 Gold ・250 EXP",

        rewardGold: 700,
        rewardExp: 250,
        
        proofCount: 1,
        
        proof: "等級截圖"
    },

    L006: {
        icon: "🤝",
        category: "once",
        status: "active",
        
        name: "幫 ELO 升到 Lv.300",
        desc: "協助 ELO 帳號升到 300 等。",
        
        reward: "1000 Gold ・500 EXP",

        rewardGold: 1000,
        rewardExp: 500,
        
        proofCount: 1,
        
        proof: "等級截圖"
    },

    L007: {
        icon: "🏆",
        category: "once",
        status: "active",
        name: "SkinApe 達到 30000 Coins",
        desc: "SkinApe Coins 累積達到 30000。",
        reward: "500 Gold ・200 EXP",
        rewardGold: 500,
        rewardExp: 200,
        proofCount: 1,
        proof: "Coins 截圖"
    },

    L008: {
        icon: "🏆",
        category: "once",
        status: "active",
        name: "SkinApe 達到 40000 Coins",
        desc: "SkinApe Coins 累積達到 40000。",
        reward: "1000 Gold ・400 EXP",
        rewardGold: 1000,
        rewardExp: 400,
        proofCount: 1,
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
        reward: "150 Gold ・100 EXP",
        rewardGold: 150,
        rewardExp: 100,
        proofCount: 1,
        proof: "Medal 影片"
    },

    P002: {
        icon: "👑",
        category: "permanent",
        status: "active",
        name: "大魔王模式當魔王並贏一整場",
        desc: "成為魔王並贏得一整場。",
        reward: "200 Gold ・200 EXP",
        rewardGold: 200,
        rewardExp: 200,
        proofCount: 1,
        proof: "Medal 影片"
    },

    P003: {
        icon: "🎥",
        category: "permanent",
        status: "active",
        name: "錄製 50 個精華",
        desc: "累積錄製 50 個 Medal 精華。",
        reward: "300 Gold ・150 EXP",
        rewardGold: 300,
        rewardExp: 150,
        proofCount: 1,
        proof: "Medal 個人頁截圖"
    },

    P004: {
        icon: "🎁",
        category: "permanent",
        status: "active",
        name: "開 Skin Case 開到超稀有武器（紅色）",
        desc: "抽到紅色超稀有武器。",
        reward: "100 Gold ・300 EXP",
        rewardGold: 100,
        rewardExp: 300,
        proofCount: 1,
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
        reward: "200 Gold ・300 EXP",
        rewardGold: 200,
        rewardExp: 300,
        proofCount: 1,
        proof: "比賽截圖"
    },

    C002: {
        icon: "🤝",
        category: "cs2",
        status: "active",
        name: "與 ELO 組隊贏得 1 場",
        desc: "與 ELO 一起完成一場競技或優先勝利。",
        reward: "250 Gold ・150 EXP",
        rewardGold: 250,
        rewardExp: 150,
        proofCount: 1,
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
        reward: "50 Gold ・50 EXP",
        rewardGold: 50,
        rewardExp: 50,
        proofCount: 1,
        proof: "完成截圖"
    },

    O002: {
        icon: "💻",
        category: "once",
        status: "active",
        
        name: "安裝指定軟體",
        desc: "完成指定軟體安裝。",
        
        reward: "60 Gold ・50 EXP",
        
        rewardGold: 60,
        rewardExp: 50,
        
        proofCount: 1,
        
        proof: "安裝完成截圖"
    },

    O003: {
        icon: "📱",
        category: "once",
        status: "active",
        
        name: "安裝指定手機遊戲",
        desc: "完成指定手遊安裝。",
        
        reward: "60 Gold ・50 EXP",

        rewardGold: 60,
        rewardExp: 50,
        
        proofCount: 1,
        
        proof: "安裝完成截圖"
    }

};
