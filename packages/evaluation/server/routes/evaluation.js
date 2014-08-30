'use strict';

// The Package is past automatically as first parameter
module.exports = function(Evaluation, app, auth, database) {

  app.get('/evaluation/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/evaluation/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/evaluation/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/evaluation/example/render', function(req, res, next) {
    Evaluation.render('index', {
      package: 'evaluation'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
