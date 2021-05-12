var control = require('./db_Proc');
const moment = require('moment'); //날짜다루는 라이브러리

var table = "trip_days";
var result = getConnection((err, conn) => {
    if (err) {
        console.log(err);
    }else console.log('DB연결 성공');
    conn.query('select * from ' + table, function(err, result){
        if(!err){ 
            console.log("DB테이블에 저장된 값을 가져옴");
            return result;
        }
        else console.log("DB테이블에 저장된 값을 가져오는데 실패 " + err);
    });
    conn.release();
});

for(var i in result){
    var id = result[i].tripid
    var first = moment(result[i].firstday);
    var last = moment(result[i].lastday);

    var diff = last.diff(first, 'days'); 
    for(var j=0; j<=diff; j++){
        var day = id+"_"+(j+1);
        var date = moment(first).add(j, "d");
        date = new Date(date);

        var data = {
            tripday : day,
            tripdate: date,
            tripid : id
        };              
                
        control.insertData(sql, data);     
    }
}
