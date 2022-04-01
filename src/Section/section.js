// Часть 1.1. Создаем Модули который являються основным содержанием приложения.
 
// 1. Создаем основное содержание section
const creatSection = () => {
    const section = document.createElement('div');
    section.className = 'section'
    let heightSection = document.documentElement.clientHeight-100
    section.style.height = heightSection + "px";
    return section;
};

// 2. Создаем левую часть (меню) section
const createMenu = () => {
    const leftMenu = document.createElement('div');
    leftMenu.className = 'leftmenu'
    return leftMenu;
};

// 3. Создаем правую часть (содержание) section
const createContent = () => {
    const rightcontent = document.createElement('div');
    rightcontent.className = 'rightcontent'
    return rightcontent;
};


// 2. Экспорт функции с section, меню и содержанием старницы
export {creatSection};
export {createMenu};
export {createContent};