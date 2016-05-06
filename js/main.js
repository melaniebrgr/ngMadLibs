angular.module('myApp', [])
		.constant('VERSION', 1.0)
		.run(function(VERSION, $rootScope) {
		  $rootScope.version = VERSION;
	  });