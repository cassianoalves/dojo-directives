'use strict';

/**
 * @ngdoc directive
 * @name dojoDirectiveApp.directive:multiplica
 * @description
 * # multiplica
 */
angular.module('dojoDirectiveApp')
  .directive('multiplica', function ($compile) {
    return {
      template: '<span class="fa fa-money" ></span>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.$watch('fatorMultiplicacao',function()        {
          var i;
          var s = '';
          for(i=0; i < scope.fatorMultiplicacao; i++){
            s += '<span class="fa fa-money" ></span>';
          }
          element.html(s);
        });
        console.log(scope.fatorMultiplicacao);
      },
      scope:{
        fatorMultiplicacao: '=por'
      }
    };
  });
