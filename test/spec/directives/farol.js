'use strict';

describe('Directive: farol', function () {

  // load the directive's module
  beforeEach(module('dojoDirectiveApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<farol></farol>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the farol directive');
  }));
});
