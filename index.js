let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let total = count + " - "
    saveEl.textContent += total
    countEl.textContent = 0
    count = 0
}
