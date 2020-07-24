//Dependencies

//1.inquirer
//2.generateMarkdown
//3.fs

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//list of questions
inquirer
  .prompt([
    {
      type: "input",
      name: "git_hub_username",
      message: "What is your github username?",
      //used to create a link to a github repository
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
      //email added in section Questions
    },
    {
      type: "input",
      name: "project_name",
      message: "What is the name of your project?", 
      //the title of the README and a link to a github repository
    },
    {
      type: "input",
      name: "description",
      message: "Please, describe your project",
      //fill the text describing what this app is for
    },
    {
      type: "input",
      name: "installation",
      message: "Please, tell about installation requierements",
      // fill this out in order to let user know what software needed in addition
    },
    {
      type: "input",
      name: "usage",
      message: "Please, provide instructions for use",
      //how to use
    },
    {
      type: "input",
      name: "collaboration",
      message: "Please, put names of your collaborators",
      //who participated
    },
    {
      type: "list",
      name: "license",
      message: "Please, choose the license",
      choices: ["MIT", "Mozilla Public License", "Apache 2.0 License", "GNU GPL v3"],
      //what license is it under
    },
    {
      type: "input",
      name: "test",
      message: "Please, provide tests and instructions to testing",
    },
    {
      type: "input",
      name: "questions",
      message: "Frequently asked questions and instructions how to reach out to you",
    },
  ])
  //after user answered, gathered data is used to:
  .then((answers) => {
    //choose a badge
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
    //create body of the README
   writeToFile("text.md",{...answers, badge}  )
  
  });
// function that calls generateMarkdown to fill out the file with gathered data

  function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,generateMarkdown(data))
  }


