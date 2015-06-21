require('angular');
require('angular-ui-router');

angular.module('lion', ['ui.router']);
angular.module('lion')
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: 'templates/main.html'
			});
		$urlRouterProvider.otherwise('/');
	})
	.controller('AppController', function (welcome) {
		var vm = this;
		vm.msg = welcome.text;
	})
	.value('welcome', {text: 'Hello from ng-lion!'});

module.exports = angular.module('lion');