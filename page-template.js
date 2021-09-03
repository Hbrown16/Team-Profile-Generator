const generateTeam = team => {

    // manager html
    const generateManager = manager => {
        return`
        <div class ="container display= "flex">
        <div class= "row" style="flex-direction: row">
        <div class = "card col-sm-4 d-flex" style="width: 18rem;">
        <div class = "card-header">
           <h2 class = "card-title">${manager.getName()}</h2>
           <h3 class = "card-title"><i class = class = "fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3> 
        </div>    
        <div class = "card-body flex-fill">
            <ul class = "list-group">
                <li class = "list-group-item">ID: ${manager.getId()}</li>
                <li class = "list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class = "list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    </div>
    </div>
        `;

    };

    // Html for Engineers
    const generateEngineer = Engineer => {
        return`
        <div class ="container display= "flex">
        <div class= "row flex-wrap" style="flex-direction: row">
        <div class = "card card col-sm-4 d-flex" flex-direction="row" style="width: 18rem;">
    <div class = "card-header">
        <h2 class = "card-title">${Engineer.getName()}</h2>
        <h3 class = "card-title"><i class = "fas fa-glasses mr-2"></i>${Engineer.getRole()}</h3>
    </div>
    <div class = "card-body flex-fill">
        <ul class = "list-group">
            <li class = "list-group-item">ID: ${Engineer.getId()}</li>
            <li class = "list-group-item">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
            <li class = "list-group-item">GitHub: <a href="https://github.com/${Engineer.getGithub()}" target = "_blank" rel="Noopener Noreferrer">${Engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>  
</div>  
</div>
        `;    
    };

    // HTML for interns
    const generateIntern = intern => {
        return `
        <div class ="container display= "flex">
        <div class= "row flex-wrap" style="flex-direction: row">
        <div class = "card card col-sm-4 d-flex" flex-direction="row" style="width: 18rem;">
    <div class = "card-header">
        <h2 class = "card-title">${intern.getName()}</h2>
        <h3 class = "card-title"><i class = "fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class = "card-body flex-fill">
        <ul class = ""list-group">
            <li class = "list-group-item">ID: ${intern.getId()}</li>
            <li class = "list-group-item">Email: <a href = "mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class = "list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="Out/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
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