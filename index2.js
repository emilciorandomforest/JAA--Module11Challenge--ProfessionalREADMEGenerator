console.log("Hello World!");

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./starter/utils/generateMarkdown');

//const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user

const questions =
    inquirer.
        prompt([
            {
                type: 'input',
                message: "What is your Github Usehhrname?",
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
            const fileTitle = `Readme.md`;
            fs.writeFile(fileTitle, generateMarkdown(data),  
            (err) => err ? console.log(err) : console.log("You have created your project's README! Congratulations!")
            )
        });

// function to initialize program
function init() {
    questions;
}

//function call to initialize program
init();    