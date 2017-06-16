let UserModel = require('../models/users')
let jwt = require('jwt-simple')
let express = require('express')
let app = express()
const SECRET_STRING = 'vue-login-demo'
app.set('jwtTokenSecret', SECRET_STRING)
module.exports = function (req, res, next) {
// coding goes here
  let token = (req.body && req.body.token) || (req.query && req.query.token) || req.headers['x-access-token']
  console.log('in middleware')
  // console.log(token)
  if (token) {
    console.log('has token')
    try {
      let decoded = jwt.decode(token, 'vue-login-demo')
      // handle token here
      console.log('decode successful')
      console.log(decoded)
      if (decoded.exp <= Date.now()) {
        res.end('token has expired', 400)
      }
      console.log('token is ok')
      // UserModel.findOne({_id: decoded.iss},function (err, user) {
      //   req.user = user
      // })
      req.user = '15033'
      console.log('user is ok')
      next()
    } catch (err) {
      console.log(' has a err')
      res.status(200).json({
        'code': 20001,
        'data': {
          'msg': 'token err'
        }
      })
    }
  } else {
    next()
  }
}
process.on('uncaughtException', function (err) {
  console.log(err)
})