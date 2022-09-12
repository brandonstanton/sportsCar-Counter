let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count + " 🏎️ ";
    incrementBtn.style.backgroundColor = "transparent";
    incrementBtn.style.border = "none";
    incrementBtn.style.outline = "none";
    incrementBtn.style.color = "red";
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
    saveBtn.style.backgroundColor = "transparent";
    saveBtn.style.border = "none";
    saveBtn.style.outline = "none";
    saveBtn.style.color = "green";
}
