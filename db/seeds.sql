--Seed departments table--
INSERT INTO departments (name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("HR"),
        ("CEO")
;

--Seed roles table--

INSERT INTO roles (title, salary, department_id)
VALUES  ('Sales Lead', 93000, 1),
        ('Salesperson', 68000, 1),
        ('Sales Intern', 40000, 1),
        ('Lead Engineer', 115000, 2),
        ('Software Engineer', 99000, 2),
        ('Software Intern', 45000, 2),
        ('Lead Accoutant', 120000, 3),
        ('Senior Accountant', 105000, 3),
        ('Junior Accountant', 84000, 3),
        ('Lawyer', 130000, 4),
        ('Legal Clerk', 60000, 4),
        ('HR Lead', 85000, 5),
        ('Junior HR Representative', 60000, 5),
        ('CEO', 190000, 6)
;

--Seed employees table--

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ('William', 'Shakespeare', 6, null),
        ('Heath', 'Ledger', 1, 1),
        ('Julia', 'Stiles', 2, 2),
        ('Joseph', 'Gordon-Levitt', 3, 2),
        ('Larisa', 'Oleynik', 4, 1),
        ('David', 'Krumholtz', 5, 5),
        ('Andrew', 'Keegan', 5, 5),
        ('Susan', 'May Pratt', 6, 5),
        ('Gabrielle', 'Union', 7, 1),
        ('Larry', 'Miller', 8, 8),
        ('Daryl', 'Mitchell', 9, 8),
        ('Allison', 'Janney', 10, 1),
        ('David', 'Leisure', 11, 11),
        ('Kyle', 'Cease', 12, 1)
;