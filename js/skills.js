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
              console.log("add skills");
                var postobj = new Object();
                postobj.skill = $scope.skill;
                postobj.category = $scope.category;
                url = "http://zend-dpk.rhcloud.com/skills/add";                
            $scope.mySkills.push({
                    name: $scope.skill,
                    category: $scope.category
                }
            );
            $scope.remove = function(name) {
                var index = -1;
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
                $scope.mySkills.splice( index, 1 );

            }
            $scope.skill = '';
            $scope.category = '';
        }
    }]);
