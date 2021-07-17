/**
 * Questions:
 * ? User Answers Prompt
 * ! User Exits
 * * User Starts employee creation
 * 
 * ? 1. Enter a team name --> go question 2 ↓
 * ? 2. Enter manager name, id, email, office --> go question 3↓
 * ! 3a. Exit --> Create File ✅
 * * 3b. Create Employee --> go question 4↓.
 * * 4a. Create Engineer --> go question 5 ↓
 * * 4b. Create Intern --> go question 6 ↓
 * ? 5. Engineer => Enter name, email, id, github --> go question 3↑
 * ? 6. Intern => Enter name, email, id, school --> go question 3↑
 **/

//Question 1
const promptInit = [
    {
        type: 'input',
        message: 'Enter a team name.',
        name: 'teamName',
        default: 'UCBerkley Extension Bootcamp',
    }
]


//Question 2
const promptManager = [
    {
        type: 'input',
        message: 'Enter Manager\'s Name',
        name: 'managerName'
    },
    {   
        type: 'number',
        message: 'Enter Manager ID',
        name: 'managerID'
    },
    { 
        type: 'email',
        message: 'Enter Manager email',
        name: 'managerEmail'
    },
    {
        type: 'number',
        message: 'Enter Manager office number',
        name: 'managerOffice'
    }
]

//Question 3a/b
const promptAddOrExit =[ 
    {
        type: 'list',
        choices: ['Add an employee?', 'Exit and create HTML file?'],
        name: 'addOrExit'
    }
]

//Question 4a/b
const promptEngOrInt = [
    {
        type:'list',
        choices:['Add an engineer?', 'Add an intern?'],
        name: 'engOrInt',
    }
]

//Question 5
const promptEng = [
    {
        type: 'input',
        message: 'Enter Engineer\'s Name',
        name: 'engineerName'
    },
    {   
        type: 'number',
        message: 'Enter Engineer ID',
        name: 'engineerID'
    },
    { 
        type: 'email',
        message: 'Enter Engineer email',
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: 'Enter Engineer github username',
        name: 'engineerGithub'
    }
]

//Question 6
const promptIntern = [
    {
        type: 'input',
        message: 'Enter Intern\'s Name',
        name: 'internName'
    },
    {   
        type: 'number',
        message: 'Enter Intern ID',
        name: 'internID'
    },
    { 
        type: 'email',
        message: 'Enter Intern email',
        name: 'internEmail'
    },
    {
        type: 'input',
        message: 'Enter Intern\'s school',
        name: 'internSchool'
    }
]

module.exports = {
    promptInit,
    promptManager,
    promptAddOrExit,
    promptEngOrInt,
    promptEng,
    promptIntern,
}