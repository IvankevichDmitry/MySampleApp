import { createRef } from "react/cjs/react.production.min"
import { createDiv } from "../../helpers/creators"
import { creatButton } from "../../helpers/creators"
import { creatInput } from "../../helpers/creators"

const createSettingsPage = () => {
    const settingsPage = createDiv({
        className: 'settingsPage',
        id: "settingsPage",
       
    })

    function creatSwitch() {
        const wrapper = createDiv({
            className: "wrapper",
            innerHTML: "<h1>Theme Switcher</h1>"
        })
  
        const switchButton = createDiv({
            className: "switch",
        })

        const usalyDiv = createDiv({
            className: "free",
        })

        let input = document.createElement("input")
        input.type = "checkbox"
        input.name = "switch"
        input.id = "switchMode2"

        settingsPage.appendChild(wrapper);
        wrapper.appendChild(switchButton)
        switchButton.appendChild(input)
        switchButton.appendChild(usalyDiv)
    
        function createThemeColorPage() {
             let theme = document.getElementById("theme")
    
             if (theme.getAttribute("href")==="style.css") {
                 theme.href = "dark-theme.css"
             } else {
                 theme.href = "style.css"
             
            }
        }

        input.addEventListener("click", createThemeColorPage);
    }
    
    
    creatSwitch()

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