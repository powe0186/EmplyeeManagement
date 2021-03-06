const { disable } = require('express/lib/application');
const mysql = require('mysql2');
//const cTable = require('console.table');
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        password: 'root112358',
        database: 'employee_db',
    },
    console.log(`Connected to the database.`)
);





// Get a table of all departments.
const allDeptsQuery = 'SELECT * FROM departments';

function allDepts() {
    return db.promise().query(allDeptsQuery);
}

// Get a table of all the roles.
const allrolesQuery = ' SELECT roles.id, title, name, salary FROM roles LEFT JOIN departments ON roles.department_id = departments.id;'
function allRoles() {
    return db.promise().query(allrolesQuery);
}

//Get table of all employees
const allEmployeesQuery = 
`SELECT 
    e.id,
    CONCAT(e.first_name, ' ', e.last_name) AS name,
    r.title,
    d.name AS Department,
    r.salary,
    CONCAT(m.first_name, ' ', m.last_name) AS Manager
FROM employees e 
JOIN employees m 
    ON e.manager_id = m.id
JOIN roles r 
    ON e.role_id = r.id
JOIN departments d ON
r.department_id = d.id;`

function allEmployees() {
    db.query(allEmployeesQuery, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
        }
    })
}


function addDepartment(name) {
    db.query(`INSERT INTO departments (name) VALUES ('${name}');`, (err, results) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`${name} added to departments`);
        }
    })
}

function addRole(role, salary, dept) {
    db.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${role}', '${salary}', ${dept});`, (err, results) => {
        if (err) {
            console.error(err);
        } else {
            console.log("role added");
        }
    })
}

function addEmployee(first, last, role, manager) {
    db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${first}', '${last}', ${role}, ${manager});`, (err, results) => {
        if (err) {
            console.error(err);
        } else {
            console.log("role added");
        }
    })
}

function updateEmployee(id, role_id) {
    db.query(`UPDATE employees SET role_id=${role_id} WHERE id=${id};`, (err, results) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Employee Roll Updated.");
        }
    })
}



module.exports = { allDepts, allRoles, allEmployees, addDepartment, addRole, addEmployee, updateEmployee };