angular.module('myApp', [])
.controller('myController', function myController($scope) {
	$scope.gender = "male";
	$scope.genderText = {
		male: {
			hisHer: 'his'
		},
		female: {
			hisHer: 'her'
		}
	};
	$scope.genderTextHisHer = $scope.genderText[$scope.gender]['hisHer'];
	$scope.updateText = function() {
		$scope.genderTextHisHer = $scope.genderText[$scope.gender]['hisHer'];
		console.log($scope.genderText[$scope.gender]['hisHer']);
	}
});