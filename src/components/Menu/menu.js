// ЛЕВОЕ МЕНЮ И КНОПКИ
// 1.
import { createSection, creatButton } from "../../helpers/creators";

import createSettingsPage from "../Pages/settingsPage";
import createUserPage from "../Pages/userPage";

import { clickFirsButtomColor } from "../Pages/userPage";
import { clickSeccondButtomColor } from "../Pages/settingsPage";

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
        clickFn: apdatePages(createUserPage),
        clickColor: clickFirsButtomColor
    })

    const settingButton = creatButton({
        className: "button button2",
        clickFn: apdatePages(createSettingsPage),
        clickColor: clickSeccondButtomColor
    })

    menu.appendChild(usersButton)
    menu.appendChild(settingButton)

    return menu;
};


// 3.
export default createMenu



 // img: "<img src='../../img/users.png'>"