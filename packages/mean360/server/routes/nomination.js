'use strict';

var QuestionService = require('../service/question');

// The Package is past automatically as first parameter
module.exports = function(Nomination, app, auth, database) {

  app.get('/nomination/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/nomination/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/nomination/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/nomination/example/render', function(req, res, next) {
    Nomination.render('index', {
      package: 'nomination'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });

  app.get('/questions', function(req, res, next){
    function afterGetAllQuestions(err, questions){
      if(err){
        req.flash('error', err);
        return res.redirect('/');
      }
      res.json(questions);
    }
    QuestionService.getAllQuestion(afterGetAllQuestions);
  })
};
