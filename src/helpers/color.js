// Кнопки цвета при нажатии
export function clickButtomColor() {
    let elements = document.querySelectorAll(".button:hover")
    let arrHover = Array.from(elements)
    let buttonHover = arrHover[0];

    let buttonAll = document.querySelectorAll("button")
    let arrAll = Array.from(buttonAll)
    for (let button of arrAll) {
        if (button == buttonHover) {
            button.style.backgroundColor = "yellow"
        } else {
            button.style.background = ""
        }
    }
};
