var skillapp = angular.module('skillapp',[]);
    skillapp.controller('SkillCtrl',['$scope','$http',
        function ($scope,$http) {
            $scope.mySkills = [];
            $scope.categories = [{name: "Languages",id:'1'},
                {name: "Platforms",id:'2'},
                {name: "Frameworks",id:'3'},
                {name: "Tools",id:'4'}];
            $scope.gridOptions = { data: 'mySkills' };
            $scope.category = '';
            $scope.addSkills = function () {
                var postobj = new Object();
                postobj.skill = $scope.skill;
                postobj.category = $scope.category;
                $scope.mySkills.push({
                    name: $scope.skill,
                    category: $scope.category
                }
            );
            $scope.remove = function(sindex) {
                /*var index = -1;
                var dupArr = eval( $scope.mySkills);
                for( var i = 0; i < dupArr.length; i++ ) {
                    if( dupArr[i].name === name ) {
                        index = i;
                        break;
                    }
                }
                if( index === -1 ) {
                    alert( "Something gone wrong" );
                }
                console.log(sindex+" "+index);*/
                $scope.mySkills.splice( sindex, 1 );

            }

            $scope.skill = '';
            $scope.category = '';
        }
    }]);
