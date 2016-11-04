/**
 * 
 */

var myApp = angular.module('myApp', []);
var json = "js/data.json";

myApp.controller('topCtrl', function ($scope, $http) {	$http.get(json).success(function(response)
	{
		$scope.contact = response.contact;
		$scope.student = response.student;
		$scope.toolbox = response.toolbox;
		$scope.about = response.about;
		$scope.portrait = response.portrait;
		$scope.firstPlace = response.firstPlace;
		$scope.indepPhoto = response.indepPhoto;
		$scope.focus = response.focus;
		$scope.date22Jul = response.date22Jul;
		$scope.expoPhoto = response.expoPhoto;
		$scope.focusP1 = response.focusP1;
		$scope.focusP2 = response.focusP2;
		$scope.focusP3 = response.focusP3;
		$scope.iam = response.iam;
		$scope.passionated = response.passionated;
		$scope.news = response.news;
		$scope.date22Julddmmyy = response.date22Julddmmyy;
		$scope.title1 = response.title1;
		$scope.title2 = response.title2;
		$scope.descNews1 = response.descNews1;
		$scope.descNews2 = response.descNews2;
		$scope.jeffries = response.jeffries;
	});
});