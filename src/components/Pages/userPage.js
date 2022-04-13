import { createDiv, creatInput } from "../../helpers/creators";
import { creatButton } from "../../helpers/creators";
import { animationLine } from "../../helpers/animation";

const createUserPage = () => {
    const userPage = createDiv({
        className: 'userPage',
        id: "userPage", 
        appendChildElement: animationLine()
    })

    async function downloadUsers() {
        const response = await fetch("http://localhost:5555/users");
        const arr = await response.json();

        userPage.innerHTML = ""
        
                                const createTitle = createDiv({
                                    innerHTML: "<h2>Users</h2>"
                                });
                                userPage.appendChild(createTitle)

                                        const createFormAddUsers = createDiv({
                                            className: "creatFormAddUsers",
                                            innerHTML: "<p>Enter a new user</p>"
                                        });
                                        userPage.appendChild(createFormAddUsers)

                                        const createNameInput = creatInput({
                                            type: "text",
                                            id: "name",
                                            className: "name",
                                            text: "Name"
                                        });

                                        console.log(createNameInput)

                                        const createMailInput = creatInput({
                                            type: "text",
                                            id: "mail",
                                            className: "mail"
                                        })
                                        createFormAddUsers.appendChild(createNameInput)
                                        createNameInput.before("Name")
                                        createFormAddUsers.appendChild(createMailInput)
                                        createMailInput.before("Mail")

                    function createUserInform(id, fullName, email) {

                    const createUserArea = createDiv({
                        id: id,
                        className: `userInformation ${id}`,
                    });
                    
                    // Users в createUserArea
                    const user = createDiv({
                        id: id,
                        className: `user${id}`,
                        innerHTML: `<p>Users: ${id}</p>`
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

    
        for (let i=0; i < arr.length; i++) {
            createUserInform(arr[i].id, arr[i].name, arr[i].email)
          };
    };
    
    userPage.addEventListener("load", downloadUsers())

    return userPage

};

// 3.
export default createUserPage