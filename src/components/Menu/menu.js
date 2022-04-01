import { createSection, creatButton } from "../../helpers/creators";


const createMenu = () => {

    const menu = createSection({
        className: 'leftmenu'
    })

    const usersButton = creatButton({
        className: 'button'
    })

    const settingButton = creatButton({
        className: "button"
    })

    menu.appendChild(usersButton)
    menu.appendChild(settingButton)

    return menu;
};

const menu = createMenu()


export default menu