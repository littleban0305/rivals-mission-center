// ==========================
// Rivals Mission Center
// Shop System Beta 1
// ==========================

// ==========================
// 自動生成商品
// ==========================

const shopContainer =
    document.getElementById("shopContainer");

if (shopContainer) {

    for (const id in SHOP_ITEMS) {

        const item =
            SHOP_ITEMS[id];

        const card =
            document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <img
            src="${item.image}"
            alt="${item.name}"
            style="width:160px;margin:auto;display:block;">

            <h2>${item.name}</h2>

            <p>R 幣價格</p>

            <h3>${item.rPrice} R</h3>

            <p>Gold 價格（8 折優惠）</p>

            <h3>${item.goldPrice} Gold</h3>

            <p>

                <span class="discount-tag">

                🔥 Gold 專屬優惠

                </span>

            </p>

            <button
                class="btn shop-btn"
                data-item="${id}">

                立即兌換

            </button>

        `;

        shopContainer.appendChild(card);

    }

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
// 商品購買
// ==========================

const shopButtons =
    document.querySelectorAll(".shop-btn");

shopButtons.forEach(button => {

    button.addEventListener("click", () => {

        const itemId =
            button.dataset.item;

        const item =
            SHOP_ITEMS[itemId];

        if (!item) return;

        if (player.gold < item.price) {

            alert("Gold 不足！");

            return;

        }

        if (!confirm(
            `確定花費 ${item.price} Gold 購買 ${item.name}？`
        )) {

            return;

        }

        // 扣 Gold

        player.gold -= item.price;

        // 建立訂單

        if (!player.shopOrders) {

            player.shopOrders = [];

        }

        player.shopOrders.push({

            id: itemId,

            name: item.name,

            price: item.price,

            status: "pending",

            time:
                new Date().toISOString()

        });

        // 本地更新

        localStorage.setItem(
            "playerData",
            JSON.stringify(player)
        );

        // 同步 Google Sheets

        fetch(API_URL, {

            method: "POST",

            body: JSON.stringify({

                action: "updatePlayer",

                username: player.username,

                nickname: player.nickname,

                roblox: player.roblox,

                discord: player.discord,

                gold: player.gold,

                rcoin: player.rcoin,

                exp: player.exp,

                level: player.level,

                battlePass: player.battlePass,

                skinCase: player.skinCase,

                coconutScythe: player.coconutScythe,

                missions: player.missions,

                shopOrders: player.shopOrders

            })

        })

        .then(res => res.json())

        .then(data => {

            if (data.success) {

                alert(
                    `✅ 已成功購買 ${item.name}\n等待管理員發送`
                );

                location.reload();

            }

            else {

                alert("❌ 同步失敗");

            }

        })

        .catch(err => {

            console.error(err);

            alert("❌ 無法連線到伺服器");

        });

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

    });

}

console.log(player);
