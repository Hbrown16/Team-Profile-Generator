const generateTeam = team => {

    // manager html
    const generateManger = Manager => {
        return`
        <div class = "card employee-card">
        <div class = "Card-Header">
           <h2 class = "Card-Title">${Manager.getName()}</h2>
           <h3 class = "Card-Title"><i class = class = "fas fa-mug-hot mr-2"></i>${Manager.getRole()}</h3> 
        </div>    
        <div class = "Card-Body">
            <ul class = "List-Group">
                <li class = "List-Group-Item">ID: ${Manager.getId()}</li>
                <li class = "List-Group_Item">Email: <a href="mailto:${getEmail()}">${Manager.getEmail()}</a></li>
                <li class = "List-Group_Item">Office Number: ${Manager.getOfficeNumber()}</li>
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
            <li class "List-Group-Item">GitHub: <a href="https://github.com/${Engineer.getGithub()}" target = "_blank" rel="Noopener Noreferrer">${Engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>    
        `;    
    };

    // HTML for interns
    const generateIntern = Intern => {
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

    const html = [];

    html.push(team
        .filter(employee))
}
