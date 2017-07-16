/**
 * Created by raoul on 17-7-16.
 */
module.exports = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Allow', 'GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH')
  res.header('Content-Type', 'application/json;charset=utf-8')
  if (req.type === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
}