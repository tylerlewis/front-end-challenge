"use strict";

var pageApp = angular.module('pageApp', [
	'page.controllers',
	'page.directives',
	'yiftee.directives',
	'yiftee.services',
	'yiftee.filters',
	'ngRoute',
]);

angular.module("page.controllers", ['ui.bootstrap']);
angular.module("page.directives", []);
angular.module("yiftee.services", []);
angular.module("yiftee.filters", []);
angular.module("yiftee.directives", []);

pageApp.config([
"$httpProvider",
<<<<<<< HEAD
"$routeProvider",
function($httpProvider, $routeProvider) {
	$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
	var rootTemplatePath = '/assets/templates/page/views/';

	$routeProvider
		.when('/', {
			templateUrl : rootTemplatePath + 'page.html',
			controller  : 'PageMainCtrl'
		});

=======
function($httpProvider) {
	$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
>>>>>>> abaf9fa69cf9df77206548c15735b8592afec533
}]);


pageApp.run(function() {
  FastClick.attach(document.body);
});
