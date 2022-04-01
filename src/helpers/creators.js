export const createSection = ({ className }) => {
    const section = document.createElement('div');
    if (className)
        section.className = className
    return section
}

export const creatButton = ({ className, type, id }) => {
    const button = document.createElement('button');
    if (className)
        button.className = className
    if (id)
        button.id = id
    // firstButton.innerHTML = "Users"
    return button;
};

export const createDiv = ({ className, innerHTML }) => {
    const div = document.createElement('div');
    if (className)
        div.className = className
    if (innerHTML)
        div.innerHTML = innerHTML
    return div
}


export const createInput = ({ }) => {

}