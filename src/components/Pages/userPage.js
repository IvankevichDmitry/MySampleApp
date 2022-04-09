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


// Кнопки цвета
export function clickFirsButtomColor() {
    const buttonActive1 = document.querySelector(".button:nth-child(1)")
    const buttonActive2 = document.querySelector(".button:nth-child(2)")
    buttonActive1.style.backgroundColor = "yellow";
    buttonActive2.style.backgroundColor = "";
};

export function changeMenuButton(id) {
    return (id) => {
        const leftMenu = document.querySelector('.leftmenu')
        const allButtons = leftMenu.querySelectorAll('button')
        allButtons.forEach(btn => btn.classList.remove('active'))
        const newActive = leftMenu.querySelector('#'+id)
        newActive.classList.add('active')
    }
}

// 3.
export default createUserPage