angular.module('myApp', [])
	.controller('myController', function myController($scope) {
		$scope.master = {};
		$scope.showMadLibs = false;
		$scope.libs = {
			jobTitle: 'job title',
			tediousTask: 'tedious task',
			celebrity: 'celebrity',
			uselessSkill: 'useless skill',
			adjective: 'adjective',
			obnoxiousCelebrity: 'obnoxious celebrity',
			dirtyTask: 'dirty task',
			hugeNumber: 'huge number'
		}

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
			$scope.genderTextMaleFemaleName = $scope.genderText[$scope.gender]['maleFemaleName'];
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
				$scope.libs[el.name] = el.placeholder;
			});
			$scope.showMadLibs = false;
		};
	})
	.constant('VERSION', 1.0)
	.run(function(VERSION, $rootScope) {
		  $rootScope.version = VERSION;
	});