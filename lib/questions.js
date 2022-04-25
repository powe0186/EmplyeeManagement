
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


module.exports = { mainMenuQuestion, addDepartmentQuestion };