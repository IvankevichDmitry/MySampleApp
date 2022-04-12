import { createDiv } from "../../helpers/creators";

const createUserPage = () => {
    const userPage = createDiv({
        className: 'userPage',
        id: "userPage", 
        appendChildElement: wordDownload()
    })

    // Aнимация полосы Загрузки
    function wordDownload() {
        const div1 = createDiv({className: "areaLine"})
        const h3 = document.createElement("h3")
        h3.innerHTML = "Loading pages. Wait, please."
        const div2 = createDiv({className: "lineGradient"})
        div1.appendChild(h3)
        div1.appendChild(div2)
        return div1
    }

    async function downloadUsers() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const arr = await response.json();

        userPage.innerHTML = ""
        
                    const createTitle = createDiv({
                        innerHTML: "<h2>Users</h2>"
                    });

                    userPage.appendChild(createTitle)

                    function createUserInform(id, fullName, email) {
                    
                        const createUserArea = createDiv({
                        id: id,
                        className: `userInformation ${id}`,
                        innerHTML: `<p>Users: ${id}</p>`
                    });

                    const wordName = createDiv({
                        innerHTML: "<p>Name: </p>",
                        className: "blockName"
                    })

                    const wordEmail = createDiv({
                        innerHTML: "<p>Email: </p>",
                        className: "blockEmail"
                    })
                
                    const nameUser = createDiv({
                        innerHTML: fullName,
                        className: `username`
                    });
                
                    const emailUser = createDiv({
                        innerHTML: email,
                        className: `useremail`
                    });
                
                    userPage.appendChild(createUserArea);
                    createUserArea.appendChild(wordName);
                    createUserArea.appendChild(wordEmail);
                    wordName.appendChild(nameUser);
                    wordEmail.appendChild(emailUser)
                    }
    
        for (let i=0; i < arr.length; i++) {
            createUserInform(arr[i].id, arr[i].name, arr[i].email)
          };
    };
    
    userPage.addEventListener("load", downloadUsers())

    return userPage
}


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

// 3.
export default createUserPage