const mysql = require('mysql2');
const cTable = require('console.table');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        password: 'root112358',
        database: 'employee_db'
    },
    console.log(`Connected to the database.`)
);


// Get a table of all departments.
const allDeptsQuery = 'SELECT * FROM departments'
function allDepts() {
    db.query(allDeptsQuery, (err, results) => {
        if (err) {
            console.log("sorry, there was an error.")
        } else {
            console.table(results);
        }
    })
    
}

// Get a table of all the roles.
const allrolesQuery = ' SELECT roles.id, title, name, salary FROM roles LEFT JOIN departments ON roles.department_id = departments.id;'
function allRoles() {
    db.query(allrolesQuery, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
        }
    })
}

//






module.exports = { allDepts, allRoles };