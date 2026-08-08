// ==========================
// Rivals Mission Center
// Login System Beta 2
// Father's Day Special
// ==========================

const API_URL =
"https://script.google.com/macros/s/AKfycbzURjyuu9xjEo68I4WmYc7vyaXQv7BMeleaWfkaJGrPAak3V3QvDIX2wDtXon24qCgM/exec";

// ==========================
// 爸爸帳號設定
// ==========================

// 把這裡改成你爸爸的帳號
const FATHER_ACCOUNT =
    "dschang0524";

// ==========================
// 已登入就直接回首頁
// ==========================

const isLogin =
    localStorage.getItem(
        "isLogin"
    );

if (isLogin === "true") {

    // location.replace("index.html");

}

// ==========================
// 取得元件
// ==========================

const usernameInput =
    document.getElementById(
        "username"
    );

const passwordInput =
    document.getElementById(
        "password"
    );

const loginBtn =
    document.getElementById(
        "loginBtn"
    );

// ==========================
// 登入
// ==========================

loginBtn.addEventListener(
    "click",
    login
);

// ==========================
// Enter 也可以登入
// ==========================

usernameInput.addEventListener(
    "keydown",
    function(e) {

        if (e.key === "Enter") {

            login();

        }

    }
);

// ==========================
// 登入功能
// ==========================

async function login() {

    const username =
        usernameInput.value.trim();

    const password =
        passwordInput.value.trim();

    if (!username) {

        alert(
            "請輸入帳號！"
        );

        return;

    }

    if (!password) {

        alert(
            "請輸入密碼！"
        );

        return;

    }

    try {

        // ==========================
        // 取得玩家資料
        // ==========================

        const response =
            await fetch(
                `${API_URL}?username=${encodeURIComponent(username)}`
            );

        const player =
            await response.json();

        // ==========================
        // 帳號不存在
        // ==========================

        if (player.error) {

            alert(
                "找不到帳號！"
            );

            return;

        }

        // ==========================
        // 密碼檢查
        // ==========================

        if (
            String(player.password).trim() !==
            String(password).trim()
        ) {

            alert(
                "密碼錯誤！"
            );

            return;

        }

        // ==========================
        // 登入成功
        // ==========================

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

        // ==========================
        // 父親節判斷
        // ==========================

        const today =
            new Date();

        const month =
            today.getMonth();

        const date =
            today.getDate();

        // JavaScript 的月份：
        // 0 = 1月
        // 7 = 8月

        const isFatherDay =
            month === 7 &&
            date === 8;

        // ==========================
        // 爸爸帳號
        // ==========================

        const isFather =
            username.toLowerCase() ===
            FATHER_ACCOUNT.toLowerCase();

        // ==========================
        // 爸爸 + 8/8
        // ==========================

        if (
            isFather &&
            isFatherDay
        ) {

            alert(
                "🎉 父親節快樂！"
            );

            window.location.href =
                "father-day.html";

            return;

        }

        // ==========================
        // 一般玩家
        // ==========================

        alert(
            "登入成功！"
        );

        window.location.href =
            "index.html";

    }

    catch (err) {

        console.error(err);

        alert(
            "無法連線到伺服器"
        );

    }

}
