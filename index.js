// const fm = require('fs');
const inquirer = require('inquirer');
const qPrompt = require('./src/promptQuestions.js')
// const generate = require('./src/helperFunctions.js')
// const classes = require('./lib/classes.js')

//Prompt the user a series of questions to create their team
//
let addMoreEmployees = true;
let templateObj = {
    teamName: '',
    manager: '',
    eng: [],
    intern: [],
}

async function makeTeam () {
    const teamResponse = await inquirer.prompt(qPrompt.promptInit);
    console.log(teamResponse);
    templateObj.teamName = teamResponse;
    const managerResponse = await inquirer.prompt(qPrompt.promptManager)
    console.log(managerResponse)
    templateObj.manager = managerResponse;
    while (addMoreEmployees) {
        const createMore = await inquirer.prompt(qPrompt.promptAddOrExit)
        if (createMore.addOrExit === 'Exit and create HTML file?') {
            addMoreEmployees = false
        } else {
            let newEmployee = await inquirer.prompt(qPrompt.promptEngOrInt)
            if (newEmployee.engOrInt === 'Add an engineer?') {
                let newEng = await inquirer.prompt(qPrompt.promptEng);
                templateObj.eng = [...templateObj.eng, newEng]; 
            } else {
                let newIntern = await inquirer.prompt(qPrompt.promptIntern)
                templateObj.intern = [...templateObj.intern, newIntern]
            }
        }
    }
    return console.log('OBJECT for HTML WRITING', templateObj)
}


makeTeam()