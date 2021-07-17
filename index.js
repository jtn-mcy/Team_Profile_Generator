const fm = require('fs');
const inquirer = require('inquirer');
const prompt = require('./src/promptQuestions.js')
const generate = require('./src/helperFunctions.js')
const classes = require('./lib/classes.js')

//Prompt the user a series of questions to create their team
//

console.log(classes);