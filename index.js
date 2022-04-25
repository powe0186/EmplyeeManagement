const mysql = require('mysql2');
var inquirer = require('inquirer');
const { mainMenuQuestion } = require('./lib/questions');
//const { mainMenuInquirer } = require('./lib/mainMenuInquirer');
const { allDepts, allRoles } = require('./lib/queries');

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
                allDepts();
                break;
        
            case 'View all roles.':
                //get the entire roles table
                allRoles();
                break;

                case 'View all employees.':
                    //get the entire employees table.
                    db.query('SELECT * FROM employees', (err, results) => {
                        if (err) {
                            console.log("sorry, there was an error.")
                        } else {
                            console.log(results);
                        }
                    })
                    break;

                // case 'Add a department':
                //     // use inquirer to ask which department. Use that for query
                //     break;
        }
    })


console.log('Await worked');


// db.query('SELECT id,first_name FROM students', function (err, results) {
// // console.log(results);
// res.json(results)
// });


