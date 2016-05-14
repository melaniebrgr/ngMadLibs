var debug = true;

angular.module('myApp', ['ngAnimate'])
	.controller('myController', function myController($scope) {
		$scope.master = {};
		$scope.showMadLibs = false;
		$scope.libs = {};

		$scope.gender = "male";
		$scope.genderText = {
			male: {
				hisHer: 'his',
				heShe: 'he',
				maleFemaleName: 'Male Name'
			},
			female: {
				hisHer: 'her',
				heShe: 'she',
				maleFemaleName: 'Female Name'
			}
		};
		
		$scope.updateText = function() {
			$scope.genderTextHisHer = $scope.genderText[$scope.gender]['hisHer'];
			$scope.genderTextHeShe = $scope.genderText[$scope.gender]['heShe'];
		}
		$scope.updateText();

		$scope.submit = function() {
			if ($scope.madLibsForm.$valid) $scope.showMadLibs = true;
		};

		$scope.reset = function() {
			$scope.gender = "male";
			$scope.updateText();
			var input_fields = Array.from(document.getElementsByClassName('input__fields')[0].querySelectorAll('input'));
			input_fields.forEach(function(el, i) {
				$scope.libs[el.name] = "";
			});
			$scope.madLibsForm.$submitted = false;
			$scope.showMadLibs = false;
			if (debug) debug();
		};

		function debug() {
			$scope.genderTextMaleFemaleName = 'TEST';
			var input_fields = Array.from(document.getElementsByClassName('input__fields')[0].querySelectorAll('input'));
			input_fields.forEach(function(el, i) {
				$scope.libs[el.name] = "TEST";
			});					
		}

		if (debug) debug();
	})
	.constant('VERSION', 1.0)
	.run(function(VERSION, $rootScope) {
		  $rootScope.version = VERSION;
	});