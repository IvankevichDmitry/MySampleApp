import { createDiv } from "./creators"

// Aнимация полосы Загрузки
export function animationLine() {
    const div1 = createDiv({className: "areaLine"})
    const h3 = document.createElement("h3")
    h3.innerHTML = "Loading pages. Wait, please."
    const div2 = createDiv({className: "lineGradient"})
    div1.appendChild(h3)
    div1.appendChild(div2)
    return div1
}