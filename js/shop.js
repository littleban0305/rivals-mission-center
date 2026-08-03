// ==========================
// Rivals Mission Center
// Shop System Beta 1
// ==========================

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

        if (player.gold < item.goldPrice) {

            alert("Gold 不足！");

            return;

        }

        if (!confirm(
            `確定花費 ${item.goldPrice} Gold 購買 ${item.name}？`
        )) {

            return;

        }

        // 扣 Gold

        player.gold -= item.goldPrice;

        // 建立訂單

        if (!player.shopOrders) {

            player.shopOrders = [];

        }

        player.shopOrders.push({

            id: itemId,

            name: item.name,

            price: item.goldPrice,

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

const caseList =
    document.getElementById(
        "caseList"
    );

if (caseList) {

    for (const id in cases) {

        const box =
            cases[id];

        const card =
            document.createElement(
                "div"
            );

        card.className =
            "case-card";

        card.innerHTML = `
        
        <img
        src="${box.image}"
        class="case-image">
        
        <h2
        class="case-title">
        
        ${box.name}
        
        </h2>
        
        <p
        class="case-desc">
        
        ${box.desc}
        
        </p>
        
        <div
        class="case-price">
        
        💰 ${box.price} Gold
        
        </div>
        
        <div
        class="case-buttons">
        
        <button
        class="btn buy-case"
        data-id="${id}">
        
        📦 購買
        
        </button>
        
        <button
        class="btn open-case"
        data-id="${id}">
        
        🎁 開啟
        ${
            player.cases?.[id]
            ? ` (${player.cases[id]})`
            : ""
        }
        
        </button>
        
        </div>
        
        `;

        caseList.appendChild(
            card
        );

    }

}

// ==========================
// 購買箱子
// ==========================

document
.querySelectorAll(".buy-case")
.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const caseId =
                button.dataset.id;

            const box =
                cases[caseId];

            if (!box) return;

            if (!player.cases) {

                player.cases = {};

            }

            if (
                player.gold <
                box.price
            ) {

                alert(
                    "Gold 不足！"
                );

                return;

            }

            if (
                !confirm(
                    `確定花費 ${box.price} Gold 購買 ${box.name}？`
                )
            ) {

                return;

            }

            // 扣 Gold

            player.gold -=
                box.price;

            // 增加箱子數量

            player.cases[caseId] =
                (player.cases[caseId] || 0) + 1;

            // 更新本地

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

                    shopOrders: player.shopOrders,

                    cases: player.cases

                })

            })

            .then(res => res.json())

            .then(data => {

                if (data.success) {

                    alert(
                        `📦 已購買 ${box.name}`
                    );

                    location.reload();

                }

                else {

                    alert(
                        "❌ 同步失敗"
                    );

                }

            })

            .catch(err => {

                console.error(err);

                alert(
                    "❌ 無法連線"
                );

            });

        }

    );

});

document
.querySelectorAll(".open-case")
.forEach(button=>{

button.onclick=()=>{

const id=
button.dataset.id;

window.location.href=
`case.html?id=${id}`;

};

});
