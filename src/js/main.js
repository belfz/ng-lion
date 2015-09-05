require('angular');
require('./lion/lion.module.js');

angular.element(document).ready(function () {
	angular.bootstrap(document, ['lion']);
});