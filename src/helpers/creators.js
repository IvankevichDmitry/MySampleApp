// ФУНКИЦИИ КОТОРЫЕ СОЗДАЮТ ТЕГИ НА СТРАНИЦЕ

export const createSection = ({ className }) => {
    const section = document.createElement('div');
    if (className)
        section.className = className
    return section
}

export const creatButton = ({ className, type, id, clickFn, clickColor}) => {
    const button = document.createElement('button');
    if (className)
        button.className = className
    if (id)
        button.id = id
    if (clickFn)
       button.addEventListener("click", clickFn)
    if (clickColor)
    button.addEventListener("click", clickColor)
    return button;
};

export const createDiv = ({ className, innerHTML, id, appendChildElement}) => {
    const div = document.createElement('div');
    if (className)
        div.className = className
    if (innerHTML)
        div.innerHTML = innerHTML
    if (id)
        div.id = id
    if (appendChildElement)
        div.appendChild(appendChildElement)
    return div
}



// export const createInput = ({ }) => {
// }