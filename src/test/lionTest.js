require('angular');
require('angular-mocks');
require('../js/main.js');

describe('angular test', function () {
	var scope, controller;

	beforeEach(function () {
		angular.mock.module('lion');
		angular.mock.inject(function ($controller, $rootScope) {
			scope = $rootScope.$new();
			controller = $controller;
		});
	});

	it('should work', function () {
		controller('AppController as appCtrl', {
        	$scope: scope
      	});
      	expect(scope.appCtrl.msg).toEqual('Hello from ng-lion!');
	});
});