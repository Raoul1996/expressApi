let User = require('./models/users')
module.exports = function (mobile, password) {
  User.findOne({mobile: mobile}, function (err, user) {
    if (user) {
      if (err) return (new Error('cannot find user'))
      // hash(pass, user.salt, function (err, hash) {
      //   if (err) return callback(err)
      //   if (hash == user.hash) return callback(null, user)
      //   callback(new Error('invalid password'))
      // })
      if (password === user.password) return callback(null, user)
      callback(new Error('invalid password'))
    } else {
      return callback(new Error('cannot find user'))
    }
  })
}