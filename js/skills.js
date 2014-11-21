var skillController = angular.module('skillController',[]);
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
                    name: $scope.skill,
                    category: $scope.category
                }
            );
            $scope.remove = function(name) {
                var index = -1;
                var dupArr = eval( $scope.myData);
                for( var i = 0; i < dupArr.length; i++ ) {
                    if( dupArr[i].name === name ) {
                        index = i;
                        break;
                    }
                }
                if( index === -1 ) {
                    alert( "Something gone wrong" );
                }
                $scope.myData.splice( index, 1 );

            }
            $scope.skill = '';
            $scope.category = '';
        }
    }]);
