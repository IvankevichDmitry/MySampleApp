import { createDiv } from "../../helpers/creators"

const createSettingsPage = () => {
    const settingsPage = createDiv({
        className: 'settingsPage',
        id: "settingsPage",
        innerHTML: "<h1>Settings</h1>"
    })

    function creatSwitch() {
        const wrapper = createDiv({
            className: "wrapper",
            innerHTML: "<p>Theme Switcher</p>"
        })
  
        const switchButton = createDiv({
            className: "switch",
        })
        const usalyDiv = createDiv({ className: "free"})

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

// 3.
export default createSettingsPage