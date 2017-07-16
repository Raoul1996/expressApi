let express = require('express')
let router = express.Router()
let app = express()
let corsHeader = require('../middleware/cors')
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
