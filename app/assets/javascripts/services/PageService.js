"use strict";

/* JShint config settings */
/* jshint -W097 */
/* global angular */

angular.module("yiftee.services").factory('pageService', [
'$http',
'$q',
function($http, $q){

	var pageService = {};
	var initPromise = $q.defer();
	
	pageService.initPromise = initPromise.promise;

	// Store the recipients that have been added to the current message
	// Track which numbers/emails have been added to avoid duplicates
	pageService.recipients = [];
	pageService.smsMemo = {};
	pageService.emailMemo = {};

	// Send valid message with valid list of recipients to server
	pageService.sendMessage = function(recipients, message){
		
		$http.post('/programming_challenge/send', JSON.stringify({message: message, recipients: recipients}))
    	.success(function(data, status, headers, config) {

    	})
    	.error(function(data, status, headers, config) {

    	});

	};

	// Request names, phone numbers, or emails from server matching user input
	pageService.autocomplete = function(input_text){
		
		var url = '/programming_challenge/autocomplete?q=' + input_text; 
		$http.get(url)
			.success(function(data, status, headers, config) {
				console.log(data, status, headers, config)
			})
			.error(function(data, status, headers, config) {

			});

	};

	// Store suggested recipients from autocomplete results, but do not allow duplicates
	pageService.suggestions = [];
	var suggestionsMemo = {
		name: {},
		sms: {},
		email: {}
	};

	// Add valid recipient to list of recipients for the message
	// Input recipient info passed in from controller, and callback to run
	//  if recipient info is valid
	pageService.addRecipient = function(recipient, callback){

		var validRecipient = validateRecipientInfo(recipient);

		if(!validRecipient) {
			return;
		}

		// Update smsMemo and emailMemo with new recipient data
		pageService.smsMemo[validRecipient.sms] = true;
		pageService.emailMemo[validRecipient.email] = true;
		
		var newRecipient = {
      name: validRecipient.name,
      sms: validRecipient.sms,
      email: validRecipient.email
    };

    // Add new recipient to list of recipients for message
    pageService.recipients.push(newRecipient);

    // Send POST request to server to add new recipient to database
    $http.post('/programming_challenge/add', JSON.stringify(newRecipient))
    	.success(function(data, status, headers, config) {

    	})
    	.error(function(data, status, headers, config) {

    	});

    // Invoke callback to refresh controller's currentRecipient object
    callback();
		
	};

	// Check to see if recipient information entered by user is valid for
	//  that recipient; if not, do not allow that recipient to be added to
	//  message recipients
	var validateRecipientInfo = function(recipient) {

		// Do not add a recipient unless phone number or email address is provided
    if(!recipient.sms && !recipient.email) {
      return false;
    }

    // If phone number is provided, check validity; do not add recipient if number is invalid
    if(recipient.sms) {
      var numbers = {'0': true, '1':true, '2': true, '3': true, '4': true, '5': true, '6': true, '7': true, '8': true, '9': true};
      var phoneNumber = '';
      for(var i = 0; i < recipient.sms.length; i++) {
        if(numbers[recipient.sms.charAt(i)]) {
          phoneNumber += recipient.sms.charAt(i);
        }
      }
      if(phoneNumber.length !== 7 && phoneNumber.length !== 10 && phoneNumber.length !== 11) {
        return false;
      } else {
      	if(pageService.smsMemo[phoneNumber]) {
      		return false;
      	}
      }
    }

    // If email is provided, check validity; do not add recipient if email is invalid
    if(recipient.email) {
      var email = recipient.email.split('@');
      if(email.length === 2) {
        if(email[1].split('.').length !== 2) {
          return false;
        } else {
        	if(pageService.emailMemo[recipient.email]) {
        		return false;
        	}
        }
      } else {
        return false;
      }
    }

    recipient.sms = phoneNumber;
    return recipient;

	};

	return pageService;

}]);
