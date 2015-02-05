'use strict';

describe('Directive: farol', function () {

  // load the directive's module
  beforeEach(module('dojoDirectiveApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope;
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div farol="valor"></div>');
    scope.valor=10;
    element = $compile(element)(scope);
    scope.$digest();

    expect(element.html()).toEqual('<div class="fa fa-circle fa-4x  text-danger"></div>');
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div farol="valor"></div>');
    scope.valor=50;
    element = $compile(element)(scope);
    scope.$digest();

    expect(element.html()).toEqual('<div class="fa fa-circle fa-4x  text-warning"></div>');

  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div farol="valor"></div>');
    scope.valor=90;
    element = $compile(element)(scope);
    scope.$digest();

    expect(element.html()).toEqual('<div class="fa fa-circle fa-4x  text-success"></div>');
  }));
});
