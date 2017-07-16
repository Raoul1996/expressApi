let express = require('express')
let app = express()
let path = require('path')
let cors = require('cors')
let favicon = require('serve-favicon')
let logger = require('morgan')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')
let users = require('./routes/users')

const SECRET_STRING = 'vue-login-demo'
app.set('jwtTokenSecret', SECRET_STRING)
let port = process.env.PORT || 3000
let User = require('./models/users')
let connectDB = require('./connect')
connectDB()
let auth = require('./authenticate')
// 解析req.body
let multer = require('multer')
let upload = multer() // 解析 multipart/form-data 类型数据
app.use(bodyParser.json()) // 解析 application/json 类型数据
app.use(bodyParser.urlencoded({extended: true})) // 解析 application/x-www-form-urlencoded 类型数据
/*-------------------token------------------*/
// http://blog.leanote.com/post/what722@163.com/%E5%AE%9E%E7%8E%B0%E5%9F%BA%E4%BA%8E-token-%E7%9A%84%E8%AE%A4%E8%AF%81%E5%BA%94%E7%94%A8
let moment = require('moment')
let jwt = require('jwt-simple')
let jwtauth = require('./middleware/jwtauth')
/*--------------- add something start ----------------------------*/

let apiRoutes = require('./routes/api')
app.use('/api', apiRoutes)
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
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
// app.use('/users', users)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found')
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
