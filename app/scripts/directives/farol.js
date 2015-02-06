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
      template: '<div class="{{ \'fa fa-circle fa-4x \' + cor }}"></div>',
      restrict: 'A',
      scope: {
        scopeVar: '=farol'
      },
      link: function postLink(scope) {

        console.log(scope.scopeVar);

        scope.$watch('scopeVar', function () {
          if(scope.scopeVar < 20) {
            scope.cor='text-danger';
          } else if (scope.scopeVar > 80) {
            scope.cor='text-success';
          } else {
            scope.cor='text-warning';
          }
        });



      }
    };
  });
