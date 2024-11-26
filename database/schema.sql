CREATE DATABASE task_management;

USE task_management;

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    teamLeadId INT
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    role ENUM('manager', 'team_lead', 'member')
);

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    projectId INT,
    memberId INT,
    description TEXT,
    status ENUM('Pending', 'In Progress', 'Completed'),
    FOREIGN KEY (projectId) REFERENCES projects(id),
    FOREIGN KEY (memberId) REFERENCES users(id)
);