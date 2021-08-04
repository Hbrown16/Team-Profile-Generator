const fs = require('fs');
const inquirer = require("inquirer");
const createTeam = require("");
const Engineer = require("");
const Intern = require("");
const Manager = require("");

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
      const Manager = new Manager(answers.name, answers.ID, answers.email, answers.officeNumber)
      team.push(manager);
      addEmployee();
    })
}

// Call to intialize App
generateTeam();
// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./src/page-template.js");

// const teamMembers = [];
// const idArray = [];

// function appMenu() {

//   function createManager() {
//     console.log("Please build your team");
//     inquirer.prompt([
//       {
//         type: "input",
//         name: "managerName",
//         message: "What is the team manager's name?",
//         validate: answer => {
//           if (answer !== "") {
//             return true;
//           }
//           return "Please enter at least one character.";
//         }
//       },
//       {
//         type: "input",
//         name: "managerId",
//         message: "What is the team manager's id?",
//         validate: answer => {
//           const pass = answer.match(
//             /^[1-9]\d*$/
//           );
//           if (pass) {
//             return true;
//           }
//           return "Please enter a positive number greater than zero.";
//         }
//       },
//       {
//         type: "input",
//         name: "managerEmail",
//         message: "What is the team manager's email?",
//         validate: answer => {
//           const pass = answer.match(
//             /\S+@\S+\.\S+/
//           );
//           if (pass) {
//             return true;
//           }
//           return "Please enter a valid email address.";
//         }
//       },
//       {
//         type: "input",
//         name: "managerOfficeNumber",
//         message: "What is the team manager's office number?",
//         validate: answer => {
//           const pass = answer.match(
//             /^[1-9]\d*$/
//           );
//           if (pass) {
//             return true;
//           }
//           return "Please enter a positive number greater than zero.";
//         }
//       }
//     ]).then(answers => {
//       const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
//       teamMembers.push(manager);
//       idArray.push(answers.managerId);
//       createTeam();
//     });
//   }

//   function createTeam() {

//     inquirer.prompt([
//       {
//         type: "list",
//         name: "memberChoice",
//         message: "Which type of team member would you like to add?",
//         choices: [
//           "Engineer",
//           "Intern",
//           "I don't want to add any more team members"
//         ]
//       }
//     ]).then(userChoice => {
//       switch (userChoice.memberChoice) {
//         case "Engineer":
//           addEngineer();
//           break;
//         case "Intern":
//           addIntern();
//           break;
//         default:
//           buildTeam();
//       }
//     });
//   }

//   function addEngineer() {
//     inquirer.prompt([
//       {
//         type: "input",
//         name: "engineerName",
//         message: "What is your engineer's name?",
//         validate: answer => {
//           if (answer !== "") {
//             return true;
//           }
//           return "Please enter at least one character.";
//         }
//       },
//       {
//         type: "input",
//         name: "engineerId",
//         message: "What is your engineer's id?",
//         validate: answer => {
//           const pass = answer.match(
//             /^[1-9]\d*$/
//           );
//           if (pass) {
//             if (idArray.includes(answer)) {
//               return "This ID is already taken. Please enter a different number.";
//             } else {
//               return true;
//             }

//           }
//           return "Please enter a positive number greater than zero.";
//         }
//       },
//       {
//         type: "input",
//         name: "engineerEmail",
//         message: "What is your engineer's email?",
//         validate: answer => {
//           const pass = answer.match(
//             /\S+@\S+\.\S+/
//           );
//           if (pass) {
//             return true;
//           }
//           return "Please enter a valid email address.";
//         }
//       },
//       {
//         type: "input",
//         name: "engineerGithub",
//         message: "What is your engineer's GitHub username?",
//         validate: answer => {
//           if (answer !== "") {
//             return true;
//           }
//           return "Please enter at least one character.";
//         }
//       }
//     ]).then(answers => {
//       const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
//       teamMembers.push(engineer);
//       idArray.push(answers.engineerId);
//       createTeam();
//     });
//   }

//   function addIntern() {
//     inquirer.prompt([
//       {
//         type: "input",
//         name: "internName",
//         message: "What is your intern's name?",
//         validate: answer => {
//           if (answer !== "") {
//             return true;
//           }
//           return "Please enter at least one character.";
//         }
//       },
//       {
//         type: "input",
//         name: "internId",
//         message: "What is your intern's id?",
//         validate: answer => {
//           const pass = answer.match(
//             /^[1-9]\d*$/
//           );
//           if (pass) {
//             if (idArray.includes(answer)) {
//               return "This ID is already taken. Please enter a different number.";
//             } else {
//               return true;
//             }

//           }
//           return "Please enter a positive number greater than zero.";
//         }
//       },
//       {
//         type: "input",
//         name: "internEmail",
//         message: "What is your intern's email?",
//         validate: answer => {
//           const pass = answer.match(
//             /\S+@\S+\.\S+/
//           );
//           if (pass) {
//             return true;
//           }
//           return "Please enter a valid email address.";
//         }
//       },
//       {
//         type: "input",
//         name: "internSchool",
//         message: "What is your intern's school?",
//         validate: answer => {
//           if (answer !== "") {
//             return true;
//           }
//           return "Please enter at least one character.";
//         }
//       }
//     ]).then(answers => {
//       const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
//       teamMembers.push(intern);
//       idArray.push(answers.internId);
//       createTeam();
//     });
//   }

//   function buildTeam() {
//     // Create the output directory if the output path doesn't exist
//     if (!fs.existsSync(OUTPUT_DIR)) {
//       fs.mkdirSync(OUTPUT_DIR)
//     }
//     fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
//   }

//   createManager();

// }

// appMenu();
