// Часть 1.1. Создаем Модули который являються шапкой приложения.

// 1. Функция для создания тега шапки
const creatHeader = () => {
    const header = document.createElement('div');
    header.className = 'header'
    return header;
  }

// 2. Функция для создания тега логотипа
  const createlogopage = () => {
    const logopage = document.createElement('div');
    logopage.className = 'logopage'
    logopage.innerHTML= "<img src='img/home.png'>"
    return logopage;
  }

// 3. Функция для создания тега имени
const createinfName = () => {
  const infName = document.createElement('div');
  infName.className = 'infName'
  infName.innerHTML = "<strong>Дмитрий</strong>"
  return infName;
}
  
// 2. Экспорт функции с шапокой старницы, логитопом и имени
export {creatHeader};
export {createlogopage};
export {createinfName}