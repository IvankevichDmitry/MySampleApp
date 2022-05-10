import { createDiv } from "../../helpers/creators";

const createInformationPage = () => {
    const informtionPage = createDiv({
        className: "informationPage",
        id: "informationPage",
        innerHTML: '<h1>Informtion about Web App: <br> "My personal contact book"</h1>'
    })

    const informationText = createDiv({
        className: "informationText",
        id: "inforamitonText",
        innerHTML: "<p>Hello everyone who is viewing this page. <br> This is one of my first web applications. <br> In this application, I use a pure JavaScript component approach. <br> I'm already learning React and Redux to write better and better code. <br>  Thank you.</p>"
    })

    const informtionTechnology = createDiv({
        className: "informationTechnology",
        id: "informationTechnology",
        innerHTML: `
         Technology: <br> 
                *HTML, <br>
                *CSS,  <br>
                *Javascript, <br>
                <br>
        Instruments: <br> 
                *React, <br>
                *NodeJS with npm <br>
                *JSON <br>
                *JOSN Server localhost with user data in db.json file <br>
        `
    })

    informtionPage.appendChild(informationText)
    informtionPage.appendChild(informtionTechnology)

    return informtionPage
}

export default createInformationPage