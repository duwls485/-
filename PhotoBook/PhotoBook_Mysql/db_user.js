var control = require('./db_Proc');

var id = 0000;
var pwd = 'pwd00';
var name = 'test';
var age = 22;
var tel = '01012453535'; 
var email = 'fff@mulrrre.com'; 

var table = 'user';
var data = {
    userid : id,
    password : pwd,
    name : name,
    age : age,
    tel : tel,
    email : email
};

control.insertData(table, data);
