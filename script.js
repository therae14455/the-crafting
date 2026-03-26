let wood = 0;
let stone = 0;
let iron = 0;

let axe = 0;
let pickaxe = 0;

function updateUI() {
    document.getElementById("wood").innerText = wood;
    document.getElementById("stone").innerText = stone;
    document.getElementById("iron").innerText = iron;
    document.getElementById("axe").innerText = axe;
    document.getElementById("pickaxe").innerText = pickaxe;
}

function gatherWood() {
    wood += 1 + axe;
    updateUI();
}

function gatherStone() {
    stone += 1 + pickaxe;
    updateUI();
}

function gatherIron() {
    iron += 1;
    updateUI();
}

function craftAxe() {
    if (wood >= 10 && stone >= 5) {
        wood -= 10;
        stone -= 5;
        axe++;
    } else {
        alert("Not enough resources!");
    }
    updateUI();
}

function craftPickaxe() {
    if (wood >= 15 && stone >= 10 && iron >= 5) {
        wood -= 15;
        stone -= 10;
        iron -= 5;
        pickaxe++;
    } else {
        alert("Not enough resources!");
    }
    updateUI();
}

updateUI();
