// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}

    ### Project URL: ${data.URL} 

    ## Table of Contents
    - [Project Description](#description)
    - [Installation Instructions](#installation)
    - [Usage Instructions](#usage)
    - [Contributing Resources](#contribution)
    - [Testing Methods](#test)
    - [GitHub User Name](#gitHub)
    - [Email Address](#email)
    - [Licensing](#license)

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

    ## Licensing
    ${data.license}


`;
}

module.exports = generateMarkdown;
