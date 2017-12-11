var myapp = angular.module('myapp',[]);

myapp.controller('MyCtrl',function($scope){
    $scope.title = "AngularJS Training";

    $scope.sayHi=function(){
        alert('Hi');
    }
});