const { allDepts } = require('./queries');

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



const roleQuestions = [

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
        type: 'number',
        name: 'dept',
        message: 'What is the id# of the department they will work in?'
    }
]

const employeeQuestions = [
    {
        type: 'input',
        name: 'first',
        message: 'What is the first name of the new employee?'
    },
    {
        type: 'input',
        name: 'last',
        message: 'What is the last name of the new employee?'
    },
    {
        type: 'number',
        name: 'roleId',
        message: 'What is the role id# of the new employee?'
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the id# of the employee's manager?"
    }
]

module.exports = { mainMenuQuestion, addDepartmentQuestion, roleQuestions, employeeQuestions };