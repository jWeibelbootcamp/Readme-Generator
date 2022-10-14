// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Also renders license links
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![MIT](https://img.shields.io/badge/License-MIT-blue)';
  } else if (license === 'Apache 2.0') {
    return '[![Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-green)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL') {
    return '![GPL](https://img.shields.io/badge/License-GPL-red)';
  } else {
    return '';
  }
} 

function renderURLLink(URL) {
  if (URL === 'no project URL available.') {
    return '';
  } else {
    return `[Project URL](${URL})`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## Licensing 
${license}`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

### ${renderURLLink(data.URL)} 

## Table of Contents
- [Project Description](#description)
- [Installation Instructions](#installation)
- [Usage Instructions](#usage)
- [Contributing Resources](#contribution)
- [Testing Methods](#test)
- [GitHub User Name](#gitHub)
- [Email Address](#email)


## Project Description
${data.description}

## Installation Instructions
${data.installation}

## Usage Instructions
${data.usage}

## Contributing Resources
${data.contribution}

## Testing Methods
${data.test}

## GitHub User Name
${data.gitHub}

## Email Address
${data.email}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
