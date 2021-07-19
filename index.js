// const fs = require('fs');
const inquirer = require('inquirer');
// const { Engineer, Intern } = require('./lib/classes.js');
const qPrompt = require('./src/promptQuestions.js')
// const generate = require('./src/helperFunctions.js')
const classes = require('./lib/classes.js')

//Prompt the user a series of questions to create their team
//
let addMoreEmployees = true;
let engCount = 0
let internCount = 0
let templateObj = {
    teamName: '',
    manager: '',
    eng: [],
    intern: [],
}

async function makeTeam () {
    const teamResponse = await inquirer.prompt(qPrompt.promptInit);
    templateObj.teamName = teamResponse; //add team name

    const managerResponse = await inquirer.prompt(qPrompt.promptManager)
    templateObj.manager = new classes.Manager(
        managerResponse.managerName, 
        managerResponse.managerID, 
        managerResponse.managerEmail, 
        managerResponse.managerOffice); //add manager profile to templateObj manager property

    while (addMoreEmployees) { //continue making employees until addMoreEmployees is false
        const createMore = await inquirer.prompt(qPrompt.promptAddOrExit)
        if (createMore.addOrExit === 'Exit and create HTML file?') {
            addMoreEmployees = false //if false, exit out loop
        } else {
            let newEmployee = await inquirer.prompt(qPrompt.promptEngOrInt) //ask if want to add engineer or intern
            if (newEmployee.engOrInt === 'Add an engineer?') {
                // engCount++
                let newEngResponse = await inquirer.prompt(qPrompt.promptEng);
                let newEngInst = new classes.Engineer(
                    newEngResponse.engineerName,
                    newEngResponse.engineerID,
                    newEngResponse.engineerEmail,
                    newEngResponse.engineerGithub 
                    ) 
                templateObj.eng = [...templateObj.eng, newEngInst]; //create engineer and add to templateObj eng property
            } else {
                let newInternResponse = await inquirer.prompt(qPrompt.promptIntern)
                let newIntInst = new classes.Intern(
                    newInternResponse.internName,
                    newInternResponse.internID,
                    newInternResponse.internEmail,
                    newInternResponse.internSchool
                )
                templateObj.intern = [...templateObj.intern, newIntInst] //create intern and add to templateObj intern property
            }
        }
    }
    htmlTemplate = generate.generateHTML(templateObj);  //create html file with the ${teamName} as document title
    fileName = `${templateObj.teamName[0].teamName.split(' ').join('')}.html`
    fs.writeFile(`${templateObj.teamName[0].teamName.split(' ').join('')}.html`, htmlTemplate, (err) => {
        err ? console.error(err) : console.log('html template created!')
    });

    return console.log('OBJECT for HTML WRITING', templateObj)
}


makeTeam()