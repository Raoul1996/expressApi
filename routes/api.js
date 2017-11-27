const express = require('express')
const router = express.Router()
const corsHeader = require('../middleware/cors')
router.all('*', [corsHeader])
/**
 * @api {post} /api/changeMobile changeMobile
 * @apiName changeMobile
 * @apiGroup api
 */
router.post('/changeMobile', function (req, res, next) {
  res.json({
    'code': 0,
    'data': {
      'successful': 'your need set the oldMobile newMobile password and code in the request body'
    }
  })
})
router.post('/login', function (req, res, next) {
  res.json({
    'code': 0,
    'data': {
      'successful': 'login successful',
      'token': 'this is the test token'
    }
  })
})
router.post('/register', function (req, res, next) {
  res.json({
    'code': 0,
    'data': {
      'successful': 'register successful'
    }
  })
})
router.get('/vote', function (req, res, next) {
  res.json(
    {
      "code": 0,
      "data": {
        "list": [{
          "id": 90,
          "title": "\u8bf7\u5927\u5bb6\u4e3a\u6211\u4eec\u6295\u7968",
          "type": 2,
          "startAt": 1509705293199,
          "endAt": 1512297296114,
          "isPublic": 1,
          "maxChoose": 2,
          "hasPic": 0
        }, {
          "id": 89,
          "title": "\u6211\u7684\u5199\u5b8c\u4e86\uff0cbug\u96be\u514d",
          "type": 1,
          "startAt": 1509705164598,
          "endAt": 1541241170487,
          "isPublic": 0,
          "maxChoose": 1,
          "hasPic": 0
        }, {
          "id": 84,
          "title": "\u5403\u5403\u5403",
          "type": 1,
          "startAt": 1509627889276,
          "endAt": 1541163892865,
          "isPublic": 1,
          "maxChoose": 1,
          "hasPic": 0
        }, {
          "id": 56,
          "title": "kko",
          "type": 1,
          "startAt": 1508426044147,
          "endAt": 1513523648822,
          "isPublic": 0,
          "maxChoose": 2,
          "hasPic": 0
        }], "count": 4
      }
    }
  )
})
router.get('/detail/:id', function (req, res, next) {
  res.json(
    {
      "code": 0,
      "data": {
        "id": 56,
        "title": "kko",
        "options":[
          {"id":1,"title":"又没网了"},
          {"id":2,"title":"mother fucker!"}
        ],
        "type": 1,
        "startAt": 1508426044147,
        "endAt": 1513523648822,
        "isPublic": 0,
        "maxChoose": 2,
        "hasPic": 0
      }
    }
  )
})
/**
 * @api {post} /api/changeMobile changeGender
 * @apiName changeGender
 * @apiGroup api
 */
router.post('/change', function (req, res, next) {
  res.json({
    'code': 0,
    'data': {
      'mobile': '15433613546',
      'male': 1
    }
  })
})
/**
 * @api {post} /api/verify verifyCode
 * @apiName verify Code
 * @apiGroup api
 */
router.post('/verify', function (req, res, next) {
  res.json(
    {
      'code': 0,
      'data': {
        'code': '1234'
      }
    }
  )
})
/**
 * @api {get} /api/book Book
 * @apiName book
 * @apiGroup api
 */
router.get('/book', function (req, res, next) {
  res.send('book')
})
/**
 * @api {get} /api/*man *man
 * @apiName *man
 * @apiGroup api
 */
router.get('/usr/*man', function (req, res, next) {
  res.send('usr')
})
/**
 * @api {get} /api/animals? animals?
 * @apiName animals?
 * @apiGroup api
 */
router.get(/animals?$/, function (req, res, next) {
  res.send('animals')
})
/**
 * @api {get} /api/employee/:uid/:age employee
 * @apiName employee
 * @apiGroup api
 */
router.get('/employee/:uid/:age', function (req, res, next) {
  res.json(req.params)
})
module.exports = router
