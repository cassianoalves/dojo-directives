'use strict';

/**
 * @ngdoc function
 * @name dojoDirectiveApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dojoDirectiveApp
 */
angular.module('dojoDirectiveApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
