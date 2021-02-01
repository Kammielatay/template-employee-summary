# Template - Employee - Summary

## Description

This week, I built a software engineering team generator command line application. When you run this application, it will prompt the user for information about the team manager, as well as information regarding the team members. When the user has completely built their team, an HTML file will produce a team roaster. This applications makes it quick and easy to gather necessary information about each team member. 

This app is ran using Node.js, as well as the inquirer node.js package.
This week challenge was to test  my understanding of using the command line to run an application. It also tested my ability to create Javascript classes in order to pass the provided tests through jest. 

It also assisted in developing my understanding of OOP constructors and prototypes. For each employee, I created an object that was extended from the main employee. I learned about overwritting properties but most importantly how these objects inherit features from other objects. 

![GitHub top language](https://img.shields.io/github/languages/top/kammielatay/read-me-generator)
![GitHub last commit](https://img.shields.io/github/last-commit/Kammielatay/read-me-generator)
![NPM](https://img.shields.io/npm/l/inquirer)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#test)
* [Questions](#questions)


## Installation
1) Clone this repositiory to your local computer using terminal or bash:

    ```
    git clone https://github.com/Kammielatay/template-employee-summary.git
    ```

2) Open folder in your editor of choice (VSC, Sublime, etc.)

## Usage
![demo](https://j.gifs.com/VA4n0z.gif)

In this application, the program will prompt the user for the name of the team member, employee id, and email. If the user is inputing information regarding a manager member, it will prompt the user for the managers office number. If the user is input information regarding a team member that is an engineer, it will prompt them for that team members GitHub username. If the user is inputing information regarding an Intern of the company, it will prompt them for the school that the entire is attended. 

![image-of-outcome](https://github.com/Kammielatay/template-employee-summary/blob/main/Assets/images/my-staff-members.png)

Clicking on the email will allow you to send an email to that member and clicking on their GitHub username will take you to the GitHub profile.


## License
Distributed under the [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) License. See [OpenSource.org](https://opensource.org/licenses) for more information.

## Tests
1) Select 'Open in Integrated Terminal' by simply right-clicking 'app.js' in the 'Develop' file and run the code below:

    ```
    node install
    node app.js
    ```
2) Then go into the 'output' file, where you will find your generated 'team.html' file and click it.

3) Run file with Live Server or your default browser.

## Questions
If you have any questions, please reach out to me at Kameshialatay@gmail.com