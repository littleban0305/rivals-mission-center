// ==========================
// Rivals Mission Center
// Main Script
// ==========================

// ---------- 玩家登入 ----------

const player = JSON.parse(localStorage.getItem("player"));

if (!player) {

    if (!window.location.pathname.includes("login.html")) {

        window.location.href = "login.html";

    }

}

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

        document.getElementById("editUsername").value =
            player.username || "";

        document.getElementById("editRoblox").value =
            player.roblox || "";

        document.getElementById("editDiscord").value =
            player.discord || "";

        editModal.classList.add("show");

    });

}

if (cancelEdit && editModal) {

    cancelEdit.addEventListener("click", function () {

        editModal.classList.remove("show");

    });

}

// ==========================
// Save Profile
// ==========================

const saveProfile = document.getElementById("saveProfile");

if (saveProfile) {

    saveProfile.addEventListener("click", function () {

        player.username =
            document.getElementById("editUsername").value;

        player.roblox =
            document.getElementById("editRoblox").value;

        player.discord =
            document.getElementById("editDiscord").value;

        localStorage.setItem(
            "player",
            JSON.stringify(player)
        );

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
