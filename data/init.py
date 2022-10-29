import mysql.connector

# con = mysql.connector.connect(  host="dast-db.ccmgacqdchfg.ap-southeast-1.rds.amazonaws.com", user="admin", password="DASTadmin", database='data')
con = mysql.connector.connect(host="localhost", user="root",  password="root",  database='data')
cursor = con.cursor()

cursor.execute("delete from students", ())
con.commit()

cursor.execute("delete from faculty", ())
con.commit()

cursor.execute("delete from class", ())
con.commit()

cursor.execute("delete from subjects", ())
con.commit()

cursor.execute("delete from academy", ())
con.commit()

sql = """INSERT INTO subjects VALUES
('INT1319','Hệ điều hành'),
('INT14107','Kiểm thử xâm nhập'),
('INT14102','Phát triển ứng dụng cho các thiết bị di động'),
('INT1483','An toàn mạng nâng cao'),
('INT1342','Phân tích và thiết kế hệ thống thông tin'),
('INT1482','An toàn mạng')"""
cursor.execute(sql, ())

con.commit()
print(cursor.rowcount, "record inserted.")

sql = """INSERT INTO class VALUES
('D18CQAT01-N','ĐHCQ - Ngành An toàn thông tin - 2018-1'),
('D18CQAT02-N','ĐHCQ - Ngành An toàn thông tin - 2018-2')"""
cursor.execute(sql, ())

con.commit()
print(cursor.rowcount, "record inserted.")

sql = """INSERT INTO faculty VALUES
('CN2','Công Nghệ Thông Tin 2');"""
cursor.execute(sql, ())

con.commit()
print(cursor.rowcount, "record inserted.")

