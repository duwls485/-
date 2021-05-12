const control = require('./db_Proc');

var userid = '123'; //로그인 userid를 받아와 저장
var tripid = 't_001'; //사용자가 선택한 tripid를 받아와 저장
var id = userid + tripid + 'PB';
var path; //저장경로
var title; //제목
var all; //완선 후 총 페이지 정보 받아오기

var data = {
    photobookid : id,
    title : title,
    allpage : all,
    bookpath : path,
    tripid : tripid,
    userid : userid
};

console.log(data);