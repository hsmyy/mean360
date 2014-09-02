/**
 * angular-growl - v0.3.4 - 2014-01-07
 * https://github.com/mattduffield/angular-growl
 * Copyright (c) 2014 Matt Duffield; Licensed MIT
 */
angular.module('angular-growl', []);
angular.module('angular-growl').directive('growl', [
  '$rootScope',
  function ($rootScope) {
    'use strict';
    return {
      restrict: 'A',
      template: '<div class="growl">' + '\t<div class="growl-item alert" ng-repeat="message in messages" ng-class="computeClasses(message)">' + '\t\t<button type="button" class="close" ng-click="deleteMessage(message)">&times;</button>' + '            {{ message.text}}' + '\t</div>' + '</div>',
      replace: false,
      scope: true,
      controller: [
        '$scope',
        '$timeout',
        function ($scope, $timeout) {
          $scope.messages = [];
          $rootScope.$on('growlMessage', function (event, message) {
            $scope.messages.push(message);
            if (message.ttl && message.ttl !== -1) {
              $timeout(function () {
                $scope.deleteMessage(message);
              }, message.ttl);
            }
          });
          $scope.deleteMessage = function (message) {
            var index = $scope.messages.indexOf(message);
            if (index > -1) {
              $scope.messages.splice(index, 1);
            }
            if (typeof message.callback === 'function') {
              message.callback();
            }
          };
          $scope.computeClasses = function (message) {
            return {
              'alert-success': message.isSuccess,
              'alert-error': message.isError,
              'alert-danger': message.isError,
              'alert-info': message.isInfo,
              'alert-warning': message.isWarn
            };
          };
        }
      ]
    };
  }
]);
angular.module('angular-growl').provider('growl', function () {
  'use strict';
  var _ttl = null, _messagesKey = 'messages', _messageTextKey = 'text', _messageSeverityKey = 'severity';
  this.globalTimeToLive = function (ttl) {
    _ttl = ttl;
  };
  this.messagesKey = function (messagesKey) {
    _messagesKey = messagesKey;
  };
  this.messageTextKey = function (messageTextKey) {
    _messageTextKey = messageTextKey;
  };
  this.messageSeverityKey = function (messageSeverityKey) {
    _messageSeverityKey = messageSeverityKey;
  };
  this.serverMessagesInterceptor = [
    '$q',
    'growl',
    function ($q, growl) {
      function checkResponse(response) {
        if (response.data[_messagesKey] && response.data[_messagesKey].length > 0) {
          growl.addServerMessages(response.data[_messagesKey]);
        }
      }
      function success(response) {
        checkResponse(response);
        return response;
      }
      function error(response) {
        checkResponse(response);
        return $q.reject(response);
      }
      return function (promise) {
        return promise.then(success, error);
      };
    }
  ];
  this.$get = [
    '$rootScope',
    '$filter',
    function ($rootScope, $filter) {
      var translate;
      try {
        translate = $filter('translate');
      } catch (e) {
      }
      function broadcastMessage(message) {
        if (translate) {
          message.text = translate(message.text);
        }
        $rootScope.$broadcast('growlMessage', message);
      }
      function sendMessage(text, config, severity, callback) {
        var _config = config || {}, message;
        message = {
          text: text,
          isWarn: severity.isWarn,
          isError: severity.isError,
          isInfo: severity.isInfo,
          isSuccess: severity.isSuccess,
          ttl: _config.ttl || _ttl,
          callback: callback
        };
        broadcastMessage(message);
      }
      function addWarnMessage(text, config, callback) {
        sendMessage(text, config, { isWarn: true }, callback);
      }
      function addErrorMessage(text, config, callback) {
        sendMessage(text, config, { isError: true }, callback);
      }
      function addInfoMessage(text, config, callback) {
        sendMessage(text, config, { isInfo: true }, callback);
      }
      function addSuccessMessage(text, config, callback) {
        sendMessage(text, config, { isSuccess: true }, callback);
      }
      function addServerMessages(messages) {
        var i, message, severity, length;
        length = messages.length;
        for (i = 0; i < length; i+=1) {
          message = messages[i];
          if (message[_messageTextKey] && message[_messageSeverityKey]) {
            switch (message[_messageSeverityKey]) {
            case 'warn':
              severity = { isWarn: true };
              break;
            case 'success':
              severity = { isSuccess: true };
              break;
            case 'info':
              severity = { isInfo: true };
              break;
            case 'error':
              severity = { isError: true };
              break;
            }
            sendMessage(message[_messageTextKey], undefined, severity);
          }
        }
      }
      return {
        addWarnMessage: addWarnMessage,
        addErrorMessage: addErrorMessage,
        addInfoMessage: addInfoMessage,
        addSuccessMessage: addSuccessMessage,
        addServerMessages: addServerMessages
      };
    }
  ];
});