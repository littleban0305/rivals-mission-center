// ==========================
// Rivals Mission Center
// Login System Beta 1
// ==========================

// 已登入就直接回首頁
const player = localStorage.getItem("player");

if (player) {

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

    // 建立玩家資料
const player = {

    playerId: crypto.randomUUID
        ? crypto.randomUUID()
        : Date.now().toString(),

    username: username,

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

    // 儲存
    localStorage.setItem(
        "player",
        JSON.stringify(player)
    );

    alert("登入成功！");

    window.location.href = "index.html";

}
