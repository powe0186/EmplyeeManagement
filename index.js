const mysql = require('mysql2');
var inquirer = require('inquirer');
const { mainMenuQuestion } = require('./lib/questions')

// Connect to database
const db = mysql.createConnection(
 {
host: 'localhost',
// MySQL username,
user: 'root',
password: 'root112358',
database: ''
},
console.log(`Connected to the database.`)
);

//Ask initial main menu question.
inquirer.prompt(mainMenuQuestion)
.then((answer) => {
    console.log('You chose: ' + answer.mainSelection);
    return answer.mainSelection;
}).catch((err) => {
    console.error(err);
});


// db.query('SELECT id,first_name FROM students', function (err, results) {
// // console.log(results);
// res.json(results)
// });


