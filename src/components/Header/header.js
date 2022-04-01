import { createSection, createDiv } from "../../helpers/creators";

const creatHeader = () => {
  const header = createSection({
    className: "header"
  })

  const logo = createDiv({
    className: 'logopage',
    innerHTML: "<img src='img/home.png'>"
  })

  const createName = createDiv({
    className: 'infName',
    innerHTML: "<strong>Дмитрий</strong>"
  })

  header.appendChild(logo)
  header.appendChild(createName)

  return header
}

const header = creatHeader()

export default header

