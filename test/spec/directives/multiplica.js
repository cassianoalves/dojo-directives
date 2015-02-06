'use strict';

describe('Directive: multiplica', function () {

  // load the directive's module
  beforeEach(module('dojoDirectiveApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('se tem 3, mostra 3x o icone', inject(function ($compile) {
    scope.fator = 3;
    element = angular.element('<multiplica por="fator"></multiplica>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.html()).toBe('<span class="fa fa-money"></span><span class="fa fa-money"></span><span class="fa fa-money"></span>');
  }));
  it('se tem 4, mostra 4x o icone', inject(function ($compile) {
    scope.fator = 4;
    element = angular.element('<multiplica por="fator"></multiplica>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.html()).toBe('<span class="fa fa-money"></span><span class="fa fa-money"></span><span class="fa fa-money"></span><span class="fa fa-money"></span>');
  }));

});
