const SECRET_STRING = 'vue-login-demo'
const ERR = 401
const NOT_FOUND = 10001
const ERR_OK = 200
require('moment')
let express = require('express')
let bodyParser = require('body-parser')
let jwt = require('jwt-simple')
let mongoose = require('mongoose')
let app = express()
let port = process.env.PORT || 3000
let User = require('./models/users')
// set your jwtTokenSecret
app.set('jwtTokenSecret', SECRET_STRING)
// mock data
User.findOne({mobile: user.mobile}, (err, user) => {
  if (err) {
    return res.status(ERR).json({
      'code': NOT_FOUND,
      'data': {
        'msg': 'user not found'
      }
    })
  }
  if (!user) {
    return res.status(ERR).json({
      'code': NOT_FOUND,
      'data': {
        'msg': 'incorrect username'
      }
    })
  }
  if (!user.validPassword(password)) {
    return res.status(ERR).json({
      'code': NOT_FOUND,
      'data': {
        'msg': 'incorrect password'
      }
    })
  }
  // User has authenticated ok
  res.send(ERR_OK)
})
let expires = moment().add('days', 7).valueOf()
let token = jwt.encode({
  iss: user.id,
  exp: expires
}, app.get('jwtTokenSecret'))
res.status(ERR_OK).json({
  token: token,
  expires: expires,
  user: user.toJSON()
})