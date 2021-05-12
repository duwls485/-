// npm install multer
const express = require('express');
const router = express.Router();

const multer = require('multer');
const fs = require('fs');
const uploader = multer({dest:'test/'});

router.get('/', (req, res, next) => {
    res.render('index')
});

router.post('/upload_page', uploader.single('홍길동'), (req, res, next) =>{
    console.log('file upload');
    res.redirect('/');
});

module.exports = router;