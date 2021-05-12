const getConnection = require('./connectionPool');

// 사용가능
function db_connect(){
    getConnection((err, conn) => {
        if (err) {
            console.log(err);
        }else {
            console.log('DB연결 성공');
        }
    });
};
module.exports.db_connect = db_connect;


//사용가능
function insertData(table, data){
    getConnection((err, conn) => {
        if (err) {
            console.log(err);
        }else console.log('DB연결 성공');
        conn.query('insert into ' + table +' set ?', data, function(err, result){
            if(result) console.log('DB에 데이터 입력 완료 ');
            else console.log('DB에 데이터 입력 실패 ' + err); 
        });
        conn.release();
    });    
};
module.exports.insertData = insertData;


//코드만 가져가기
function readData(table){
    getConnection((err, conn) => {
        if (err) {
            console.log(err);
        }else console.log('DB연결 성공');
        conn.query('select * from ' + table, function(err, result){
            if(!err){ 
                console.log("DB테이블에 저장된 값을 가져옴");
                // console.log(result);
            }
            else console.log("DB테이블에 저장된 값을 가져오는데 실패 " + err);
        });
        conn.release();
    });
};
module.exports.readData = readData;
