let express = require('express')
let router = express.Router()
let app = express()
let corsHeader = require('../middleware/cors')
router.all('*', [corsHeader])
router.post('/changeMobile', function (req, res, next) {
  res.json({
    'code': 0,
    'data': {
      'successful': 'your need set the oldMobile newMobile password and code in the request body'
    }
  })
})
router.post('/change', function (req, res, next) {
  res.json({
    'code': 0,
    'data': {
      'mobile': '15433613546',
      'male': 1
    }
  })
})
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
// strings type
router.get('/book', function (req, res, next) {
  res.send('book')
})
// string model
router.get('/usr/*man', function (req, res, next) {
  res.send('usr')
})
// reg type
router.get(/animals?$/, function (req, res, next) {
  res.send('animals')
})
// args
router.get('/employee/:uid/:age', function (req, res, next) {
  res.json(req.params)
})
module.exports = router
