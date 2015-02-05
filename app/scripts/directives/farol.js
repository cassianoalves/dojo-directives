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
      template: '<div class="{{ \'fa fa-circle fa-4x \' + cor }}" ></div>',
      restrict: 'A',
      scope: {
        valor: '=farol'
      },
      link: function postLink($scope) {

        $scope.$watch('valor', function () {
          if($scope.valor < 20) {
            $scope.cor='text-danger';
          } else if($scope.valor > 80) {
            $scope.cor='text-success';
          } else {
            $scope.cor='text-warning';
          }
        });
      }
    };
  });
