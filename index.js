const fs = require('fs');
const inquirer = require("inquirer");
const createTeam = require("./page-template");
const Engineer = require("./team/Engineer");
const Intern = require("./team/Intern");
const Manager = require("./team/Manager");

// Array of questions for input
const managerInput = [
  {
    type: 'input',
    message: 'Enter managers name here:',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is the ID number?',
    name: 'ID',
  },
  {
    type: 'input',
    message: 'What is the managers email?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is the managers office number?',
    name: 'officeNumber',
  }
];

const interInput = [
  {
    type: 'input',
    message: "What is the intern's name?",
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is the ID number?',
    name: 'ID',
  },
  {
    type: 'input',
    message: "What is the interns email?",
    name: 'email',
  },
  {
    type: 'input',
    message: 'What school did they attend?',
    name: 'schoolName',
  }
]

const engineerInput = [
  {
    type: 'input',
    message: "Enter the engineer's name here:",
    name: 'name',
  },
  {
    type: 'input',
    message: "What's their ID number?",
    name: 'ID',
  },
  {
    type: 'input',
    message: "What is the engineer's email?",
    name: 'email',
  },
  {
    type: 'input',
    message: "What is your GitHub account name?",
    name: "github",
  }
]

const team = [];

function addEngineer() {
  inquirer.prompt(engineerInput).then(answers => {
    console.log(answers);
    const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.github);
    team.push(engineer);
    addEmployee();
  })
}
// function to add employee
function addIntern() {
  inquirer.prompt(interInput).then(answers => {
    const intern = new Intern(answers.name, answers.ID, answers.email, answers.school);
    team.push(Intern);
    addEmployee();
  })
}

function addEmployee() {
  const employeePrompt = [{
    type: 'list',
    message: ' What type of employee are you wanting to add?',
    name: 'memberChoice',
    choices: ["Intern", "Engineer", "Done Adding Employees"]
  }];

  inquirer.prompt(employeePrompt)
    .then(answer => {
      switch (answer.memberChoice) {
        case "Intern":
          addIntern()
          break;
        
        default:
          writeToFile("");  
      }
    })
}

// Function to Write File
function writeToFile(fileName, data) {
  console.log(createTeam(data));

  fs.writeFile(fileName, createTeam(data), (err) =>
    err ? console.error(err) : console.log('Complete')
  
  );
}

// Intialize App
function generateTeam() {
  inquirer
    .prompt(managerInput)
    .then((answers) => {
      console.log(answers);
      const manager = new manager(answers.name, answers.Id, answers.email, answers.officeNumber);
      team.push(manager);
      addEmployee();
    })
}

// Call to intialize App
generateTeam();
