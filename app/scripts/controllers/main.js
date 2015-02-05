'use strict';

/**
 * @ngdoc function
 * @name dojoDirectiveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dojoDirectiveApp
 */
angular.module('dojoDirectiveApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
