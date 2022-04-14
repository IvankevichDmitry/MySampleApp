import { createDiv, creatInput } from "../../helpers/creators";
import { creatButton } from "../../helpers/creators";


// Создаем форму
export function addForm() {
    const createFormDiv = createDiv({
        className: "createFormDiv"
    })
    userPage.appendChild(createFormDiv)

    const buttonAddUsers = creatButton({
        className: "buttonAddUsers",
        id: "buttonAddUsers",
        clickFn: createForm
    });
    userPage.appendChild(buttonAddUsers)

    function createForm () {
        const FormDiv = document.querySelector('.createFormDiv');
        FormDiv.innerHTML = "";

        const createFormAddUsers = createDiv({
            className: "creatFormAddUsers",
        });
        createFormDiv.appendChild(createFormAddUsers)
    
        const form = document.createElement('form')
        form.id = "form"
        form.innerHTML = "<p>Enter a new user</p>"
        createFormAddUsers.appendChild(form)

        const createNameInput = creatInput({
            type: "text",
            id: "name",
            className: "name",
            name: "Name",
        });
    
        const createMailInput = creatInput({
            type: "text",
            id: "mail",
            className: "mail",
            name: "email"
        })

        const buttonInput = creatInput({
            type: "submit",
            value: "Добавить",
            className: "submit"
        })

        form.appendChild(createNameInput)
        createNameInput.before("Name")
        form.appendChild(createMailInput)
        createMailInput.before("Mail")
        form.appendChild(buttonInput)

       formProcessing()
        };  


        function formProcessing() {
            const form = document.getElementById('form');
            form.addEventListener("submit", formSend);

            async function formSend(event) {
                  event.preventDefault();

                  let name = form.name.value
                  let email = form.email.value

                  let obj = {
                      name: name,
                      email: email
                  };
           
            let response = await fetch("http://localhost:5555/users", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                  },
                body: JSON.stringify(obj)
            });
                if(response.ok) {
                 let result = await response.json();
                 console.log(result)
                 form.reset()
                }
            }
        }
    
};

