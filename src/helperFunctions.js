let employeeCardsEl = ``

const generateHtmlFile = (templateObject) => { //arr = [cardTemplate1, cardTemplate2, ...]
    generateManagerCard(templateObject);
    generateEngineerCards(templateObject);
    generateInternCards(templateObject);
    htmlFile = generateHTML(templateObject, employeeCardsEl)
    return htmlFile
}

//* HTML GENERATOR
const generateHTML = (templateObject, employeeCards) => {
    //Generate HTML
    generateTeamHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${templateObject.teamName}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid text-center p-5 bg-info bg-gradient">
            <h1 class="display-3 text-white">My Team</h1>
        </div>

        <div class='container'>
            <div class = 'p-3 row flex-wrap' id='employeeCard'>
                ${employeeCards}
            </div>  
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </body>
    </html>
    `
    return generateTeamHTML
}

//*CARD GENERATORS
const generateManagerCard = (templateObject) => {
    let template = `
                <div class="card m-2 p-0" style="width: 18rem; ">
                    <div class='bg-success p-4'>
                        <h4 class="card-title">${templateObject.manager.name}</h4>
                        <h5 class="card-title">${templateObject.manager.position}</h5>
                    </div>
                    <div class="card-body bg-white">
                        <p class="card-text ">
                            <p class='row flex-column'>
                                <p class='col p-3 m-0 border'>ID: ${templateObject.manager.id}</p>
                                <p class='col p-3 m-0 border'><a href='mailto:${templateObject.manager.email}' style="text-decoration:none">${templateObject.manager.email}</a></p>
                                <p class='col p-3 m-0 border'>Office Number: ${templateObject.manager.office}</p>
                            </p>
                        </p>
                    </div>
                </div>
`
    // console.log('manager card template \n', template)
    employeeCardsEl = employeeCardsEl.concat(template)
}

const generateEngineerCards = (templateObject) => {
    if (!templateObject.eng) {
        return
    }
    templateObject.eng.forEach((instance) => {
        let gitHubURL = instance.getGithubURL();
        let template = `
                    <div class="card m-2 p-0" style="width: 18rem; ">
                        <div class='bg-success p-4'>
                            <h4 class="card-title">${instance.name}</h4>
                            <h5 class="card-title">${instance.position}</h5>
                        </div>
                        <div class="card-body bg-white">
                            <p class="card-text ">
                                <p class='row flex-column'>
                                    <p class='col p-3 m-0 border'>ID: ${instance.id}</p>
                                    <p class='col p-3 m-0 border'><a href='mailto:${instance.email}' style="text-decoration:none">${instance.email}</a></p>
                                    <p class='col p-3 m-0 border'><a href="${gitHubURL}" style='text-decoration:none;'>Github: ${instance.github}</a></p>
                                </p>
                            </p>
                        </div>
                    </div>
        `;
        // console.log('eng card template \n', template)
        employeeCardsEl = employeeCardsEl.concat(template);
    })
}

const generateInternCards = (templateObject) => {
    if (!templateObject.intern) {
        return
    }
    templateObject.intern.forEach((instance) => {
        let template = `
                    <div class="card m-2 p-0" style="width: 18rem; ">
                        <div class='bg-success p-4'>
                            <h4 class="card-title">${instance.name}</h4>
                            <h5 class="card-title">${instance.position}</h5>
                        </div>
                        <div class="card-body bg-white">
                            <p class="card-text ">
                                <p class='row flex-column'>
                                    <p class='col p-3 m-0 border'>ID: ${instance.id}</p>
                                    <p class='col p-3 m-0 border'><a href='mailto:${instance.email}' style="text-decoration:none">${instance.email}</a></p>
                                    <p class='col p-3 m-0 border'>School: ${instance.school}</p>
                                </p>
                            </p>
                        </div>
                    </div>
        `;
        // console.log('intern card template \n', template)
        employeeCardsEl = employeeCardsEl.concat(template);
    })
}

module.exports = {
    generateHtmlFile //Takes an array of cards and append each card into the HTML id=employeeCard
}