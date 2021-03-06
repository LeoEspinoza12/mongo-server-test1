var {User} = require('./../models/user');


let authenticate = (req, res, next) => {
  let token = req.header('x-auth');

  User.findByToken(token).then((user) => {
    // console.log(user)
    if (!user) {

      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    // console.log(user)
    // console.log(token)
    next();
  }).catch((e) => {
    res.status(401).send();
  })
}


module.exports = {authenticate}


