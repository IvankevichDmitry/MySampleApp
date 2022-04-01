// Часть 1. Создаем на странице содержание с помощью JS в index.html в тег div.

// 1. Импорты модулей с содержанием
// Шапка
import header from './components/Header/header'
// Содержание
import createMain from './components/Main/main'

// 2. Ищем на странице div, куда будем помещать все импорты.
let root = document.getElementById('root');

// 3. Создаем функцию, которая вставляет на страницу все модули.
const createDOM = () => {
  root.appendChild(header)
  root.appendChild(createMain())
}

// 4. Запускаем функцию
createDOM()


