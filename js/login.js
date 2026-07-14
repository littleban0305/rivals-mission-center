// ==========================
// Rivals Mission Center
// Login System Beta 1.1
// ==========================

// 已登入就直接回首頁
const isLogin = localStorage.getItem("isLogin");

if (isLogin === "true") {

    location.replace("index.html");

}

// 取得元件
const usernameInput = document.getElementById("username");
const loginBtn = document.getElementById("loginBtn");

// 登入
loginBtn.addEventListener("click", login);

// Enter 也可以登入
usernameInput.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        login();

    }

});

function login() {

    const username = usernameInput.value.trim();

    if (username.length > 20) {

        alert("Roblox 名稱最多 20 個字元。");

        return;

    }

    if (username === "") {

        alert("請輸入 Roblox 名稱！");

        return;

    }

    // ==========================
    // 讀取舊資料
    // ==========================

    let player = JSON.parse(localStorage.getItem("player"));

    // ==========================
    // 第一次登入
    // ==========================

    if (!player) {

        player = {

            playerId: crypto.randomUUID
                ? crypto.randomUUID()
                : Date.now().toString(),

            username: username,

            roblox: username,

            discord: "",

            version: "Beta 0.1",

            gold: 0,

            rcoin: 0,

            level: 1,

            battlePass: 1,

            exp: 0,

            maxExp: 100,

            skinCase: 0,

            coconutScythe: 0,

            dailyCompleted: 0,

            weeklyCompleted: 0,

            permanentCompleted: 0,

            joinDate: new Date().toLocaleDateString(),

            createTime: Date.now(),

            lastLogin: Date.now()

        };

    }

    // ==========================
    // 已存在玩家
    // ==========================

    else {

        player.username = username;

        player.roblox = username;

        player.lastLogin = Date.now();

        // 補齊新版本欄位（避免 undefined）

        if (player.discord === undefined)
            player.discord = "";

        if (player.rcoin === undefined)
            player.rcoin = 0;

        if (player.level === undefined)
            player.level = 1;

        if (player.battlePass === undefined)
            player.battlePass = 1;

        if (player.exp === undefined)
            player.exp = 0;

        if (player.maxExp === undefined)
            player.maxExp = 100;

        if (player.skinCase === undefined)
            player.skinCase = 0;

        if (player.coconutScythe === undefined)
            player.coconutScythe = 0;

        if (player.dailyCompleted === undefined)
            player.dailyCompleted = 0;

        if (player.weeklyCompleted === undefined)
            player.weeklyCompleted = 0;

        if (player.permanentCompleted === undefined)
            player.permanentCompleted = 0;

        if (player.version === undefined)
            player.version = "Beta 0.1";

    }

    // ==========================
    // 儲存
    // ==========================

    localStorage.setItem(
        "player",
        JSON.stringify(player)
    );

    localStorage.setItem("isLogin", "true");
    
    alert("登入成功！");

    window.location.href = "index.html";

}
