// ЛЕВОЕ МЕНЮ И КНОПКИ
// 1.
import { createSection, creatButton } from "../../helpers/creators";

import createSettingsPage from "../Pages/settingsPage";
import createUserPage from "../Pages/userPage";
import createInformationPage from "../Pages/informationPage";

import { clickButtomColor } from "../../helpers/color";

// 2.
const createMenu = () => {

    const menu = createSection({
        className: 'leftmenu'
    })

    function apdatePages(createFn) {
        const callback = createFn
        return () => {
            const pages = document.getElementById('pages');
            pages.innerHTML = "";
            pages.appendChild(callback());
        }
    }
     

    const usersButton = creatButton({
        className: 'button button1',
        id: "usersButton",
        style: "yellow",
        clickFn: apdatePages(createUserPage),
        clickColor: clickButtomColor,
    })

    const settingButton = creatButton({
        className: "button button2",
        id: "settingsButton",
        clickFn: apdatePages(createSettingsPage),
        clickColor: clickButtomColor
    })

    const informationButton = creatButton({
        className: "button button3",
        id: "informationButton",
        clickFn: apdatePages(createInformationPage),
        clickColor: clickButtomColor
    })

    menu.appendChild(usersButton)
    menu.appendChild(settingButton)
    menu.appendChild(informationButton)
    return menu;
};


// 3.
export default createMenu



 // img: "<img src='../../img/users.png'>"