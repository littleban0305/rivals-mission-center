// ==========================
// Rivals Mission Center
// Login System Beta 1
// ==========================

// 已登入就直接回首頁
if (localStorage.getItem("player")) {

    window.location.href = "index.html";

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

    if (username === "") {

        alert("請輸入 Roblox 名稱！");
        return;

    }

    // 建立玩家資料
    const player = {

        username: username,

        gold: 0,

        rcoin: 0,

        exp: 0,

        level: 1,

        battlePass: 1,

        joinDate: new Date().toLocaleDateString()

    };

    // 儲存
    localStorage.setItem(
        "player",
        JSON.stringify(player)
    );

    alert("登入成功！");

    window.location.href = "index.html";

}
