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

  // Check if user inputs can be autocompleted
  $scope.autocomplete = function(text) {
    pageService.autocomplete(text, function(empty, suggestions) {
      // If suggestions are returned, bind them to the view
      if(!empty) {
        $scope.suggestions = suggestions;
        $scope.displaySuggestions = true;
      } else {
        $scope.displaySuggestions = false;
      }
    });
  };

  // If user has selected a result from autocomplete, this selection
  //  will become the currentRecipient
  $scope.fillInputs = function(suggestion) {
    $scope.currentRecipient = suggestion;
  };
  
  // Store recipients for current message
  $scope.recipients = pageService.recipients;

  // Store data of current recipient to be added to recipients array
  $scope.currentRecipient = {};

  // Add a new recipient to current list
  $scope.addRecipient = function(recipient) {
    pageService.addRecipient(recipient, function() {
      $scope.currentRecipient = {};
      $scope.displaySuggestions = false;
    });        
  };

  // Bind message input to scope
  $scope.message = '';

  // Pass recipients and message along to pageService; if successfully sent, reset recipients and message for new message
  $scope.sendMessage = function(message, recipients) {
    pageService.sendMessage(message, recipients, function() {
      $scope.recipients = pageService.recipients;
      $scope.message = '';
      $scope.successfullySent = true;
      setTimeout(function() {
        $scope.successfullySent = false;
        $scope.$apply();
      }, 2000);
    });
  };

}]);

