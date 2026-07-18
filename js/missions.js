// ==========================
// Rivals Mission Center
// Mission Generator Beta 0.2
// ==========================

let missionPlayer =
    JSON.parse(
        localStorage.getItem("playerData")
    );

if (missionPlayer?.username) {

    fetch(
        `${API_URL}?username=${encodeURIComponent(
            missionPlayer.username
        )}`
    )

    .then(res => res.json())

    .then(player => {

        localStorage.setItem(
            "playerData",
            JSON.stringify(player)
        );

    })

    .catch(console.error);

}

// ==========================
// 任務分類容器
// ==========================

const containers = {
    D: document.getElementById("dailyMissionList"),
    W: document.getElementById("weeklyMissionList"),
    L: document.getElementById("levelMissionList"),
    P: document.getElementById("permanentMissionList"),
    C: document.getElementById("csMissionList"),
    O: document.getElementById("otherMissionList")
};

// ==========================
// 建立所有任務
// ==========================

for (const id in missions) {

    const mission = missions[id];

    const type = id.charAt(0);

    const container = containers[type];

    if (!container) continue;

    let buttonText = "提交證明";
let disabled = "";

const status =
    missionPlayer?.missions?.[id];

const today =
    new Date()
    .toISOString()
    .split("T")[0];

if (status === "pending") {

    buttonText = "🟡 審核中";

}

else if (id.startsWith("D")) {

    if (status === today) {

        buttonText = "✅ 已完成";
        disabled = "disabled";

    }

}

else if (
    status === "completed" ||
    status === "approved"
) {

    buttonText = "✅ 已完成";
    disabled = "disabled";

}
    
    const card = document.createElement("div");

    card.className = "mission";

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    card.innerHTML = `

        <div>

            <h3>${mission.icon} ${mission.name}</h3>

            <p>${mission.desc}</p>

            <small>${mission.reward}</small>

        </div>

        <div>

            <button
                class="btn submit-btn"
                data-id="${id}">
            
                ${buttonText}
            
            </button>

        </div>

    `;

    container.appendChild(card);

    requestAnimationFrame(() => {

        card.style.transition = "0.25s";

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";

    });

}

// ==========================
// 空分類提示
// ==========================

Object.values(containers).forEach(container => {

    if (!container) return;

    if (container.children.length === 0) {

        container.innerHTML = `

            <div class="card">

                <p>目前沒有任務。</p>

            </div>

        `;

    }

});

// ==========================
// 提交按鈕
// ==========================

document.querySelectorAll(".submit-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const id = btn.dataset.id;

        const status =
            missionPlayer?.missions?.[id];
        
        if (status === "pending") {
        
            if (confirm("取消申請此任務？")) {
        
                delete player.missions[id];
        
                localStorage.setItem(
                    "playerData",
                    JSON.stringify(player)
                );
        
                location.reload();
        
            }
        
            return;
        
        }
        
        window.location.href =
            `submit.html?type=mission&id=${id}`;

    });

});

// ==========================
// 每日刷新倒數
// ==========================

const resetText = document.getElementById("daily-reset");

if (resetText) {

    function updateCountdown() {

        const now = new Date();

        const tomorrow = new Date();

        tomorrow.setDate(now.getDate() + 1);

        tomorrow.setHours(0, 0, 0, 0);

        const diff = tomorrow - now;

        const h = Math.floor(diff / 1000 / 60 / 60);

        const m = Math.floor(diff / 1000 / 60) % 60;

        const s = Math.floor(diff / 1000) % 60;

        resetText.textContent =
            `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

    }

    updateCountdown();

    setInterval(updateCountdown, 1000);

}

const missionFormBtn =
    document.getElementById(
        "missionFormBtn"
    );

if (missionFormBtn) {

    missionFormBtn.addEventListener(
        "click",
        () => {

            window.open(
                "https://forms.gle/kvrLmooCyYbGAsKP9",
                "_blank"
            );

        }
    );

}