sql = """
INSERT INTO students(id, name, birthDate, idClass, idFaculty, password) VALUES
('N18DCAT054', 'Nguyễn Thị Ánh Nguyệt', '2000-09-25', 'D18CQAT02-N', 'CN2', 'f85401bcf4a429aca4738f64e50c0a2925398d54a006ad2d6638f64f5392fb1da2c506d2c93bc98c775c874d4eba7940034c5e8bb37eef46dfbf8f5ee741f7c9'),
('N18DCAT057', 'Phạm Thị Tuyết Nhi', '2000-02-17', 'D18CQAT01-N', 'CN2', '2ddc87b99cfa6242fc25c9cdd96ff29ac8fda2338000a5817c55d797082f8617812e2b3a94cadba75b8cbabf11f401adc399f205dd9d859e8887cd392e4c13ea'),
('N18DCAT058', 'Hồ Minh Phong', '2000-11-14', 'D18CQAT02-N', 'CN2', '4519739c0700e594eac7b19ca51f2ca4faeb6247932a16b0cf078e2c9913581fe0657d42e3628ac8f62d750c4cf24d98ac44c635076202f25eb4bb520b05e109'),
('N18DCAT059', 'Lê Thị Mỹ Phụng', '2000-06-27', 'D18CQAT01-N', 'CN2', '506e85c607f1f5290ec73a7713c9358d564d0eb8433dfa92d94532828304d637639fe7f850ea7dab98852591ef1cfcfef63b70030399738196118d65cd69d420'),
('N18DCAT061', 'Phan Hoài Phương', '2000-06-16', 'D18CQAT01-N', 'CN2', '32c9172f364164120923fb322c16085646f260f64000fe1428e37877e5b46278c4148c5fa5aeb77275bc79f9c93d2d4dd12c2d7eed6374ca1e4bc5649856e0f7'),
('N18DCAT062', 'Lê Nhựt Quang', '2000-03-18', 'D18CQAT02-N', 'CN2', '5fdaf142d836648f64b589f35110bc03ee9a35d59d7add62d6a7704c095c9770dc4861216268d41303a88c945ae0feb60d6a2a155ce61185b56fa2e4f8a46282'),
('N18DCAT063', 'Nguyễn Ngọc Quang', '2000-08-10', 'D18CQAT01-N', 'CN2', '726e3d1b8e4dbbb7e8377e942082a171202ff01f52a7a66f1aa6ef52e5ae0291874b4beb2136587a46dabba7114babbb263994ab661a9c706e44e004444e24bc'),
('N18DCAT064', 'Phạm Hoàng Quý', '2000-12-04', 'D18CQAT02-N', 'CN2', 'e401f697e6e64aae3aa0d8c10aff5a5fbf6d54842ea3bc83f515ca2f2cfdeed90ee729eaacd7fd58e7c174c787654357511af0011c44952df265d72f6be5c839'),
('N18DCAT065', 'Nguyễn Đức Quỳnh', '2000-05-18', 'D18CQAT01-N', 'CN2', 'd07a04863556a10f9a90e961ee18250a7519b341baad8fb0b07a6a45ac953e243818ce061726de3a82b707bb119ff078db9bafaa1874c4697331d8357c7da2de'),
('N18DCAT066', 'Dương Công Sáng', '2000-04-13', 'D18CQAT02-N', 'CN2', '232bddfdbb4130798a0e915e4bd09abeb38c4a7c4ed680cf4ce68adb7baf13363d95a9488e5e4c124302f19ac9491bfc1db618902e034216a7a7744caa5bbaa8'),
('N18DCAT067', 'Trần Thị Thanh Tâm', '2000-01-30', 'D18CQAT01-N', 'CN2', '4b7ca2bbe2db7710b8ef2845f9360816af010cf71416724f03809e1ffb830ef74ca0dbb6e9430615163810a43261aa496176b504207bd1714ec98327f373b044'),
('N18DCAT068', 'Nguyễn Nhật Tân', '2000-08-02', 'D18CQAT02-N', 'CN2', 'b1fbd026ee2e6d71ab7f57881bc176574a6736d1f2fbc2055698d3664198e825ef704d43671d63fbee7f4857d9b4ea350654c97c7491ff34c771029a88ee71da'),
('N18DCAT069', 'Lương Minh Tiến', '2000-11-16', 'D18CQAT01-N', 'CN2', '794cd8810da434e297d3cc06f84df3022ede61e4dbc50ec5c2015cfe0b4b9f3d72f34a704af756a74bceb34ab77b71e324f950adf2b74daaa580899f205dcdaa'),
('N18DCAT071', 'Nguyễn Trung Tín', '2000-07-29', 'D18CQAT01-N', 'CN2', '95c59c81338d66c8212231b92167dd8df053abd12908cb1560de3230acd4f8056bbd8c0ac9449c88500c42dad3b78bb28fd34ac7b904936ccf27a5759e6bd970'),
('N18DCAT073', 'Nguyễn Ngọc Tịnh', '2000-05-18', 'D18CQAT01-N', 'CN2', 'd07a04863556a10f9a90e961ee18250a7519b341baad8fb0b07a6a45ac953e243818ce061726de3a82b707bb119ff078db9bafaa1874c4697331d8357c7da2de'),
('N18DCAT074', 'Lê Phạm Công Toàn', '2000-02-18', 'D18CQAT02-N', 'CN2', '1349a19d2af9c8a3aede5a6729c5c844c9e750e44beb542650cbe8154a570d4b9c8e074cb0db4aa722dca7ea78021d14c3db20ceaa0019f77599da809f34d206'),
('N18DCAT076', 'Trần Bảo Toàn', '2000-07-05', 'D18CQAT02-N', 'CN2', '291508aac371f93daa12ac9e6b3f2734c809ab74d83c9d5f55536f93dca3d8e19a956b76bc66bbe30531599c381a2dee360e519a23ea46cfd69f967460bbc134'),
('N18DCAT077', 'Nguyễn Văn Thanh Tú', '2000-01-23', 'D18CQAT01-N', 'CN2', '9ba1dd289f44710db6427686b6e475b6d79c15851d517e05e59f6a511922ee91018bc6a315f89cf5450acef5a8ca6ca75189dc2165ba0a5ed248f0f87c82bf78'),
('N18DCAT078', 'Đoàn Anh Tuấn', '2000-04-08', 'D18CQAT02-N', 'CN2', 'c311552619b3ec43eee7af5a959fb704466c93d162659a95d8da71bd5a3130f48fb5c02ca96f17246b9db60d89df08051c1f976d4eb58bd0a60be3d371895670'),
('N18DCAT079', 'Đỗ Anh Tuấn', '2000-10-16', 'D18CQAT01-N', 'CN2', '399c85ba2758a23547d59ce338084685dd1e5368cba55c9f5a3f38ae1c7cd5af39828a8d8f1cb844fcef1beaf55d89c2a69f3da0e8e9fc7d701ad84a2ea67512'),
('N18DCAT081', 'Trần Văn Tư', '2000-06-13', 'D18CQAT01-N', 'CN2', '3b25d1b5bd13924067ec620ac4db9340b62176680dab5b77f528c2a1943dadcc3ad33f4e4ecd5ba678606866adaf9d93742ea8e6a06ec95b1de2259a85bc5718'),
('N18DCAT082', 'Phạm Thạch', '2000-06-25', 'D18CQAT02-N', 'CN2', '6279deda507e4162b5e0d85a8a796bcafdc24b4e2e47bda575c831b55e5482a5af17510fde65c3141ad73be9f079dfe58b7234cbebd37a091c897482578b215c'),
('N18DCAT083', 'Nguyễn Văn Thành', '1999-05-03', 'D18CQAT01-N', 'CN2', '97d26f00de931ded8b5140cf88b3a1b5f1afc0d71acaef591d815d3ce54363e5d05bb4642b18427861d4c9e777790ec2efd631b3ddd9f0453bbbd1b0e4bede5f'),
('N18DCAT084', 'Nguyễn Thành Thắng', '2000-07-28', 'D18CQAT02-N', 'CN2', '7c5c8a3c730ad5a7661fb044c7003bfe4f783c4936363add16179df24726cf349930a3f8bb03cd03ef479f2e145bc2512dd1fc6392d7a5ed7b42ad6e5a2cdb02'),
('N18DCAT085', 'Nguyễn Mạnh Thìn', '2000-04-28', 'D18CQAT01-N', 'CN2', '5c88bee40b22b8e46c9456fa3e649d6730d4edbb9421e31b3730b69462374f2fea751279412f6709829a571dea01e72546b472d51045e29b0252c4452416b311'),
('N18DCAT087', 'Vũ Phạm Đức Thịnh', '2000-06-10', 'D18CQAT01-N', 'CN2', '35d1f7a7c5f5420090884e9383d1608538b15683756ad7e861cfc10d6b235046b70685454239d15418b9f51dfd60efef5f7a66271ad8986151659ddbebeb7df8'),
('N18DCAT088', 'Nguyễn Thanh Thông', '2000-06-20', 'D18CQAT02-N', 'CN2', 'dd310342d6cb211d48d1fcd2fe4a00816099c186dbbfbfda003df581d918eda8d300803fdccfe2a06be0954689a8d5dcafc3a422d88fdfdc93f230d1e3ca646c'),
('N18DCAT089', 'Lê Xuân Thu', '2000-08-29', 'D18CQAT01-N', 'CN2', '90776d0c8d39de63afd39d36c89fe61ed8b414fe805839f10c1033357f28d7a14968d5d96f4d1ae2821a0471d261c376a8d6113d32d17225b1c990503b8746b5'),
('N18DCAT091', 'Võ Thị Hoa Tranh', '2000-05-13', 'D18CQAT01-N', 'CN2', '2643f9626219b9daaab0fb745755885555b652781cd22231b03217ea172ae736d0f3ad16ceea01431791208588e12bbdfc141f2d5ced79665364e4d9bf63e1f2'),
('N18DCAT092', 'Phạm Minh Trí', '2000-09-27', 'D18CQAT02-N', 'CN2', '6b2889f9734c364f6086919e256a935193e80ad63b058c58d58d43f58b34c629785d07885f40ef1261712b8778bc0073e325717a70803ce07152c1d69cb55bd1'),
('N18DCAT093', 'Trần Công Trí', '2000-03-21', 'D18CQAT01-N', 'CN2', '1fbd078f55f3557af93c27aa1dcfe2d035f88c5bb85bcf1f10d742fcfa6aa98b93815716982f46333c7488d65271ac7ab5eb74898f0e5e7f4b6bbbfdb72bbfd4'),
('N18DCAT094', 'Trần Nguyên Thiên Trí', '2000-05-25', 'D18CQAT02-N', 'CN2', 'e304ea457921c33ca8e534349c9689467d052fd9acb43e178963c437c2a92c80ad660a0f4701c463528345c78294f7f19bab28b25517481efe1c876b2095b07a'),
('N18DCAT095', 'Lềnh Hà Bảo Trọng', '2000-04-26', 'D18CQAT01-N', 'CN2', '2ccc3bbc5b70bde0354f826988427cd7f36a39d7a857cedb0e4289ed613ce4fb9b8dcb2e3171ebd47179638a5c4259b9e98417e97173f7f738bd8d7edd626e52'),
('N18DCAT097', 'Lê Thành Trung', '2000-04-17', 'D18CQAT01-N', 'CN2', 'e2961bfaecbc072dcf93487c4b3140ca67ef306ab27ed9c50aa3905b13f6f89b48b15c0862e4d41259335d8ed8872a19915ff32fb0f258d8bc1a990273e3f8c6'),
('N18DCAT098', 'Trịnh Văn Trung', '2000-01-24', 'D18CQAT02-N', 'CN2', '52cb635e7eb8ce96c1cc34698380fea512325714a9aeb51ee533ec183fc05ca66b8f27443a79159b621f8fb3d43113645f1a9e5228f71b4d3b3328451794df14'),
('N18DCAT099', 'Nguyễn Sỹ Trường', '2000-11-18', 'D18CQAT01-N', 'CN2', '7b2163b18601556ba7d3dc8993d01383f80f7a8c964b6b2af3fb9be81bebc862970515c284c3f8fc5843103ba056f7638ead2e96634f0713d96c169e95a6cec7'),
('N18DCAT100', 'Trần Quốc Trượng', '2000-11-20', 'D18CQAT02-N', 'CN2', 'c1937c7dbacafc60aa4af5d31cb25544d7883738b040d678a8f04b30354fc215657e69b259c120a3e3f5fc2c80321f134473e5dd54ef3aa822e959072eb264b0'),
('N18DCAT102', 'Huỳnh Tiến Vĩ', '2000-12-06', 'D18CQAT02-N', 'CN2', 'ceb784586dcbd765a589fcbf61020770f5f5a341f54cf3e53ca9b7c48b1bc05874ca4b63752251c1223ceb06c2bfcdf720ccddb1cfa5e85849ca288285289018'),
('N18DCAT103', 'Huỳnh Đình Vũ', '2000-09-03', 'D18CQAT01-N', 'CN2', '902148bbd871d8b27ba96027275539bcb59952d848e6fd53f294089c8c0dac96e9323ec4e60fb4234aa00807d2b0cb3eef1b0a4618c5e0cdeafdd4a95fce3df6'),
('N18DCAT104', 'Nguyễn Thị Lan Vy', '2000-09-11', 'D18CQAT02-N', 'CN2', '3d2ac962c58e256b77c41231ad05d3fafacbb7141fcd2ea10f4f397e76364d1d720e4d375f0e6931778c6ec9b82578976da4a2faa877ab556e3c8f3c0aaafe56'),
('N18DCAT105', 'Mai Xuân Ý', '2000-11-22', 'D18CQAT01-N', 'CN2', 'e2fc2b7eb612f06001b4246b088ecb3a6da41df814f4c7ce8320266bed9275fef31942635d1f73f6ca82bbb79046c074a7191d28367362b68311f8ce9b322461'),
('N18DCAT106', 'Phan Thị Như Ý', '2000-10-21', 'D18CQAT02-N', 'CN2', '1c5907d32227f86e4e4871b8e5484a00a929b3d02a92ad38ea532906f70ef73c77a7f1f1b70091caed6501d5eb0762a11a9d376a4ad962bf70de3d1362d542b0')"""
cursor.execute(sql, ())

