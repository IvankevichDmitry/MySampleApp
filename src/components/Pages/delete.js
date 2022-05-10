import createUserPage from "./userPage";


export function deleteID(id) {


    function apdatePages(createFn) {
        const callback = createFn
        return () => {
            const pages = document.getElementById('pages');
            pages.innerHTML = "";
            pages.appendChild(callback());
        }
    }

    fetch('http://localhost:5555/users/' + id, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(res => apdatePages(createUserPage)())  

}