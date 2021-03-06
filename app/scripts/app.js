'use strict';

/**
 * @ngdoc overview
 * @name dojoDirectiveApp
 * @description
 * # dojoDirectiveApp
 *
 * Main module of the application.
 */
angular
  .module('dojoDirectiveApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/example', {
        templateUrl: 'views/example.html',
        controller: 'ExampleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
