const mysql = require('mysql2');
var inquirer = require('inquirer');
const { mainMenuQuestion, addDepartmentQuestion, addRoleQuestions } = require('./lib/questions');
//const { mainMenuInquirer } = require('./lib/mainMenuInquirer');
const { allDepts, allRoles, allEmployees, addDepartment, addRole, getDeptId } = require('./lib/queries');

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
                    })
                    .catch((err) => console.error(err));
                break;

            case 'Add a role.':
                // use inquirer to ask which department. Use that for quer
                let role;
                let salary;
                allDepts()
                    .then(([results, fields]) => {
                        let possibleDepts = [];
                        for (let i = 0; i < results.length; i++) {
                            possibleDepts.push(results[i].name);
                        }
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

                        return questions;
                    })
                    .then((questions) => {
                        inquirer.prompt(questions)
                            .then((answers) => {
                                role = answers.role;
                                salary = answers.salary;
                                return answers.dept;
                            })
                            .then((dept) => {
                                getDeptId(dept)
                                .then((dept_id) => {
                                    console.log(dept_id[0]);
                                    addRole(role, salary, dept_id[0][0].id);
                                    return;
                            })
                            
                            })
                        
                    })
                    break;
    }
})



// db.query('SELECT id,first_name FROM students', function (err, results) {
// // console.log(results);
// res.json(results)
// });


