const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'Provide a repository name.',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description of the project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'URL for the project.',
        name: 'URL',
    },
    {
        type: 'input',
        message: 'Provide any installation instructions.',
        name: 'installation instructions',
    },
    {
        type: 'input',
        message: 'Instructions for how to use the application.',
        name: 'usage information',
    },
    {
        type: 'input',
        message: 'What resources contributed to the project?',
        name: 'contribution guidelines',
    },
    {
        type: 'input',
        message: 'How was the project tested?',
        name: 'test instructions',
    },
    {
        type: 'input',
        message: 'GitHub user name?',
        name: 'gitHub user name',
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
        choices: ['MIT', 'ISC', 'None'],
        filter(value) {
            return value.toLowerCase();
        }
    }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions) 
        .then( (answers) => {
            console.log(answers);
            return answers;
        })
        .catch( (error) => {
            console.log(error);
        });
};

// Function call to initialize app
init();
