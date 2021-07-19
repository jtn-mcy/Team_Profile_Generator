[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
# Team_Profile_Generator
Use a Node.js application to create a team of employees on a software engineering team and an HTML page to display their information!

## Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

## Description

The user runs index.js and fills out prompts which include team name and filling out a roster of a manager, engineers, and interns.  There is no maximum amount of employees the user can create.  The user can also run tests to verify that the class.js contains classes that will throw if given incorrect arguments.  Once the user has completed all the prompts, they can select the option to exit and create the HTML file and it will be created in the ./dist/ folder with the filename named after their team.

![Sample HTML](.\assets\readmeScreenshot.png)

## Installation

[Github Link](https://github.com/NguyenJohnnyT/Team_Profile_Generator) 

[Author Github Profile](https://github.com/NguyenJohnnyT)

## Usage

Install node.js, the inquirer and jest packages from npmjs.com.  Clone the folder from the repository to the desktop and in the terminal, run index.js.  Answer a series of prompts to create a team and, when finished, select the create HTML option.  The HTML file will be created in the ./dist/ folder with the teamname as the filename.

## License

This application is licensed under [WTFPL]((http://www.wtfpl.net/about/)).

## Contributors

Anyone can contribute to this project.

## Tests

Use jest to run tests on the employee, engineer, intern, and manager class. In the terminal, access the team_profile_generator folder and enter 'npm run test'.  A series of tests will run and hopefully pass.

## Questions
Have a question? Please email me at johnnytrucnguyen@gmail.com