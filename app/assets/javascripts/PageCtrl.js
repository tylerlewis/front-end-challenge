"use strict";

/* JShint config settings */
/* jshint -W097 */
/* global angular */

angular.module("page.controllers").controller("PageCtrl", [
'$scope',
'$log',
'$window',
'$interval',
'$http',
'$modal',
'$route',
'$routeParams',
'$location',
'$anchorScroll',
'pageService',
function($scope, $log, $window, $interval, $http, $modal, $route, $routeParams, $location, $anchorScroll, pageService){


	$scope.pageService = pageService;
	
	

}]);