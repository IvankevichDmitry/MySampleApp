// Часть 1. Создаем на странице содержание с помощью JS в index.html в тег div.

// 1. Импорты модулей с содержанием
// Шапка
import {creatHeader, createlogopage, createinfName} from './Header/header'
// Содержание
import {creatSection, createMenu, createContent} from './Section/section'
import {creat1Button, creat2Button} from './Section/leftSection'

// 2. Ищем на странице div, куда будем помещать все импорты.
let root = document.getElementById('root');

// 3. Создаем функцию, которая вставляет на страницу все модули.
const createDOM = () => {
  //Шапка
  const header = creatHeader()
  const logo = createlogopage()
  const informName = createinfName()
  
  // Содержание
  const section = creatSection()
  const menu = createMenu()
  const content = createContent()
  const menuButton1 = creat1Button()
  const menuButton2 = creat2Button()


  root.appendChild(header)
  header.appendChild(logo)
  header.appendChild(informName)

  
  root.appendChild(section)
  section.appendChild(menu)
  section.appendChild(content)
  menu.appendChild(menuButton1)
  menu.appendChild(menuButton2)
}

// 4. Запускаем функцию
createDOM()


