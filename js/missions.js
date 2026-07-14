// ==========================
// Rivals Mission Center
// Mission Generator
// ==========================

// 分類容器
const containers = {
    D: document.getElementById("dailyMissionList"),
    W: document.getElementById("weeklyMissionList"),
    L: document.getElementById("levelMissionList"),
    P: document.getElementById("permanentMissionList"),
    C: document.getElementById("csMissionList"),
    O: document.getElementById("otherMissionList")
};

// ==========================
// 建立任務
// ==========================

for (const id in missions) {

    const mission = missions[id];

    const type = id.charAt(0);

    const container = containers[type];

    if (!container) continue;

    const card = document.createElement("div");

    card.className = "mission";

    card.innerHTML = `
        <div>

            <h3>${mission.name}</h3>

            <p>${mission.desc}</p>

            <small>${mission.reward}</small>

        </div>

        <div>

            <button
                class="btn submit-btn"
                data-id="${id}">

                提交證明

            </button>

        </div>
    `;

    container.appendChild(card);

}

// ==========================
// 綁定提交按鈕
// ==========================

document.querySelectorAll(".submit-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const id = btn.dataset.id;

        window.location.href =
            `submit.html?type=mission&id=${id}`;

    });

});
