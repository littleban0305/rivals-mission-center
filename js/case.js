const API_URL =
"https://script.google.com/macros/s/AKfycbzURjyuu9xjEo68I4WmYc7vyaXQv7BMeleaWfkaJGrPAak3V3QvDIX2wDtXon24qCgM/exec";

const player =
    JSON.parse(
        localStorage.getItem(
            "playerData"
        )
    );

const params =
    new URLSearchParams(
        location.search
    );

const caseId =
    params.get("id");

const box =
    cases[caseId];

document
.getElementById("caseImage")
.src =
box.image;

document
.getElementById("caseName")
.textContent =
box.name;

function randomItem(itemList) {

    const total =
        itemList.reduce(
            (sum, item) =>
                sum + item.chance,
            0
        );

    let random =
        Math.random() * total;

    for (const item of itemList) {

        random -= item.chance;

        if (random <= 0) {

            return items[item.id];

        }

    }

}

document
.getElementById("openCase")
.addEventListener(
    "click",
    async () => {

        const reward =
            randomItem(
                box.items
            );

        createRoll(reward);

        playAnimation();
        
        document
        .getElementById(
        "caseContainer"
        )
        .style.display="none";
        
        document
        .getElementById(
        "animationContainer"
        )
        .style.display="block";

        // ==========================
        // 扣除箱子
        // ==========================

        player.cases[caseId]--;

        if (
            player.cases[caseId] <= 0
        ) {

            delete player.cases[caseId];

        }

        // ==========================
        // 發放獎勵
        // ==========================

        switch (reward.type) {

            case "gold":

                player.gold +=
                    reward.amount;

                break;

            case "coconutScythe":

                player.coconutScythe =
                    (player.coconutScythe || 0)
                    + reward.amount;

                break;

            case "weapon":

                alert(
                    "武器背包尚未完成"
                );

                break;

        }

        // ==========================
        // 更新 LocalStorage
        // ==========================

        localStorage.setItem(

            "playerData",

            JSON.stringify(player)

        );

        // ==========================
        // 同步 Google Sheets
        // ==========================

        const res =
            await fetch(API_URL, {

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

                    coconutScythe:
                        player.coconutScythe,

                    missions: player.missions,

                    shopOrders:
                        player.shopOrders,

                    cases: player.cases

                })

            });

        const data =
            await res.json();

        if (!data.success) {

            alert(
                "同步失敗"
            );

            return;

        }

        document
        .getElementById(
            "openCase"
        )
        .style.display =
        "none";
        
        document
        .getElementById(
            "rewardBox"
        )
        .style.display =
        "block";
        
        document
        .getElementById(
            "rewardImage"
        )
        .src =
        reward.image;
        
        document
        .getElementById(
            "rewardName"
        )
        .textContent =
        `🎉 恭喜獲得 ${reward.name}`;

    }
);

document
.getElementById(
    "backShop"
)
.onclick=()=>{

window.location.href=
"shop.html";

};

function createRoll(reward) {

    const roll =
        document.getElementById(
            "caseRoll"
        );

    roll.innerHTML = "";

    const ids =
        Object.keys(items);

    // 前面 60 個亂數

    for (
        let i = 0;
        i < 60;
        i++
    ) {

        const randomId =
            ids[
                Math.floor(
                    Math.random() *
                    ids.length
                )
            ];

        const item =
            items[randomId];

        addItem(
            roll,
            item
        );

    }

    // 中獎物放第61個

    addItem(
        roll,
        reward
    );

    // 後面再補20個

    for (
        let i = 0;
        i < 20;
        i++
    ) {

        const randomId =
            ids[
                Math.floor(
                    Math.random() *
                    ids.length
                )
            ];

        const item =
            items[randomId];

        addItem(
            roll,
            item
        );

    }

}

function addItem(
    roll,
    item
) {

    const div =
        document.createElement(
            "div"
        );

    div.className =
        "case-item";

    div.innerHTML = `

        <img
        src="${item.image}">

        <p>

            ${item.name}

        </p>

    `;

    roll.appendChild(
        div
    );

}

function playAnimation() {

    const roll =
        document.getElementById(
            "caseRoll"
        );

    let speed =
        18;

    const timer =
        setInterval(() => {

            roll.scrollLeft +=
                speed;

        }, 16);

    setTimeout(() => {

        clearInterval(
            timer
        );

    }, 3000);

}
