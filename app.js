'use strict';  
var appRoot = angular.module('mobyrx', ['ngRoute']);

appRoot.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'html/home.html',
		controller : 'myController'
	}).when('/underconstruction', {
		templateUrl : 'html/underconstruction.html',
		controller : 'underconstructionController'
	}).when('/notfound', {
		templateUrl : 'html/404.html'
		
	}).otherwise({
		redirectTo : '/notfound'
	});
});


