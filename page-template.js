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
                <li class = "List-Groupe-Item">ID: ${Manager.getId()}</li>
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
        <h2 class = "Card-Title">${engineer.getName()}</h2>
        <h3 class = "Card-Title"><i class = "fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class = "Card-Body">
    
    `;    
    }
}