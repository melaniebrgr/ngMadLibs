angular.module('myApp', [])
	.controller('myController', function myController($scope) {
		$scope.showMadLibs = false;
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
	})
	.constant('VERSION', 1.0)
	.run(function(VERSION, $rootScope) {
		  $rootScope.version = VERSION;
	});