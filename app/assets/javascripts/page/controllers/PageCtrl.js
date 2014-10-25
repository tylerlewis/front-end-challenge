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
  $scope.recipients = [];

  // Store data of current recipient to be added to recipients array
  $scope.currentRecipient = {};

  // Add a new recipient to current list
  $scope.addRecipient = function(recipient) {

    // Do not add a recipient unless a valid sms or email address is provided
    if(!recipient.sms && !recipient.email) {
      return;
    }

    var newRecipient = {
      recipientName: recipient.recipientName,
      sms: recipient.sms,
      email: recipient.email
    };

    $scope.recipients.push(newRecipient);
    $scope.currentRecipient = {};

  };

  $scope.message = '';

}]);

