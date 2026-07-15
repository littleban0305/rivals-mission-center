// ==========================
// Rivals Mission Center
// Login System Beta 2
// ==========================

const API_URL =
"https://script.google.com/macros/s/AKfycbzURjyuu9xjEo68I4WmYc7vyaXQv7BMeleaWfkaJGrPAak3V3QvDIX2wDtXon24qCgM/exec";

// 已登入就直接回首頁
const isLogin = localStorage.getItem("isLogin");

if (isLogin === "true") {

    // location.replace("index.html");

}

// 取得元件
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

// 登入
loginBtn.addEventListener("click", login);

// Enter 也可以登入
usernameInput.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        login();

    }

});

async function login() {

    const username =
        usernameInput.value.trim();

    const password =
        passwordInput.value.trim();

    if (!username) {

        alert("請輸入帳號！");
        return;

    }

    if (!password) {

        alert("請輸入密碼！");
        return;

    }

    try {

        const response =
            await fetch(
                `${API_URL}?username=${encodeURIComponent(username)}`
            );

        const player =
            await response.json();

        if (player.error) {

            alert("找不到帳號！");
            return;

        }

        if (player.password !== password) {

            alert("密碼錯誤！");
            return;

        }

        // 登入成功

        localStorage.setItem(
            "currentPlayer",
            username
        );

        localStorage.setItem(
            "playerData",
            JSON.stringify(player)
        );

        localStorage.setItem(
            "isLogin",
            "true"
        );

        alert("登入成功！");

        window.location.href =
            "index.html";

    }

    catch (err) {

        console.error(err);

        alert("無法連線到伺服器");

    }

}
