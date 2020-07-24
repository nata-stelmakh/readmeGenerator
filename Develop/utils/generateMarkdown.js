// function to generate markdown for README
function generateMarkdown(data) {
 return `
 
  ${data.badge}
  # ${data.project_name}
  ## ${data.git_hub_username}
  
  ## Description 
  
  ${data.description}
  

  ## Table of Contents  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contibutors)
  * [License](#license)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Installation 
  
  ${data.installation}

  ## Usage
  
  ${data.usage}

  ## Contributors
  
  ${data.collaboration}

  ## Test
  
  ${data.test}

  ## License
  
  ${data.license}

  ## Questions
  
  ${data.questions}

  https://github.com/${data.git_hub_username}
  ${data.email}
`;
}

module.exports = generateMarkdown;
//test this function on the title