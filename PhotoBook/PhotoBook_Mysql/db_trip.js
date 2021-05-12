const control = require('./db_Proc');

var id = 't_002';
var fday = '20210617';
var lday = '20210621';

var table = "trip";
var data = {
    tripid : id,
    firstday : fday,
    lastday : lday
};

control.insertData(table, data);