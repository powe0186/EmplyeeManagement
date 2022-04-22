--Seed departments table--
INSERT INTO departments (name)
VALUES  ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("HR")
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
        ('Junior HR Representative', 60000, 5)
;

--Seed employees table--

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ('Heath', 'Ledger', 1, 1),
        ('Julia', 'Stiles', 2, 2),
        ('Joseph', 'Gordon-Levitt', 3, 3),
        ('Larisa', 'Oleynik', 4, 4),
        ('David', 'Krumholtz', 5, 5),
        ('Andrew', 'Keegan', 5, 6),
        ('Susan', 'May Pratt', 6, 7),
        ('Gabrielle', 'Union', 7, 8),
        ('Larry', 'Miller', 8, 9),
        ('Daryl', 'Mitchell', 9, 10),
        ('Allison', 'Janney', 10, 11),
        ('David', 'Leisure', 11, 12),
        ('Kyle', 'Cease', 12, 13)
;