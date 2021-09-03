const generateTeam = team => {

    // manager html
    const generateManager = manager => {
        return`
        <div class = "card employee-card">
        <div class = "Card-Header">
           <h2 class = "Card-Title">${manager.getName()}</h2>
           <h3 class = "Card-Title"><i class = class = "fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3> 
        </div>    
        <div class = "Card-Body">
            <ul class = "List-Group">
                <li class = "List-Group-Item">ID: ${manager.getId()}</li>
                <li class = "List-Group_Item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class = "List-Group_Item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;

    };

    // Html for Engineers
    const generateEngineer = Engineer => {
        return`
        <div class = "card employee-card">
    <div class = "Card-Header">
        <h2 class = "Card-Title">${Engineer.getName()}</h2>
        <h3 class = "Card-Title"><i class = "fas fa-glasses mr-2"></i>${Engineer.getRole()}</h3>
    </div>
    <div class = "Card-Body">
        <ul class = "List-Group">
            <li class = "List-Group-Item">ID: ${Engineer.getId()}</li>
            <li class = "List-Group-Item">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
            <li class = "List-Group-Item">GitHub: <a href="https://github.com/${Engineer.getGithub()}" target = "_blank" rel="Noopener Noreferrer">${Engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>    
        `;    
    };

    // HTML for interns
    const generateIntern = intern => {
        return `
        <div class = "card employee-card">
    <div class = "Card-Header">
        <h2 class = "Card-Title">${intern.getName()}</h2>
        <h3 class = "Card-Title"><i class = "fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class = "Card-Body">
        <ul class = ""List-Group">
            <li class = "List-Group-Item">ID: ${intern.getId()}</li>
            <li class = "List-Group-Item">Email: <a href = "mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class = "List-Group-Item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;

    };
    let top = ` <!DOCTYPE html>
<html lang="en">
<head>    
<meta charset="UTF-8" />
    <meta name = "viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv = "X-UA-Compatible" content="ie=edge" />
    <title>Project Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/7e69a492c8.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class = "container-fluid">
        <div class = "row">
            <div class="col-12 jumbotron mb-3 Team-Heading">
                <h1 class = "text-center">Project Team</h1>
            </div>
        </div>
    </div> 
`
let bottom = `
</body>
</html>`
    const html = [top];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );

    // HTML console.log

    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(Engineer => generateEngineer(Engineer))
        .join("")
        );

    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(Intern => generateIntern(Intern))
        .join("")
        );

    html.push(bottom)
        return html.join("");

}

// Generate the whole page

// module.exports = team => {

//     return `

//     `;
// };

module.exports = generateTeam