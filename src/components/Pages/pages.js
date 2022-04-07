// ПРАВАЯ ЧАСТЬ ОСНОВНОГО СОДЕРЖАНИЯ

// 1.
import { createDiv } from "../../helpers/creators"
import createUserPage from "./userPage"

// 2.
const createPages = () => {
    const pages = createDiv({
        className: 'pages',
        id: "pages"
    })

    

    pages.addEventListener("load", pages.appendChild(createUserPage()))
    return pages
}

// 3.
export default createPages