var isDebug = true;

angular.module('myApp', ['ngAnimate'])
	.controller('myController', function myController($scope) {
		var ctrl = this;

		ctrl.master = {};
		ctrl.showMadLibs = false;
		ctrl.libs = {};

		ctrl.gender = "male";
		ctrl.genderText = {
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
		
		ctrl.updateText = function() {
			ctrl.genderTextHisHer = ctrl.genderText[ctrl.gender]['hisHer'];
			ctrl.genderTextHeShe = ctrl.genderText[ctrl.gender]['heShe'];
		}
		ctrl.updateText();

		ctrl.submit = function() {
			if ($scope.madLibsForm.$valid) ctrl.showMadLibs = true;
		};

		ctrl.reset = function() {
			ctrl.gender = "male";
			ctrl.updateText();
			var input_fields = Array.from(document.getElementsByClassName('input__fields')[0].querySelectorAll('input'));
			input_fields.forEach(function(el, i) {
				ctrl.libs[el.name] = "";
			});
			ctrl.madLibsForm.$submitted = false;
			ctrl.showMadLibs = false;
			if (isDebug) debug();
		};

		function debug() {
			ctrl.genderTextMaleFemaleName = 'TEST';
			var input_fields = Array.from(document.getElementsByClassName('input__fields')[0].querySelectorAll('input'));
			input_fields.forEach(function(el, i) {
				ctrl.libs[el.name] = "TEST";
			});					
		}

		if (isDebug) debug();
	})
	.constant('VERSION', 1.0)
	.run(function(VERSION, $rootScope) {
		  $rootScope.version = VERSION;
	});