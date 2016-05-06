angular.module('myApp', [])
	.controller('myController', function myController($scope) {
		$scope.gender = "male";
		$scope.genderText = {
			male: {
				hisHer: 'his',
				heShe: 'he'
			},
			female: {
				hisHer: 'her',
				heShe: 'she'
			}
		};
		
		$scope.updateText = function() {
			$scope.genderTextHisHer = $scope.genderText[$scope.gender]['hisHer'];
			$scope.genderTextHeShe = $scope.genderText[$scope.gender]['heShe'];
		}
		$scope.updateText();
	})
	.constant('VERSION', 1.0)
	.run(function(VERSION, $rootScope) {
		  $rootScope.version = VERSION;
	});