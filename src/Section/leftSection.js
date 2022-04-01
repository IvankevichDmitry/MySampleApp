// 2. Заполняем левую часть section

// 2.1 Создаем кнопки по шаблону Class
const creat1Button = () => {
    const firstButton = document.createElement('button');
    firstButton.className = 'button'
    firstButton.innerHTML = "Users"
    return firstButton;
};

const creat2Button = () => {
    const secondButton = document.createElement('button');
    secondButton.className = 'button'
    secondButton.innerHTML = "Settings"
    return secondButton;
};

export {creat1Button};
export {creat2Button};