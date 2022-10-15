CREATE DATABASE data;

USE data;

CREATE TABLE users(
    id INT AUTO_INCREMENT, 
    username TEXT, 
    passwd TEXT,
    PRIMARY KEY(id)
);

CREATE TABLE subjects(
    id INT AUTO_INCREMENT, 
    code TEXT, 
    name TEXT,
    PRIMARY KEY(id)
);

INSERT INTO subjects VALUES
(1,'INT1339','Ngôn ngữ lập trình C++'),
(2,'BAS1122','Tư tưởng Hồ Chí Minh'),
(3,'BAS1227','Vật lý 3 và thí nghiệm'),
(4,'BAS1144','Tiếng anh A2.2'),
(5,'INT1358','Toán rời rạc 1'),
(6,'BAS1226','Xác suất thống kê');


INSERT INTO users VALUES
(1,'admin','admin'),
(2,'Anna','us3rpasswd1'),
(3,'batman','us3rpasswd2'),
(4,'Adm1n','St0ngP4sswd@!'),
(5,'superman','us3rpasswd5'),
(6,'victim','password'),
(7,'attacker','password');

