// ЛЕВОЕ МЕНЮ И КНОПКИ
// 1.
import { createSection, creatButton } from "../../helpers/creators";

// 2.
const createMenu = () => {

    const menu = createSection({
        className: 'leftmenu'
    })
    const usersButton = creatButton({
        className: 'button',
        // img: "<img src='../../img/users.png'>"
    })

    const settingButton = creatButton({
        className: "button"
    })

    menu.appendChild(usersButton)
    menu.appendChild(settingButton)

    return menu;
};

// 3.
export default createMenu