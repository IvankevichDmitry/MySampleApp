import { createDiv, creatInput } from "../../helpers/creators";
import { creatButton } from "../../helpers/creators";
import { animationLine } from "../../helpers/animation";
import { addForm } from "./userForm";

const createUserPage = () => {
    const userPage = createDiv({
        className: 'userPage',
        id: "userPage", 
        appendChildElement: animationLine()
    })

    async function downloadUsers() {
        const response = await fetch("http://localhost:5555/users");
        const data = await response.json()
        const users = data.reverse()

        userPage.innerHTML = ""
        
                    const createTitle = createDiv({
                    innerHTML: "<h2>Users</h2>"
                    });
                    userPage.appendChild(createTitle)

                    // Кнопка и форма
                    addForm()

                    // Загрузка пользователей                         
                    function createUserInform(id, fullName, email, ind) {
                    const createUserArea = createDiv({
                        id: id,
                        className: `userInformation ${id}`,
                    });
                    
                    // Users в createUserArea
                    const user = createDiv({
                        id: id,
                        innerHTML: `<p>User: ${ind}</p>`
                    })

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
                
                    // Кнопка Delete в createUserArea
                    function clickDelete(id) {
                   
                    }

                    const buttonDelete = creatButton({
                        className: "deleteBlock",
                        innerHTML: "X",
                        id: id,
                        clickFn: clickDelete(id)
                    })

                    userPage.appendChild(createUserArea);
                    createUserArea.appendChild(user)
                    createUserArea.appendChild(buttonDelete)
                    
                    user.appendChild(wordName);
                    user.appendChild(wordEmail);
                    wordName.appendChild(nameUser);
                    wordEmail.appendChild(emailUser)
                    }

    
        for (let i=0; i < users.length; i++) {
            createUserInform(users[i].id, users[i].name, users[i].email, i+1)
          };
    };
    
    userPage.addEventListener("load", downloadUsers())
    return userPage

};

// 3.
export default createUserPage