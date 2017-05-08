/**
 * Created by baoba on 2017/5/7.
 * in this script .I will try to use express middleware
 * Let's go
 */
var express = require('express')
var app = express()
// use middleware
app.use(function (req, res, next) {
  console.log('1')
  next()
})
app.use(function (req, res, next) {
  console.log('2')
  next()
})
app.use(function (req, res, next) {
  console.log('3')
  next()
})
app.use(function (req, res, next) {
  console.log('4')
  res.send('hello')
  next()
})

app.listen(3001)
