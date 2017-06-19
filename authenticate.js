let User = require('./models/users')
module.exports = function (mobile, password, fn) {
  User.findOne({mobile: mobile}, function (err, user) {
    if (user) {
      if (err) return fn(new Error('cannot find user'))
      // hash(pass, user.salt, function (err, hash) {
      //   if (err) return fn(err)
      //   if (hash == user.hash) return fn(null, user)
      //   fn(new Error('invalid password'))
      // })
      hash(pass, user.salt, function (err, hash) {
        if (err) return fn(err)
        if (hash == user.hash) return fn(null, user)
        fn(new Error('invalid password'))
      })
    } else {
      return fn(new Error('cannot find user'))
    }
  })
}