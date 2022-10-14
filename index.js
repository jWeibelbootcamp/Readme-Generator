const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const markdown = require('./generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'Provide a repository name.',
        name: 'title',
        validate: answer => {if (answer !== '') {
            return true; 
        } return 'title is required.'
    }
    },
    {
        type: 'input',
        message: 'URL for the project.',
        name: 'URL',
        default: 'no project URL available.'
        // validate: answer => {
        //     const pass = answer.match(/^https?:\/\/$/)
        //     console.log(pass);
            // if (pass) {
            //     return true;
            // } return 'valid URL address starting with https or http is required.'
        // }
    },
    {
        type: 'input',
        message: 'Description of the project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide any installation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Instructions for how to use the application.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What resources contributed to the project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'How was the project tested?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'GitHub user name?',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'Enter your email address.',
        name: 'email',
    },
    {
        type: 'list',
        message: 'What license is authorized?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL', 'None'],
        // filter(value) {
        //     return value.toLowerCase();
        // }
    }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(path.join(__dirname, '/dist/', fileName), data, function (err) {
        if (err) {
            console.log('Error saving file.')
        } else {
            console.log(data);
            console.log('Success!')
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions) 
        .then( (answers) => {
            writeToFile('README.md', markdown(answers));
            console.log(answers);
            return answers;
        })
        .catch( (error) => {
            console.log(error);
        });
};

// Function call to initialize app
init();
