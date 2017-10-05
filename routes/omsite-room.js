const express = require('express')
const router = express.Router()
const corsHeader = require('../middleware/cors')
router.all('*', [corsHeader])

router.get('/available/:bingingId', function (req, res, next) {
  res.json({
    'code': 0,
    'data': [
      {
        'id': 1,
        'room_code': '8808',
        'address': '博威大酒店',
        'type': '三人间',
        'price': 300,
        'add_on': null
      },
      {
        'id': 2,
        'room_code': '8809',
        'address': '博威大酒店',
        'type': '三人间',
        'price': 300,
        'add_on': null
      },
      {
        'id': 3,
        'room_code': '8810',
        'address': '博威大酒店',
        'type': '标准间',
        'price': 300,
        'add_on': null
      },
      {
        'id': 4,
        'room_code': '7868',
        'address': '博威大酒店',
        'type': '三人间',
        'price': 300,
        'add_on': null
      },
      {
        'id': 5,
        'room_code': '4544',
        'address': '博威大酒店',
        'type': '标准间',
        'price': 300,
        'add_on': null
      }
    ],
    'extra': 'mock server'
  })
})

router.post('/:roomId/register', function (req, res, next) {
  res.json({
    'code': 0,
    'extra': 'mock server'
  })
})
router.post('/:roomId/update', function (req, res, next) {
  res.json({
    'code': 0,
    'extra': 'mock server'
  })
})
router.get('/:roomId', function (req, res, next) {
  res.json({
    'code': 0,
    'data': {
      'id': 1,
      'register_id': 6713,
      'binding_id': 1,
      'room_code': '8808',
      'is_occupied': 1,
      'type': '三人间',
      'address': '博威大酒店',
      'capacity': 3,
      'days': 5,
      'price': 300,
      'person1': '刘明',
      'person2': '慈航',
      'person3': '板板',
      'person4': '涛涛',
      'add_on': null,
      'created_at': null,
      'updated_at': '2017-09-09 17:22:12'
    },
    'extra': 'mock server'
  })
})
router.get('/user-list/:schoolId', function (req, res, next) {
  res.json({
    'code': 0,
    'data': {
      'schools': [{
        'id': 1,
        'name': '\u4e1c\u5317\u5927\u5b66\u79e6\u7687\u5c9b\u5206\u6821',
        'level': '\u672c\u79d1'
      }, {'id': 2, 'name': '\u4fdd\u5b9a\u804c\u4e1a\u6280\u672f\u5b66\u9662', 'level': '\u9ad8\u804c'}, {
        'id': 3,
        'name': '\u5317\u534e\u822a\u5929\u5de5\u4e1a\u5b66\u9662',
        'level': '\u672c\u79d1'
      }, {
        'id': 4,
        'name': '\u5317\u4eac\u4ea4\u901a\u5927\u5b66\u6ee8\u6d77\u5b66\u9662',
        'level': '\u672c\u79d1'
      }, {'id': 5, 'name': '\u6ca7\u5dde\u5e08\u8303\u5b66\u9662', 'level': '\u672c\u79d1'}, {
        'id': 6,
        'name': '\u627f\u5fb7\u77f3\u6cb9\u9ad8\u7b49\u4e13\u79d1\u5b66\u6821',
        'level': '\u672c\u79d1'
      }, {
        'id': 7,
        'name': '\u4e1c\u5317\u77f3\u6cb9\u5927\u5b66\u79e6\u7687\u5c9b\u5206\u6821',
        'level': '\u9ad8\u804c'
      }, {'id': 8, 'name': '\u90af\u90f8\u5b66\u9662', 'level': '\u672c\u79d1'}, {
        'id': 9,
        'name': '\u6cb3\u5317\u5317\u65b9\u5b66\u9662',
        'level': '\u672c\u79d1'
      }, {'id': 10, 'name': '\u6cb3\u5317\u4f20\u5a92\u5b66\u9662', 'level': '\u672c\u79d1'}, {
        'id': 11,
        'name': '\u6cb3\u5317\u5927\u5b66',
        'level': '\u672c\u79d1'
      }, {'id': 12, 'name': '\u6cb3\u5317\u5927\u5b66\u5de5\u5546\u5b66\u9662', 'level': '\u672c\u79d1'}, {
        'id': 13,
        'name': '\u6cb3\u5317\u5de5\u7a0b\u5927\u5b66',
        'level': '\u672c\u79d1'
      }, {'id': 14, 'name': '\u6cb3\u5317\u5de5\u4e1a\u5927\u5b66', 'level': '\u672c\u79d1'}, {
        'id': 15,
        'name': '\u6cb3\u5317\u5de5\u4e1a\u804c\u4e1a\u6280\u672f\u5b66\u9662',
        'level': '\u9ad8\u804c'
      }, {
        'id': 16,
        'name': '\u6cb3\u5317\u5316\u5de5\u533b\u836f\u804c\u4e1a\u6280\u672f\u5b66\u9662',
        'level': '\u9ad8\u804c'
      }, {'id': 17, 'name': '\u6cb3\u5317\u5efa\u7b51\u5de5\u7a0b\u5b66\u9662', 'level': '\u672c\u79d1'}, {
        'id': 18,
        'name': '\u6cb3\u5317\u7ecf\u8d38\u5927\u5b66',
        'level': '\u672c\u79d1'
      }, {'id': 19, 'name': '\u6cb3\u5317\u79d1\u6280\u5927\u5b66', 'level': '\u672c\u79d1'}, {
        'id': 20,
        'name': '\u6cb3\u5317\u79d1\u6280\u5927\u5b66\u7406\u5de5\u5b66\u9662',
        'level': '\u672c\u79d1'
      }, {'id': 21, 'name': '\u6cb3\u5317\u519c\u4e1a\u5927\u5b66', 'level': '\u672c\u79d1'}, {
        'id': 22,
        'name': '\u6cb3\u5317\u519c\u4e1a\u5927\u5b66\u73b0\u4ee3\u79d1\u6280\u5b66\u9662',
        'level': '\u672c\u79d1'
      }, {
        'id': 23,
        'name': '\u6cb3\u5317\u8f6f\u4ef6\u804c\u4e1a\u6280\u672f\u5b66\u9662',
        'level': '\u9ad8\u804c'
      }, {'id': 24, 'name': '\u6cb3\u5317\u5e08\u8303\u5927\u5b66', 'level': '\u672c\u79d1'}, {
        'id': 25,
        'name': '\u6cb3\u5317\u5e08\u8303\u5927\u5b66\u6c47\u534e\u5b66\u9662',
        'level': '\u672c\u79d1'
      }, {
        'id': 26,
        'name': '\u6cb3\u5317\u533b\u79d1\u5927\u5b66\u4e34\u5e8a\u5b66\u9662',
        'level': '\u672c\u79d1'
      }, {'id': 27, 'name': '\u534e\u5317\u7535\u529b\u5927\u5b66', 'level': '\u672c\u79d1'}, {
        'id': 28,
        'name': '\u534e\u5317\u79d1\u6280\u5b66\u9662',
        'level': '\u672c\u79d1'
      }, {'id': 29, 'name': '\u534e\u5317\u7406\u5de5\u5927\u5b66', 'level': '\u672c\u79d1'}, {
        'id': 30,
        'name': '\u5eca\u574a\u5e08\u8303\u5b66\u9662',
        'level': '\u672c\u79d1'
      }, {'id': 31, 'name': '\u5eca\u574a\u804c\u4e1a\u6280\u672f\u5b66\u9662', 'level': '\u9ad8\u804c'}, {
        'id': 32,
        'name': '\u5185\u8499\u53e4\u5927\u5b66',
        'level': '\u672c\u79d1'
      }, {'id': 33, 'name': '\u5185\u8499\u53e4\u79d1\u6280\u5927\u5b66', 'level': '\u672c\u79d1'}, {
        'id': 34,
        'name': '\u77f3\u5bb6\u5e84\u5de5\u7a0b\u804c\u4e1a\u5b66\u9662',
        'level': '\u9ad8\u804c'
      }, {'id': 35, 'name': '\u77f3\u5bb6\u5e84\u94c1\u9053\u5927\u5b66', 'level': '\u672c\u79d1'}, {
        'id': 36,
        'name': '\u77f3\u5bb6\u5e84\u94c1\u9053\u5927\u5b66\u56db\u65b9\u5b66\u9662',
        'level': '\u672c\u79d1'
      }, {
        'id': 37,
        'name': '\u77f3\u5bb6\u5e84\u94c1\u8def\u804c\u4e1a\u6280\u672f\u5b66\u9662',
        'level': '\u9ad8\u804c'
      }, {
        'id': 38,
        'name': '\u77f3\u5bb6\u5e84\u4fe1\u606f\u5de5\u7a0b\u804c\u4e1a\u5b66\u9662',
        'level': '\u9ad8\u804c'
      }, {'id': 39, 'name': '\u77f3\u5bb6\u5e84\u5b66\u9662', 'level': '\u672c\u79d1'}, {
        'id': 40,
        'name': '\u77f3\u5bb6\u5e84\u90ae\u7535\u804c\u4e1a\u6280\u672f\u5b66\u9662',
        'level': '\u9ad8\u804c'
      }, {
        'id': 41,
        'name': '\u77f3\u5bb6\u5e84\u804c\u4e1a\u6280\u672f\u5b66\u9662',
        'level': '\u9ad8\u804c'
      }, {'id': 42, 'name': '\u5510\u5c71\u5e08\u8303\u5b66\u9662', 'level': '\u672c\u79d1'}, {
        'id': 43,
        'name': '\u5510\u5c71\u5b66\u9662',
        'level': '\u672c\u79d1'
      }, {'id': 44, 'name': '\u90a2\u53f0\u5b66\u9662', 'level': '\u672c\u79d1'}, {
        'id': 45,
        'name': '\u71d5\u4eac\u7406\u5de5\u5b66\u9662',
        'level': '\u672c\u79d1'
      }, {'id': 46, 'name': '\u71d5\u5c71\u5927\u5b66', 'level': '\u672c\u79d1'}, {
        'id': 47,
        'name': '\u71d5\u5c71\u5927\u5b66\u91cc\u4ec1\u5b66\u9662',
        'level': '\u672c\u79d1'
      }, {'id': 48, 'name': '\u6cb3\u5317\u5730\u8d28\u5927\u5b66', 'level': '\u672c\u79d1'}, {
        'id': 49,
        'name': '\u9632\u707e\u79d1\u6280\u5b66\u9662',
        'level': '\u672c\u79d1'
      }, {
        'id': 50,
        'name': '\u4fdd\u5b9a\u7535\u529b\u804c\u4e1a\u6280\u672f\u5b66\u9662',
        'level': '\u9ad8\u804c'
      }, {
        'id': 52,
        'name': '\u5510\u5c71\u5de5\u4e1a\u804c\u4e1a\u6280\u672f\u5b66\u9662',
        'level': '\u9ad8\u804c'
      }, {'id': 53, 'name': '\u4fdd\u5b9a\u5b66\u9662', 'level': '\u672c\u79d1'}, {
        'id': 54,
        'name': '\u90a2\u53f0\u804c\u4e1a\u6280\u672f\u5b66\u9662',
        'level': '\u9ad8\u804c'
      }, {'id': 55, 'name': '\u6cb3\u5317\u80fd\u6e90\u804c\u4e1a\u6280\u672f\u5b66\u9662', 'level': '\u9ad8\u804c'}],
      'count': 54
    }
  })
})
module.exports = router
