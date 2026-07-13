// ==========================
// Rivals Mission Center
// Shop System Beta 1
// ==========================

// 玩家資料
const player = JSON.parse(localStorage.getItem("player"));

if (!player) {

    window.location.href = "login.html";

}

// ==========================
// Navbar
// ==========================

const loginBtn = document.querySelector(".login-btn");

if (loginBtn) {

    loginBtn.innerHTML = `
        <i class="bi bi-person-circle"></i>
        ${player.username}
    `;

}

// ==========================
// 顯示 Gold / R 幣
// ==========================

const goldText = document.getElementById("shopGold");

const rcoinText = document.getElementById("shopRcoin");

if (goldText) {

    goldText.textContent = player.gold;

}

if (rcoinText) {

    rcoinText.textContent = player.rcoin;

}

// ==========================
// Gold -> R 幣 換算
// ==========================

const goldInput = document.getElementById("goldInput");

const result = document.getElementById("rcoinResult");

if (goldInput && result) {

    goldInput.addEventListener("input", () => {

        let gold = parseInt(goldInput.value);

        if (isNaN(gold) || gold < 5) {

            result.textContent = "0 R";

            return;

        }

        // 必須是5的倍數
        gold = Math.floor(gold / 5) * 5;

        result.textContent = `${gold / 5} R`;

    });

}

// ==========================
// 商品按鈕
// ==========================

const shopButtons = document.querySelectorAll(".shop-btn");

shopButtons.forEach(button => {

    button.addEventListener("click", () => {

        const itemId = button.dataset.item;

        window.location.href =
        `submit.html?type=shop&id=${itemId}`;

    });

});

// ==========================
// Gold -> R 幣
// (目前先顯示提示)
// ==========================

const exchangeBtn = document.getElementById("exchangeBtn");

if (exchangeBtn) {

    exchangeBtn.addEventListener("click", () => {

        let gold = parseInt(goldInput.value);

        if (isNaN(gold) || gold < 5) {

            alert("請輸入至少 5 Gold！");

            return;

        }

        if (gold % 5 !== 0) {

            alert("Gold 必須是 5 的倍數！");

            return;

        }

        if (gold > player.gold) {

            alert("Gold 不足！");

            return;

        }

        const rcoin = gold / 5;

        window.location.href =
        `submit.html?type=exchange&id=EX001&gold=${gold}&rcoin=${rcoin}`;
        );

    });

});

console.log(player);
