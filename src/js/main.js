require('angular');
require('./lion/lion.module.js');

angular.element(document).ready(function () {
	var t = angular.module('lion');
	angular.bootstrap(document, ['lion']);
});

module.exports = angular.module('lion');