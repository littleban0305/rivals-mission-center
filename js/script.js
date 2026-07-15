// ==========================
// Rivals Mission Center
// Main Script
// ==========================

const API_URL =
"https://script.google.com/macros/s/AKfycbzURjyuu9xjEo68I4WmYc7vyaXQv7BMeleaWfkaJGrPAak3V3QvDIX2wDtXon24qCgM/exec";

async function syncPlayer() {

    if (!player) return;

    try {

        const response =
            await fetch(
                `${API_URL}?username=${encodeURIComponent(player.username)}`
            );

        const latestPlayer =
            await response.json();

        if (!latestPlayer.error) {

            localStorage.setItem(
                "playerData",
                JSON.stringify(latestPlayer)
            );

        }

    }

    catch (err) {

        console.error("同步失敗", err);

    }

}

// ---------- 玩家登入 ----------

const player =
    JSON.parse(
        localStorage.getItem("playerData")
    );

async function refreshPlayerData() {

    if (!player) return;

    try {

        const response =
            await fetch(
                `${API_URL}?username=${encodeURIComponent(player.username)}`
            );

        const latestPlayer =
            await response.json();

        if (!latestPlayer.error) {

            localStorage.setItem(
                "playerData",
                JSON.stringify(latestPlayer)
            );

            location.reload();

        }

    }

    catch (err) {

        console.error(err);

    }

}

const isLogin = localStorage.getItem("isLogin");

if (!player || isLogin !== "true") {

    console.log("登入檢查失敗");
    // window.location.href = "login.html";

}

syncPlayer();

// ---------- Navbar ----------

const username = document.getElementById("username");

if (username && player) {

    username.textContent = player.username;

}

const dropdownUsername = document.getElementById("dropdownUsername");

if (dropdownUsername && player) {

    dropdownUsername.textContent = player.username;

}

// ---------- 首頁資料 ----------

const isHome =
    window.location.pathname.includes("index.html") ||
    window.location.pathname.endsWith("/");

if (isHome) {

    const goldText = document.querySelector(".dashboard .card:nth-child(2) h1");

    if (goldText && player) {

        goldText.textContent = player.gold;

    }

    const bpText = document.querySelector(".dashboard .card:nth-child(3) p");

    if (bpText && player) {

        bpText.textContent = `Lv.${player.battlePass}`;

    }

    const progressBar = document.querySelector(".progress-bar");

    if (progressBar && player) {

        progressBar.style.width = `${player.exp}%`;

    }

    // ---------- Hero Button ----------

    const startBtn = document.getElementById("startBtn");

    if (startBtn) {

        startBtn.addEventListener("click", () => {

            window.location.href = "missions.html";

        });

    }

}

// ==========================
// 任務提交
// ==========================

const submitButtons = document.querySelectorAll(".submit-btn");

submitButtons.forEach(button => {

    button.addEventListener("click", () => {

        const id = button.dataset.id;

        window.location.href = `submit.html?type=mission&id=${id}`;

    });

});

// ==========================
// User Dropdown
// ==========================

const userBtn = document.getElementById("userBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownArrow = document.getElementById("dropdownArrow");

if (userBtn && dropdownMenu) {

    userBtn.addEventListener("click", function (e) {

        e.stopPropagation();

        dropdownMenu.classList.toggle("show");

        if (dropdownArrow) {

            dropdownArrow.classList.toggle("rotate");

        }

    });

    dropdownMenu.addEventListener("click", function (e) {

        e.stopPropagation();

    });

    document.addEventListener("click", function () {

        dropdownMenu.classList.remove("show");

        if (dropdownArrow) {

            dropdownArrow.classList.remove("rotate");

        }

    });

}

// ==========================
// Edit Profile
// ==========================

const editProfileBtn = document.getElementById("editProfileBtn");
const editModal = document.getElementById("editModal");
const cancelEdit = document.getElementById("cancelEdit");

if (editProfileBtn && editModal) {

    editProfileBtn.addEventListener("click", function () {

        document.getElementById("editNickname").value =
            player.nickname || "";

        document.getElementById("editRoblox").value =
            player.roblox || "";

        document.getElementById("editDiscord").value =
            player.discord || "";

        editModal.classList.add("show");

    });

}

// ==========================
// Save Profile
// ==========================

const saveProfile = document.getElementById("saveProfile");

if (saveProfile) {

    saveProfile.addEventListener("click", function () {
        
        const oldUsername = player.username;
        
        player.nickname =
            document.getElementById("editNickname").value;

        player.roblox =
            document.getElementById("editRoblox").value;

        player.discord =
            document.getElementById("editDiscord").value;

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
        
                missions: player.missions
        
            })
        
        })
        .then(res => res.json())
        .then(data => {
        
            if (data.success) {
        
                console.log("玩家資料同步成功");
        
            }
        
        })
        .catch(err => {
        
            console.error(err);
        
        });
        
        // 更新 Navbar
        if (username) {

            username.textContent = player.username;

        }

        if (dropdownUsername) {

            dropdownUsername.textContent = player.username;

        }

        editModal.classList.remove("show");

    });

}


// ==========================
// Logout
// ==========================

const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        localStorage.removeItem(
            "playerData"
        );

        localStorage.removeItem(
            "isLogin"
        );

        window.location.href =
            "login.html";

    });

}
