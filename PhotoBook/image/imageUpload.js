//우선 첨부파일을 multer를 이용해서 객체로 만들고, 이를 form-data로 감싸서 axios를 통해 전송합니다
const axios = require('axios');
const https = require('https');
const FormData = require('form-data');
const multer = require('multer');
const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

app.use('/', router);

const upload = multer();
app.post(
    '/upload', //:filename
    upload.single('img'), //multer로 업로드 파일 처리
    async(req, res, next) => { 
        try{
            const uploadimg = multer({
                storage: multer.diskStorage({
                    destination : function(req, file, cb){
                        cb(null, 'testupload/')
                },
                filename : function(req, file, cb){
                    cb(null, new Date().valueOf + path.extname(origianlname));
                }
            })
            });

            //다른 서버로 전송
            const result = await axois.post(
                'http://192.168.0.11:3000',
                uploadimg,
                {
                    Headers : {
                        ...formData.getHeaders(),
                        "Content-Length" : formData.getLengthSync(),
                    },
                    httpsAgent : new https.Agent({
                        rejectUnauthorized : false,
                    }),
                }
            );
            console.log(res.status(200).json(result, data));
        }catch(err) {
            console.log(err);
            res
                .status(500)
                .send(`${err}`);
        }
    }
);



// app.post('/up', upload.single('img'), (req, res) => {
//     console.log(req.files);
// });