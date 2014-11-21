var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope) {
    $scope.myData = [{Name: "Java"},
                     {Name: "Php"},
                     {Name: "Ruby"},
                     {Name: "Assembly"},
                     {Name: "Sql"}];

	$scope.categories = [{name: "Languages",id:'1'},
                     {name: "Platforms",id:'2'},
                     {name: "Frameworks",id:'3'},
                     {name: "Tools",id:'4'}];
    $scope.gridOptions = { data: 'myData' };
    $scope.addSkill = function(){
    	console.log($scope.skill);
    }
});