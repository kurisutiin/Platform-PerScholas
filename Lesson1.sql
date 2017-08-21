create table department1
(department_id number primary key, 
 department_name varchar(30), 
 department_block_number number);

create table student1
(student_id number primary KEY, 
student_name varchar(30), 
address varchar(40), city varchar(30), 
department_id number references department1(department_id));

create table staff0
(staff_id number primary key not null, 
staff_name varchar(30), 
department_id number 
references department1(department_id));

create table subject1
(subject_id number primary key not null, 
 student_name varchar(30), 
 student_code varchar(10),
 staff_id number,
 foreign key (staff_id) references staff0(staff_id));

create table mark
(value1 number primary key, 
 subject_id number,
 foreign key (subject_id) references subject1(subject_id), 
 student_id number, 
 foreign key (student_id) references student1(student_id));

alter table student1
add email_id varchar(20);

alter table student1
modify email_id varchar(50);

alter table student1
drop column email_id;--<-will not allow


