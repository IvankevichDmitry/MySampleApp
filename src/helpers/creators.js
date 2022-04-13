// ФУНКИЦИИ КОТОРЫЕ СОЗДАЮТ ТЕГИ НА СТРАНИЦЕ

export const createSection = ({ className }) => {
    const section = document.createElement('div');
    if (className)
        section.className = className
    return section
}

export const creatButton = ({ className, innerHTML, id, style, clickFn, clickColor}) => {
    const button = document.createElement('button');
    if (className)
        button.className = className
    if (id)
        button.id = id
    if (innerHTML)
        button.innerHTML = innerHTML
    if (style)
    button.style.backgroundColor = style
    if (clickFn)
       button.addEventListener("click", clickFn)
    if (clickColor)
    button.addEventListener("click", clickColor)
    // button.addEventListener("click", clickColor(id))
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

export const creatInput = ({type, id, className}) => {
    const input = document.createElement("input");
    if (type)
    input.type = type
    if (id)
    input.id = id
    if (className)
    input.className = className
    return input
}



// export const createInput = ({ }) => {
// }