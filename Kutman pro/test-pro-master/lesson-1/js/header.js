const btnBurger = document.querySelector("#button")

btnBurger.onclick = () => {
    if(btnBurger.style.background = "#8a2be2") {
        btnBurger.style.background = "blue"
    }
}

const btnZakaz = document.querySelector("#button-zakaz")
const outlineBlock = document.querySelector(".content-outline")
const btnEND = document.querySelector(".btn-zakaz-end")

btnZakaz.onclick = () => {
    // outlineBlock.classList.add('content-outline')
    outlineBlock.style.display = "block"
}

btnEND.onclick = () => {
    outlineBlock.style.display = "none"
}