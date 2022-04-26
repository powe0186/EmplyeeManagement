const { allDepts } = require ('./queries');

//Question for the initial main menu.
const mainMenuQuestion = [
    {
        type: 'list',
        name: 'mainSelection',
        choices:
            [
                'View all departments.',
                'View all roles.',
                'View all employees.',
                'Add a department.',
                'Add a role.',
                'Add an employee.',
                'Update employee role.'
            ],
        Message: 'Choose from the following:\n'
    }
]


const addDepartmentQuestion = [
    {
        type: 'input',
        name: 'newDept',
        message: 'What is the name of the new department?'
    }
]



async function addRoleQuestions() {
    allDepts()
    .then(([results, fields]) => {
        let possibleDepts = [];
        for (let i = 0; i < results.length; i++) {
            possibleDepts.push(results[i].name);
        }
        console.log(possibleDepts);
        return possibleDepts;
    })
    .then((possibleDepts) => {
    let questions = [
        {
            type: 'input',
            name: 'role',
            message: 'What is the name of the new role?'
        },
        {
            type: 'number',
            name: 'salary',
            message: 'What is the salary of the new Role?'
        },
        {
            type: 'list',
            choices: possibleDepts,
            name: 'dept',
            message: 'In what department will your new role work?'
        }
    ];
    console.log(questions);
    return questions;
    })
}


module.exports = { mainMenuQuestion, addDepartmentQuestion, addRoleQuestions };