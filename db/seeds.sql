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
VALUES  ('Heath', 'Ledger', 1, 14),
        ('Julia', 'Stiles', 2, 1),
        ('Joseph', 'Gordon-Levitt', 3, 1),
        ('Larisa', 'Oleynik', 4, 14),
        ('David', 'Krumholtz', 5, 4),
        ('Andrew', 'Keegan', 5, 4),
        ('Susan', 'May Pratt', 6, 4),
        ('Gabrielle', 'Union', 7, 14),
        ('Larry', 'Miller', 8, 7),
        ('Daryl', 'Mitchell', 9, 7),
        ('Allison', 'Janney', 10, 14),
        ('David', 'Leisure', 11, 10),
        ('Kyle', 'Cease', 12, 14),
        ('William', 'Shakespeare', 6, 14)
;