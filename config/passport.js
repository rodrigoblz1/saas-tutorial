const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../app/models/user');
const config = require('../config/main');
const request = require('request')

// Setup work and export for the JWT passport strategy
module.exports = function(passport) {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: config.secret
  };
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {

    // request.post({
    //     url: 'https://json-server-roleta.herokuapp.com/'+ 'login',
    //     json: { login: req.body.username, password: req.body.password }
    // }, function (error, response) {
    //   if(!error && response.statusCode == 200){
    //     // Create token if everything went ok
    //     const token = jwt.sign(req.body.email, config.secret, {
    //       expiresIn: 10080 // in seconds
    //     });
    //     res.status(200).json({ success: true, token: 'JWT ' + token });
    //   } else if (!error && response.statusCode == 403) {
    //     res.json({'status': 'Login ou senha incorretos.'});
    //   } else{
    //     res.json({'status': 'Ocorreu um erro no servidor'});
    //   }
    // });

    // User.findOne({id: jwt_payload.id}, function(err, user) {
    //   if (err) {
    //     return done(err, false);
    //   }
    //   if (user) {
    //     done(null, user);
    //   } else {
    //     done(null, false);
    //   }
    // });
  }));
};
