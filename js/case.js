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
