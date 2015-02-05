'use strict';

/**
 * @ngdoc directive
 * @name dojoDirectiveApp.directive:farol
 * @description
 * # farol
 */
angular.module('dojoDirectiveApp')
  .directive('farol', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the farol directive');
      }
    };
  });
