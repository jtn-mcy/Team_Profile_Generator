//Generate HTML
generateTeamHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Builder</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
    <div class="jumbotron jumbotron-fluid text-center p-5 bg-info bg-gradient">
        <h1 class="display-3 text-white">My Team</h1>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <div class='container'>
        <div class = 'p-3 row flex-wrap' id='employeeCard'>
        </div>  
    </div>
</body>
</html>
`

// Generate Cards
//Employee card
// !figure out how to change ${classAttr} to a subclass attribute
// * Within index.js, answer questions, create file, and then append the card classes
cardTemplate =
`<div class="card m-2 p-0" style="width: 18rem; ">
    <div class='bg-success p-4'>
        <h4 class="card-title">${employeeName}</h4>
        <h5 class="card-title">${employeeTitle}</h5>
    </div>
    <div class="card-body bg-white">
        <p class="card-text ">
            <p class='row flex-column'>
                <p class='col p-3 m-0 border'>${id}</p>
                <p class='col p-3 m-0 border'>${email}</p>
                <p class='col p-3 m-0 border'>${classAttr}</p>
            </p>
        </p>
    </div>
</div>`

const generateHTML = () => {
    return generateTeamHTML
}

const generateCards = (arr) => { //arr = [cardTemplate1, cardTemplate2, ...]
    arr.forEach(function (cardTemplate) {
        document.querySelector('#employeeCard').appendChild(cardTemplate);
    })
}

module.exports = {
    generateHTML, //will create the HTML file
    generateCards //Takes an array of cards and append each card into the HTML id=employeeCard
}