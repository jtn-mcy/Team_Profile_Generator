const fs = require('fs');
const inquirer = require('inquirer');
const qPrompt = require('./src/promptQuestions.js')
const generate = require('./src/helperFunctions.js')
const classes = require('./lib/classes.js')

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
    templateObj.teamName = teamResponse.teamName; //add team name

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
                templateObj.eng = [...templateObj.eng, newEngInst]; //create engineer instanceand add to templateObj.eng
            } else {
                let newInternResponse = await inquirer.prompt(qPrompt.promptIntern)
                let newIntInst = new classes.Intern(
                    newInternResponse.internName,
                    newInternResponse.internID,
                    newInternResponse.internEmail,
                    newInternResponse.internSchool
                )
                templateObj.intern = [...templateObj.intern, newIntInst] //create intern instance and add to templateObj.intern
            }
        }
    }

    htmlTemplate = generate.generateHtmlFile(templateObj);  //create html file with the ${teamName} as document title
    fileName = `${templateObj.teamName.split(' ').join('')}.html` //*DONE
    // console.log('htmlTemplate', htmlTemplate)
    fs.writeFile(('./dist/' + fileName), htmlTemplate, (err) => {
        err ? console.error(err) : console.log('html template created!')
    });
}

makeTeam()