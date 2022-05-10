// ОСНОВНОЕ СОДЕРЖАНИЕ
// 1.
import { createDiv } from "../../helpers/creators";
import createPages from "../Pages/pages";
import createMenu from "../Menu/menu"

// 2.
const createMain = () => {
    const main = createDiv({
        className: 'main'
    })

    
    let menu = createMenu()
    let pages = createPages()


    main.appendChild(menu)
    main.appendChild(pages)

    return main
}

// 3.
export default createMain