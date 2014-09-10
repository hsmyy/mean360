'use strict';

var QuestionService = require('../service/question');
var ActionPlanService = require('../service/actionPlan');
var CategoryService = require('../service/category');
var CycleService = require('../service/cycle');

var mailer = require('express-mailer');
// The Package is past automatically as first parameter
module.exports = function(Nomination, app, auth, database) {

  app.get('/query/question/all', function(req, res) {
    QuestionService.getAllQuestion(function(err, questions) {
      if(err) {
        req.flash('error', err);
        return res.redirect('/');
      }
      res.json(questions);
    });
  });

  app.post('/remove/question', function(req, res){
    QuestionService.removeQuestionById(req.query.id, function(err){
      if(err) {
        req.flash('error', err);
        return res.redirect('/');
      }
      res.send('success');
    });
  });

  app.post('/save/action_plan', function(req, res) {
    ActionPlanService.save(req.body, function(err, actionPlan) {
      if(err) {
        req.flash('error', err);
        return res.redirect('/');
      }
      res.json(actionPlan);
    });
  });

  app.get('/query/action_plan/user&cycle', function(req, res){
    ActionPlanService.getActionPlansByUserAndCycle(req.query.userId, req.query.cycleId, function(err, actionPlans){
      if(err) {
        req.flash('error', err);
        return res.redirect('/');
      }
      res.json(actionPlans);
    });
  });

  app.get('/query/categories/all', function(req, res){
    CategoryService.getAllCategory(function(err, categories){
      if(err) {
        req.flash('error', err);
        return res.redirect('/');
      }
      res.json(categories);
    });
  });

  app.get('/query/cycle/id', function(req, res){
    CycleService.getCycleById(req.query.id, function(err, cycle){
      if(err) {
        req.flash('error', err);
        return res.redirect('/');
      }
      res.json(cycle);
    });
  });

  app.get('/query/cycle/all', function(req, res){
    CycleService.getAllCycles(function(err, cycles){
      if(err) {
        req.flash('error', err);
        return res.redirect('/');
      }
      res.json(cycles);
    });
  });

  app.post('/update/cycle', function(req, res){
    CycleService.update(req.body, function(err, cycle){
      if(err) {
        req.flash('error', err);
        return res.redirect('/');
      }
      res.json(cycle);
    });
  });

  app.get('/sendmail', function(req, res){
      mailer.extend(app, {
          from: '@gmail.com',
          host: 'smtp.gmail.com', // hostname
          secureConnection: true, // use SSL
          port: 465, // port for secure SMTP
          transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
          auth: {
              user: '@gmail.com',
              pass: ''
          }
      });

      app.mailer.send('email', {
          to: '@gmail.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.
          subject: 'Test Email', // REQUIRED.
          otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
      }, function (err) {
          if (err) {
              // handle error
              console.log(err);
              console.log('There was an error sending the email');
              return;
          }
          console.log('Email Sent');
      });

  });
};
