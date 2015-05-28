require('angular');

angular.module('lion', []);
angular.module('lion')
	.controller('AppController', ['welcome', function (welcome) {
		var vm = this;
		vm.msg = welcome.text;
	}])
	.value('welcome', {text: 'Hello from ng-lion!'});

module.exports = angular.module('lion');