//
//                                  _oo8oo_
//                                 o8888888o
//                                 88" . "88
//                                 (| -_- |)
//                                 0\  =  /0
//                               ___/'==='\___
//                             .' \\|     |// '.
//                            / \\|||  :  |||// \
//                           / _||||| -:- |||||_ \
//                          |   | \\\  -  /// |   |
//                          | \_|  ''\---/''  |_/ |
//                          \  .-\__  '-'  __/-.  /
//                        ___'. .'  /--.--\  '. .'___
//                     ."" '<  '.___\_<|>_/___.'  >' "".
//                    | | :  `- \`.:`\ _ /`:.`/ -`  : | |
//                    \  \ `-.   \_ __\ /__ _/   .-` /  /
//                =====`-.____`.___ \_____/ ___.`____.-`=====
//                                  `=---=`
//
//
//
//                          佛祖保佑         永无bug
//
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
// 使用elm restc中间件
const restc = require('restc')
const users = require('./routes/users')
const api = require('./routes/api')
const poem = require('./routes/poem')
const votes = require('./routes/votes')
const onsiteRoom = require('./routes/omsite-room')
const connectDB = require('./connect')
connectDB()
const auth = require('./authenticate')
// 解析req.body
const multer = require('multer')
const upload = multer() // 解析 multipart/form-data 类型数据
app.use(bodyParser.json()) // 解析 application/json 类型数据
app.use(bodyParser.urlencoded({extended: true})) // 解析 application/x-www-form-urlencoded 类型数据
/*--------------- add something end ----------------------------*/
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
// 定义静态目录位置
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use(restc.express())
app.use('/users', users)
app.use('/api', api)
app.use('/poem', poem)
app.use('/onsite-room', onsiteRoom)
app.use('/votes', votes)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
