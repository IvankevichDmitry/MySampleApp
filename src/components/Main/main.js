import { createDiv } from "../../helpers/creators";
import pages from "../Pages/pages";
import menu from "../Menu/menu"


const createMain = () => {
    const main = createDiv({
        className: 'main'
    })

    main.appendChild(menu)
    main.appendChild(pages)


    return main
}

export default createMain