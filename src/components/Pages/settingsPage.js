import { createDiv } from "../../helpers/creators"

const createSettingsPage = () => {
    const settingsPage = createDiv({
        className: 'settingsPage',
        id: "settingsPage",
        appendChildElement: wordDownload()
    })

    // Aнимация полосы Загрузки
    function wordDownload() {
        const div1 = createDiv({className: "areaLine"})
        const h3 = document.createElement("h3")
        h3.innerHTML = "Loading pages. Wait, please."
        const div2 = createDiv({className: "lineGradient"})
        div1.appendChild(h3)
        div1.appendChild(div2)
        return div1
    }

    
    return settingsPage
}


// Кнопки цвета
export function clickSeccondButtomColor() {
    const buttonActive1 = document.querySelector(".button:nth-child(1)")
    const buttonActive2 = document.querySelector(".button:nth-child(2)")
    buttonActive1.style.backgroundColor = "";
    buttonActive2.style.backgroundColor = "yellow";
};

// 3.
export default createSettingsPage