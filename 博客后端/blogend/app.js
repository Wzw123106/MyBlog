/*
 * @Author: chiLi
 * @Date: 2021-06-08 14:07:44
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

// 解析插件
const bodyParser = require('body-parser');

// 解决本地照片过大的问题 
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// 跨域模块
let cors = require('cors');
// 解决跨域 中间件
app.use(cors());





// 改写
var http = require('http');
var server = http.createServer(app);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// module.exports = app;
server.listen('3000')