con.commit()
print(cursor.rowcount, "record inserted.")

sql = """INSERT INTO academy VALUES
('N18DCAT097','INT1319','HK1-2020',5),
('N18DCAT097','INT14107','HK2-2022',7),
('N18DCAT097','INT14102','HK1-2022',5),
('N18DCAT097','INT1483','HK1-2022',5),
('N18DCAT097','INT1342','HK1-2022',5),
('N18DCAT057','INT1319','HK1-2020',5),
('N18DCAT057','INT14107','HK2-2022',7),
('N18DCAT057','INT14102','HK1-2022',10),
('N18DCAT057','INT1483','HK1-2022',10),
('N18DCAT057','INT1342','HK1-2022',10)"""
cursor.execute(sql, ())

con.commit()
print(cursor.rowcount, "record inserted.")


"""
('INT1319','Hệ điều hành'),
('INT14107','Kiểm thử xâm nhập'),
('INT14102','Phát triển ứng dụng cho các thiết bị di động'),
('INT1483','An toàn mạng nâng cao'),
('INT1342','Phân tích và thiết kế hệ thống thông tin'),
('INT1482','An toàn mạng')"""


sql = """INSERT INTO users_admin VALUES
(1,'admin','c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec');"""
cursor.execute(sql, ())

con.commit()
print(cursor.rowcount, "record inserted.")