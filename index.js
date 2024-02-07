console.log("Hello World!");

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = 


    inquirer.
        prompt([
            {
                type: 'input',
                message: "What is your Github Username?",
                name: 'username',
            },
            {
                type: 'input',
                message: "What is your email address?",
                name: 'githubLink',
                // Use mark over to cover the email address
            },
            {
                type: 'input',
                message: "What is the title of your project?",
                name: 'title',
            },
            {
                type: 'input',
                message: "What are the sections of your project?",
                name: 'sections',
                // Should I include a how many sections are there in your project?
            },
            {
                type: 'input',
                message: "Write a short description about your project.",
                name: 'description',
            },
            {
                type: 'input',
                message: "What are the table of contents?",
                name: 'tableOfContents',
            },
            {
                type: 'input',
                message: "What are the installation instructions for your project?",
                name: 'installation',
            },
            {
                type: 'input',
                message: "What is the usage for this project?",
                name: 'usageInformation',
            },
            {
                type: 'list',
                message: "Which license do you prefer for this project? Select one.",
                name: 'license',
                choices: ['MIT', new inquirer.Separator(), 'Cat'],
            
            },
            {
                type: 'input',
                message: "How can users contribute to the project?",
                name: 'contributionGuidelines',
            },
            {
                type: 'input',
                message: "Are you conducting any tests?",
                name: 'teststst',
            },
            {
                type: 'input',
                message: "do you have any other questions?",
                name: 'questionsss',
            },
        ])
        .then((data) => {
            
            const readmeHeader = `${data.title}`;
            console.log(data);
            (err) => err ? console.log(err) : console.log("Success");
        });

        console.log("Your responses have been logged!"),

questions.forEach(response => console.log(questions.data))

// for (const value of questions) => {
//     console.log(value);
//     };

const fileTitle = fs.path(`${title}`)
// Part of writing title to title of readme document


const licenseBadge = fs.path(`${licenseChoice}`)

const topOfReadMePage = 
    `${licenseBadge}
    
    This application and/or project is covered under the ${licenseBadge} license.`


const createUsername = questions.username;
// You will create at least 1 other way to write this all out
console.log(createUsername);

const createGitHubLink = questions.githubLink;
console.log(createGitHubLink);
const createUserEmail = questions.description;

//<p>Top of ReadMe</p>

//<p>Questions</p>
const readmeHeader = 
    `${title}`;

const readmeSections = 
    `Description: 
    ${description}

    **Table of Contents**:
    ${tableOfContents}

    Installation:
    ${installation}

    Usage:
    ${usageInformation}

    **License**:
    This project is covered under the ${license} license.

    Contribution Guidelines:
    ${contributionGuidelines}

    Testing:
    ${teststst}
    
    Questions:
    ${questions}
    ${contributingUser}`;


// PLace this all in the Questions seciton
const contributingUser = 
    `My GitHub username is ${createUsername}. \n
    You can find my GitHub here: ${createGitHubLink}.\n
    You can feel free to contact me at the following e-mail address: ${createUserEmail}.\n
    Feel free to reach out with any questions that you might have about this README Generator project.\n`

;

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

//function call to initialize program
init();


//const inquirer = require('inquirer'); // ReadMe Title . MD // App's Purpose // How to Install It // How to Report Issues // How to make contributions

fs.appendFile(`${fileTitle}.MD,`)