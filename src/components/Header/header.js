// ВВЕРХ САЙТА
// 1.
import { createSection, createDiv } from "../../helpers/creators";

// 2.
const creatHeader = () => {
  const header = createSection({
    className: "header"
  })

  const logo = createDiv({
    className: 'logopage',
    innerHTML: "<img src='img/1.png'>"
  })

  const createName = createDiv({
    className: 'infName',
    innerHTML: "<strong>My personal contact book <br> <p>  Be sure to look at the information about the project (3 button in the menu)</p></strong>"
  })

  header.appendChild(logo)
  header.appendChild(createName)

  return header
}

// 3.
export default creatHeader

