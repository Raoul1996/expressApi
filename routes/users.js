let express = require('express')
let router = express.Router()
let app = express()
const SECRET_STRING = 'vue-login-demo'
app.set('jwtTokenSecret', SECRET_STRING)
let User = require('../models/users')
const ERR = 401
const NOT_FOUND = 10001
const ERR_OK = 200
let auth = require('../authenticate')
// 解析req.body
/*-------------------token------------------*/
// http://blog.leanote.com/post/what722@163.com/%E5%AE%9E%E7%8E%B0%E5%9F%BA%E4%BA%8E-token-%E7%9A%84%E8%AE%A4%E8%AF%81%E5%BA%94%E7%94%A8
let moment = require('moment')
let jwt = require('jwt-simple')
let jwtauth = require('../middleware/jwtauth')
let corsHeader = require('../middleware/cors')
router.all('*', [corsHeader])
router.all('/password', [jwtauth])
/**
 * @api {post} /users/login Login
 * @apiName Login
 * @apiGroup Users
 * @apiParam {String} mobile the phone number
 * @apiParam {String} password the password
 * @apiSuccessExample {json} Success-Response
 * {"code":0,"data":{"user":{"userId":21,"mobile":"1"},"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxIiwiZXhwIjoxNTAwNzk1OTQ2MzI2fQ.2n6zP3wWR9Wt9I0eu9ViqSmpAFsegrpohb-dBddQNBo"}}
 **/
router.post('/login', function (req, res) {
  let mobile = req.body.mobile
  let password = req.body.password
  if (mobile && password) {
    User.findOne({mobile: mobile}, (err, user) => {
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
      if (user.password !== password) {
        return res.status(ERR).json({
          'code': NOT_FOUND,
          'data': {
            'msg': 'incorrect password'
          }
        })
      }
      // User has authenticated ok
      let expires = moment().add(7, 'days').valueOf()
      let token = jwt.encode({
        iss: req.body.mobile,
        exp: expires
      }, app.get('jwtTokenSecret'))
      res.status(200).json({
        'code': 0,
        'data': {
          'user': {
            'userId': 21,
            'mobile': req.body.mobile
          },
          'token': token
        }
      })
    })

  } else {
    res.status(200).json({
      'code': 10001,
      'data': {
        'msg': 'login error,please check your data we need the mobile and password'
      }
    })
  }
})
/**
 *
 */
router.get('/user', function (req, res) {
  User.find({}, (err, user) => {
    if (err) console.log(err)
    res.status(200).json({
      data: user
    })
  })
})
/**
 * @api {post} /users/register Register
 * @apiName Register
 * @apiGroup Users
 * @apiParam {String} mobile the phone number
 * @apiParam {String} password the password
 * @apiSuccessExample {json} Success-Response
 * {"code":0,"data":{"msg":"register successful","mobile":"10086","password":"112345"}}
 * @apiErrorExample {json} Error-Response
 * {"code":20001,"data":{"msg":"user exists"}}
 * * @apiErrorExample {json} Error-Response
 * {"code":10001,"data":{"msg":"register err"}}
 **/
router.post('/register', function (req, res) {
  // console.log(req.body)
  let mobile = req.body.mobile
  let password = req.body.password
  if (mobile && password) {
    let users = new User({mobile, password})
    User.findOne({mobile: mobile}, (err, user) => {
      if (err) {
        return res.status(ERR).json({
          'code': NOT_FOUND,
          'data': {
            'msg': 'register err'
          }
        })
      }
      if (user) {
        return res.status(ERR).json({
          'code': 20001,
          'data': {
            'msg': 'user exists'
          }
        })
      } else {
        users.save(function (err) {
          if (err) {
            console.log(`save error,${err}`)
          }
          console.log('save successful')
        })
        res.status(ERR_OK).json({
          'code': 0,
          'data': {
            'msg': 'register successful',
            'mobile': req.body.mobile,
            'password': req.body.password
          }
        })
      }
    })
  } else {
    res.status(ERR_OK).json({
      'code': 10001,
      'data': {
        'msg': 'register error,please check your data'
      }
    })
  }
})
/**
 * @api {post} /users/forget Forget
 * @apiName Forget
 * @apiGroup Users
 * @apiParam {String} mobile the phone number
 * @apiParam {String} newPassword the new password
 * @apiSuccessExample {json} Success-Response
 * {"code":0,"data":{"msg":"reset password successful","mobile":"1","newPassword":"1"}}
 * * @apiErrorExample {json} Error-Response
 * {"code":10001,"data":{"msg":"reset password error,please check your data"}}
 **/
router.post('/forget', function (req, res) {
  console.log(req.body)
  let ok = req.body.mobile && req.body.newPassword
  if (ok) {
    res.status(200).json({
      'code': 0,
      'data': {
        'msg': 'reset password successful',
        'mobile': req.body.mobile,
        'newPassword': req.body.newPassword
      }
    })
  } else {
    res.status(200).json({
      'code': 10001,
      'data': {
        'msg': 'reset password error,please check your data'
      }
    })
  }
})
/**
 * @api {post} /users/password Password
 * @apiName Password
 * @apiDescription 这个接口需要 token
 * @apiGroup Users
 * @apiParam {String} mobile the phone number
 * @apiParam {String} newPassword the new password
 * @apiParam {String} oldPassword the old password
 * @apiSuccessExample {json} Success-Response
 * {"code":0,"data":{"msg":"reset password successful","mobile":"1","newPassword":"1","oldPassword":"1"}}
 **/
router.post('/password', function (req, res) {
  let ok = req.body.mobile && req.body.oldPassword && req.body.newPassword
  if (ok) {
    res.status(200).json({
      'code': 0,
      'data': {
        'msg': 'change password successful',
        'mobile': req.body.mobile,
        'oldPassword': req.body.oldPassword,
        'newPassword': req.body.newPassword
      }
    })
  } else {
    res.status(200).json({
      'code': 10001,
      'data': {
        'msg': 'change password error,please check your data'
      }
    })
  }
})
module.exports = router
