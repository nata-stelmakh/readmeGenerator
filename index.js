//Dependencies

//1.inquirer
//2.generateMarkdown
//3.fs
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


inquirer
  .prompt([
    {
      type: "input",
      name: "git_hub_username",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "project_name",
      message: "What is the name of your project?", 
      //the title of the README
    },
    {
      type: "input",
      name: "description",
      message: "Please, describe your project",
    },
    {
      type: "input",
      name: "installation",
      message: "Please, tell about installation requierements",
    },
    {
      type: "input",
      name: "usage",
      message: "Please, provide instructions for use",
    },
    {
      type: "input",
      name: "collaboration",
      message: "Please, put names of your collaborators",
    },
    {
      type: "list",
      name: "license",
      message: "Please, choose the license",
      choices: ["MIT", "Mozilla Public License", "Apache 2.0 License", "GNU GPL v3"],
    },
    {
      type: "input",
      name: "test",
      message: "Please, provide tests and instructions to testing",
    },
    {
      type: "input",
      name: "questions",
      message: "Frequently asked questions",
    },
  ])
  .then((answers) => {
    let badge =""
    console.log(answers.license)
    if(answers.license === "MIT"){
      badge ="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }else if(answers.license === "Mozilla Public License"){
      badge ="[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"     
    }else if(answers.license === "GNU GPL v3"){
      badge ="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }else{
    badge ="[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
   writeToFile("text.md",{...answers, badge}  )
  
  });

  function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,generateMarkdown(data))
  }

// function init() {}

// function call to initialize program
// init();
