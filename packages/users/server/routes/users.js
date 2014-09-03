'use strict';

var UserService = require('../service/user');
// User routes use users controller
var users = require('../controllers/users');

module.exports = function(MeanUser, app, auth, database, passport) {

  app.route('/logout')
    .get(users.signout);
  app.route('/users/me')
    .get(users.me);

  // Setting up the users api
  app.route('/register')
    .post(users.create);

  app.route('/forgot-password')
    .post(users.forgotpassword);

  app.route('/reset/:token')
    .post(users.resetpassword);

  // Setting up the userId param
  app.param('userId', users.user);

  // AngularJS route to check for authentication
  app.route('/loggedin')
    .get(function(req, res) {
      res.send(req.isAuthenticated() ? req.user : '0');
    });

  // Setting the local strategy route
  app.route('/login')
    .post(passport.authenticate('local', {
      failureFlash: true
    }), function(req, res) {
      res.send({
        user: req.user,
        redirect: (req.user.roles.indexOf('admin') !== -1) ? req.get('referer') : false
      });
    });

  app.route('/related_users').get(function(req, res) {
    UserService.getRelatedUsers(req.user._id, function(err, users){
      if(err) {
        req.flash('error', err);
        return res.redirect('/');
      }
      res.json(users);
    });
  });

  app.route('/choose_nominators').post(function(req, res) {
    UserService.chooseNominators(req.user._id, req.body, function(err){
      if(err) {
        req.flash('error', err);
        return res.redirect('/');
      }
    });
  });

  app.route('/get_evaluatees').get(function(req, res){
    UserService.getEvaluatees(req.user._id, function(err, users){
      if(err) {
        req.flash('error', err);
        return res.redirect('/');
      }
      res.json(users);
    })
  })

};
