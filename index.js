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
    templateObj.teamName = teamResponse; //add team name
    const managerResponse = await inquirer.prompt(qPrompt.promptManager)
    templateObj.manager = managerResponse; //add manager profile to templateObj manager property
    while (addMoreEmployees) { //continue making employees until addMoreEmployees is false
        const createMore = await inquirer.prompt(qPrompt.promptAddOrExit)
        if (createMore.addOrExit === 'Exit and create HTML file?') {
            addMoreEmployees = false //if false, exit out loop
        } else {
            let newEmployee = await inquirer.prompt(qPrompt.promptEngOrInt) //ask if want to add engineer or intern
            if (newEmployee.engOrInt === 'Add an engineer?') {
                let newEng = await inquirer.prompt(qPrompt.promptEng);
                templateObj.eng = [...templateObj.eng, newEng]; //create engineer and add to templateObj eng property
            } else {
                let newIntern = await inquirer.prompt(qPrompt.promptIntern)
                templateObj.intern = [...templateObj.intern, newIntern] //create intern and add to templateObj intern property
            }
        }
    }
    return console.log('OBJECT for HTML WRITING', templateObj)
}


makeTeam()