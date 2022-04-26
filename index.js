const mysql = require('mysql2');
var inquirer = require('inquirer');
const { mainMenuQuestion, addDepartmentQuestion, roleQuestions, employeeQuestions, whichEmployee } = require('./lib/questions');
//const { mainMenuInquirer } = require('./lib/mainMenuInquirer');
const { allDepts, allRoles, allEmployees, addDepartment, addRole, addEmployee,updateEmployee } = require('./lib/queries');

// Connect to database
inquirer.prompt(mainMenuQuestion)
    .then((answer) => {
        console.log('You chose: ' + answer.mainSelection);
        return answer.mainSelection;
    }).catch((err) => {
        console.error(err);
        return err;
    })

    .then((choice) => {
        switch (choice) {
            case 'View all departments.':
                //Get the entire departments table.
                allDepts()
                    .then(([results, fields]) => console.table(results));
                break;

            case 'View all roles.':
                //get the entire roles table
                allRoles()
                    .then(([results, fields]) => console.table(results));
                break;

            case 'View all employees.':
                //get the entire employees table.
                allEmployees();
                break;

            case 'Add a department.':
                // use inquirer to ask which department. Use that for query
                inquirer.prompt(addDepartmentQuestion)
                    .then((ans) => {
                        addDepartment(ans.newDept);
                        console.log(`${ans.newDept} added to departments table.`)
                        return;
                    })
                    .catch((err) => console.error(err));
                break;

            case 'Add a role.':
                inquirer.prompt(roleQuestions)
                    .then((answers) => {
                        addRole(answers.role, answers.salary, answers.dept);
                        return;
                    })
                    .catch((err) => console.error(err));
                break;
            
            case 'Add an employee.':
                inquirer.prompt(employeeQuestions)
                    .then((answers) => {
                        addEmployee(answers.first, answers.last, answers.roleId, answers.managerId);
                        return;
                    })
                    .catch((err) => console.error(err));
                break;
            
            //One more case - updating an employee's role.
            case 'Update employee role.':
                inquirer.prompt(whichEmployee)
                .then((answers) => {
                    updateEmployee(answers.employeeId, answers.newRole);
                });
                break;
                
        }
    })



// db.query('SELECT id,first_name FROM students', function (err, results) {
// // console.log(results);
// res.json(results)
// });


