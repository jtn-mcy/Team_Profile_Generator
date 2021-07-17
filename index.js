// const fm = require('fs');
const inquirer = require('inquirer');
const qPrompt = require('./src/promptQuestions.js')
// const generate = require('./src/helperFunctions.js')
// const classes = require('./lib/classes.js')

//Prompt the user a series of questions to create their team
//
inquirer
    .prompt(
        qPrompt.promptInit,
        qPrompt.promptManager
    )
    .then((response) => {
        console.log(response);
    })