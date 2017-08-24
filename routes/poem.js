/**
 * It's just a mock server.
 * @type {*|createApplication}
 */


let express = require('express')
let router = express.Router()
let app = express()
let corsHeader = require('../middleware/cors')
router.all('*', [corsHeader])
/**
 * @api {get} /poem/getNewsList getNewsList
 * @apiName getNewsList
 * @apiGroup poem
 */
router.get('/getNewsList', function (req, res, next) {
  res.json({
    'code': 0,
    'data': [
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '首届泰城高校文化艺术交流会举办',
      '无情对“联”欢二十一期',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳',
      '甘肃政法学院大学生崇文诗联社受邀参加河柳'
    ]
  })
})
router.get('/getBanList', function (req, res, next) {
  res.json({
      'code': 0,
      'data': [{
        'id': '1',
        'url': 'http://ong7eqtw5.bkt.clouddn.com/5960d66a2115a',
        'sort': '1',
        'created_at': '0',
        'is_del': '0'
      }, {
        'id': '2',
        'url': 'http://ong7eqtw5.bkt.clouddn.com/59618d876ca3b',
        'sort': '2',
        'created_at': '0',
        'is_del': '0'
      }],
      'error': [],
      'message': 'SUCCESS'
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
