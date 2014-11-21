var skillController = angular.module('skillController',['ngGrid']);
    skillController.controller('SkillCtrl',['$scope',
        function ($scope) {
            $scope.myData = [];
            $scope.categories = [{name: "Languages",id:'1'},
                {name: "Platforms",id:'2'},
                {name: "Frameworks",id:'3'},
                {name: "Tools",id:'4'}];
            $scope.gridOptions = { data: 'myData' };
            $scope.category = '';
            $scope.addSkills = function () {
            $scope.myData.push({
                    Name: $scope.skill,
                    Category: $scope.category
                }
            );
            $scope.skill = '';
            $scope.category = '';
        }
    }]);
