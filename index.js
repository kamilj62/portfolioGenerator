const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        message: 'Where are you located?',
        name: 'location',
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Tell us about yourself',
    },
    {
        type: 'input',
        name: 'linkedInUrl',
        message: 'What is your LinkedIn URL?',
    },
    {
        type: 'input',
        name: 'gitHubUrl',
        message: 'What is your GitHub URL?',
    },
])
.then((data) => {
    fs.writeFile('./index.html', generateHTML(data), function (error) {
        if (error) {
            return console.log(error);
        }
        console.log('File created successfully!');
    });
});

function generateHTML(data) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
            <title>Document</title>
        </head>
        <body>
            <header class="p-5 mb-4 header bg-light">
                <div class="container">
                    <h1 class="display-4">Hi! My name is ${data.name}</h1>
                    <p class="lead">I am from ${data.location}.</p>
                    <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
                    <ul class="list-group">
                        <li class="list-group-item">My GitHub username is ${data.gitHubUrl}</li>
                        <li class="list-group-item">LinkedIn: ${data.linkedInUrl}</li>
                    </ul>
                </div>
            </header>
        </body>
        </html>
    `;
}