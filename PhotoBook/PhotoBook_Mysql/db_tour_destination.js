var control = require('./db_Proc');

var day = 't_002_5';
var land = '강릉 중앙시장';
var addr = '강원 강릉시 금성로 21';
var area = '43'; //지역코드 일단 아무거나 넣음...
var country = 'KR';

var table = "tour_destination";
var data = {
    tripday : day,
    landmark : land,
    address : addr,
    areacode : area,
    countrycode : country
};

control.insertData(table, data);