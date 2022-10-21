CREATE DATABASE data;
USE data;

CREATE TABLE faculty(
    id VARCHAR(15),
    name NVARCHAR(50),
    PRIMARY KEY(id)
);

CREATE TABLE subjects(
    id VARCHAR(15),
    name TEXT,
    PRIMARY KEY(id)
);

CREATE TABLE class(
    id VARCHAR(15),
    name NVARCHAR(50),
    PRIMARY KEY(id)
);

CREATE TABLE students(
    id VARCHAR(15),
    name NVARCHAR(50),
    birthDate date,
    idClass VARCHAR(15),
    idFaculty VARCHAR(15),
    numberPhone VARCHAR(12),
    address NVARCHAR(100),
    identiyCard VARCHAR(12),
    password VARCHAR(128),
    PRIMARY KEY(id),
    FOREIGN KEY (idClass) REFERENCES class(id),
    FOREIGN KEY (idFaculty) REFERENCES faculty(id)
);

CREATE TABLE academy(
    idStudent VARCHAR(15),
    idSubject VARCHAR(15),
    time NVARCHAR(12),
    score FLOAT,
    FOREIGN KEY (idStudent) REFERENCES students(id),
    FOREIGN KEY (idSubject) REFERENCES subjects(id)
);

