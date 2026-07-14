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

const loginBtn = document.querySelector(".login-btn");

if (loginBtn && player) {

    loginBtn.innerHTML = `
        <i class="bi bi-person-circle"></i>
        ${player.username}
    `;

}

// ---------- 首頁資料 ----------

const playerName = document.querySelector(".card p");

if (playerName && player) {

    playerName.textContent = `Roblox：${player.username}`;

}

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

// ==========================
// 任務提交
// ==========================

const submitButtons = document.querySelectorAll(".submit-btn");

submitButtons.forEach(button => {

    button.addEventListener("click", () => {

        const id = button.dataset.id;

        window.location.href = `submit.html?id=${id}`;

    });

});

const userBtn = document.getElementById("userBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownArrow = document.getElementById("dropdownArrow");

if(userBtn){

    userBtn.addEventListener("click", function (e) {

        e.stopPropagation();

        dropdownMenu.classList.toggle("show");
        dropdownArrow.classList.toggle("rotate");

});

    document.addEventListener("click", function(){

        dropdownMenu.classList.remove("show");
        dropdownArrow.classList.remove("rotate");

});

}
