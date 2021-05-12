const control = require('./db_Proc');

var tripid = 't_002';
var userid = '1213';

var table = "companion";
var data = {
    tripid : tripid,
    userid : userid
};

control.insertData(table, data);
