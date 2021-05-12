const ExifImage = require('exif').ExifImage;
const getConnection = require('./connectionPool');
const async = require('async');
const moment = require('moment');


var img = 'C:\\nodejs\\PhotoBook\\image\\test\\20210221_115725.jpg';  //서버에서 받아오기

let table = "trip";
var data={
    photoid : '',
    path : '',
    photodate : '',
    latitude : '',
    longitude : '',
    tripid : ''
};

const trans = function(num){ //위경도 계산 함수
    var calc = num[0] + ((num[1]/60) + (num[2]/3600));
    return calc;
}


function settable(img, table){

    try {//이미지 메타정보 빼기
        new ExifImage({image : img}, function (error, exifData) {
            if (error){
                console.log('Error: '+error.message);
            }

            data.photodate = moment(exifData.exif.CreateDate, 'YYYY-MM-DD'); //date형식으로 변경
            data.latitude = exifData.gps.GPSLatitude;
            data.latitude = trans(data.latitude);
            data.longitude = exifData.gps.GPSLongitude;
            data.longitude = trans(data.longitude);
        });
    } catch (error) {
        console.log('Error: ' + error.message);
    }


    getConnection((err, conn) => { //tripid가져오기
        if (err) console.log(err);
        else console.log('DB연결 성공');
        
        conn.query('select * from ' + table, function(err, result){
            if(!err){
                console.log("DB테이블에 저장된 값을 가져옴");
                for(var i in result){                    
                    if(data.photodate >= result[i].firstday && data.photodate <= result[i].lastday){
                    data.tripid = result[i].tripid;
                    break;
                    }
                }
            }
            else console.log("DB테이블에 저장된 값을 가져오는데 실패 " + err);     
        });
        conn.release();        
    });  
} 

function sycn(img, table) {
    Promise.resolve()
        .then(() => {
            settable(img, table)  
            setTimeout(() => console.log(data),2000)     
        }).then(() => {
		    console.log('성공')
	    }).catch(e => {
		    console.log('실패')
            console.error(e)
	})
    
}
sycn(img, table);