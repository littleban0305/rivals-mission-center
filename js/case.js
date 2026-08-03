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
    () => {

        const reward =
            randomItem(
                box.items
            );

        alert(
            `🎉 恭喜獲得 ${reward.name}`
        );

    }
);
