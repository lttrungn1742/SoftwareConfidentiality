CREATE DATABASE data;

USE data;

CREATE TABLE users(
    id INT AUTO_INCREMENT, 
    username TEXT, 
    passwd TEXT,
    PRIMARY KEY(id)
);

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
    PRIMARY KEY(id),
    FOREIGN KEY (idClass) REFERENCES class(id),
    FOREIGN KEY (idFaculty) REFERENCES faculty(id)
);

CREATE TABLE academy(
    id VARCHAR(15),
    idStudent VARCHAR(15),
    idSubject VARCHAR(15),
    time NVARCHAR(12),
    FOREIGN KEY (idStudent) REFERENCES students(id),
    FOREIGN KEY (idSubject) REFERENCES subjects(id)
);

INSERT INTO subjects VALUES
('INT1339','Ngon ngu lap trinh C++'),
('BAS1122','Tu tuong Ho Chi Minh'),
('BAS1227','Vat ly 3 va thi nghiem'),
('BAS1144','Tieng anh A2.2'),
('INT1358','Toan roi rac 1'),
('BAS1226','Xac suat thong ke');

INSERT INTO users VALUES
(1,'admin','admin'),
(2,'Anna','us3rpasswd1'),
(3,'batman','us3rpasswd2'),
(4,'Adm1n','St0ngP4sswd@!'),
(5,'superman','us3rpasswd5'),
(6,'victim','password'),
(7,'attacker','password');

INSERT INTO class VALUES
('D18CQAT01-N','ĐHCQ - Ngành An toàn thông tin - 2018-1'),
('D18CQAT02-N','ĐHCQ - Ngành An toàn thông tin - 2018-2');

INSERT INTO faculty VALUES
('CN2','Công Nghệ Thông Tin 2');

INSERT INTO students VALUES
('N18DCAT054', 'Nguyễn Thị Ánh Nguyệt', '2000-09-25', 'D18CQAT02-N', 'CN2'),
('N18DCAT057', 'Phạm Thị Tuyết Nhi', '2000-02-17', 'D18CQAT01-N', 'CN2'),
('N18DCAT058', 'Hồ Minh Phong', '2000-11-14', 'D18CQAT02-N', 'CN2'),
('N18DCAT059', 'Lê Thị Mỹ Phụng', '2000-06-27', 'D18CQAT01-N', 'CN2'),
('N18DCAT061', 'Phan Hoài Phương', '2000-06-16', 'D18CQAT01-N', 'CN2'),
('N18DCAT062', 'Lê Nhựt Quang', '2000-03-18', 'D18CQAT02-N', 'CN2'),
('N18DCAT063', 'Nguyễn Ngọc Quang', '2000-08-10', 'D18CQAT01-N', 'CN2'),
('N18DCAT064', 'Phạm Hoàng Quý', '2000-12-04', 'D18CQAT02-N', 'CN2'),
('N18DCAT065', 'Nguyễn Đức Quỳnh', '2000-05-18', 'D18CQAT01-N', 'CN2'),
('N18DCAT066', 'Dương Công Sáng', '2000-04-13', 'D18CQAT02-N', 'CN2'),
('N18DCAT067', 'Trần Thị Thanh Tâm', '2000-01-30', 'D18CQAT01-N', 'CN2'),
('N18DCAT068', 'Nguyễn Nhật Tân', '2000-08-02', 'D18CQAT02-N', 'CN2'),
('N18DCAT069', 'Lương Minh Tiến', '2000-11-16', 'D18CQAT01-N', 'CN2'),
('N18DCAT071', 'Nguyễn Trung Tín', '2000-07-29', 'D18CQAT01-N', 'CN2'),
('N18DCAT073', 'Nguyễn Ngọc Tịnh', '2000-05-18', 'D18CQAT01-N', 'CN2'),
('N18DCAT074', 'Lê Phạm Công Toàn', '2000-02-18', 'D18CQAT02-N', 'CN2'),
('N18DCAT076', 'Trần Bảo Toàn', '2000-07-05', 'D18CQAT02-N', 'CN2'),
('N18DCAT077', 'Nguyễn Văn Thanh Tú', '2000-01-23', 'D18CQAT01-N', 'CN2'),
('N18DCAT078', 'Đoàn Anh Tuấn', '2000-04-08', 'D18CQAT02-N', 'CN2'),
('N18DCAT079', 'Đỗ Anh Tuấn', '2000-10-16', 'D18CQAT01-N', 'CN2'),
('N18DCAT081', 'Trần Văn Tư', '2000-06-13', 'D18CQAT01-N', 'CN2'),
('N18DCAT082', 'Phạm Thạch', '2000-06-25', 'D18CQAT02-N', 'CN2'),
('N18DCAT083', 'Nguyễn Văn Thành', '1999-05-03', 'D18CQAT01-N', 'CN2'),
('N18DCAT084', 'Nguyễn Thành Thắng', '2000-07-28', 'D18CQAT02-N', 'CN2'),
('N18DCAT085', 'Nguyễn Mạnh Thìn', '2000-04-28', 'D18CQAT01-N', 'CN2'),
('N18DCAT087', 'Vũ Phạm Đức Thịnh', '2000-06-10', 'D18CQAT01-N', 'CN2'),
('N18DCAT088', 'Nguyễn Thanh Thông', '2000-06-20', 'D18CQAT02-N', 'CN2'),
('N18DCAT089', 'Lê Xuân Thu', '2000-08-29', 'D18CQAT01-N', 'CN2'),
('N18DCAT091', 'Võ Thị Hoa Tranh', '2000-05-13', 'D18CQAT01-N', 'CN2'),
('N18DCAT092', 'Phạm Minh Trí', '2000-09-27', 'D18CQAT02-N', 'CN2'),
('N18DCAT093', 'Trần Công Trí', '2000-03-21', 'D18CQAT01-N', 'CN2'),
('N18DCAT094', 'Trần Nguyên Thiên Trí', '2000-05-25', 'D18CQAT02-N', 'CN2'),
('N18DCAT095', 'Lềnh Hà Bảo Trọng', '2000-04-26', 'D18CQAT01-N', 'CN2'),
('N18DCAT097', 'Lê Thành Trung', '2000-04-17', 'D18CQAT01-N', 'CN2'),
('N18DCAT098', 'Trịnh Văn Trung', '2000-01-24', 'D18CQAT02-N', 'CN2'),
('N18DCAT099', 'Nguyễn Sỹ Trường', '2000-11-18', 'D18CQAT01-N', 'CN2'),
('N18DCAT100', 'Trần Quốc Trượng', '2000-11-20', 'D18CQAT02-N', 'CN2'),
('N18DCAT102', 'Huỳnh Tiến Vĩ', '2000-12-06', 'D18CQAT02-N', 'CN2'),
('N18DCAT103', 'Huỳnh Đình Vũ', '2000-09-03', 'D18CQAT01-N', 'CN2'),
('N18DCAT104', 'Nguyễn Thị Lan Vy', '2000-09-11', 'D18CQAT02-N', 'CN2'),
('N18DCAT105', 'Mai Xuân Ý', '2000-11-22', 'D18CQAT01-N', 'CN2'),
('N18DCAT106', 'Phan Thị Như Ý', '2000-10-21', 'D18CQAT02-N', 'CN2');