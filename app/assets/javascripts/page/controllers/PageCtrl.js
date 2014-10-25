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
'$location',
'$anchorScroll',
'pageService',
function($scope, $log, $window, $interval, $http, $modal, $location, $anchorScroll, pageService){

	$scope.pageService = pageService;
  
  // Store recipients for current message
  $scope.recipients = pageService.recipients;

  // Store data of current recipient to be added to recipients array
  $scope.currentRecipient = {};

  // Add a new recipient to current list
  $scope.addRecipient = function(recipient) {
    pageService.addRecipient(recipient, function() {
      $scope.currentRecipient = {};
    });        
  };

  $scope.message = '';

}]);

