var myapp = angular.module('myapp',[]);

myapp.controller('MyCtrl',function($scope){
    $scope.title = "AngularJS Training";

    $scope.sayHi=function(){
        alert('Hi');
        $scope.title = "modified from controller";
    }

    $scope.students = [
        {
            name: 'maheswari',
            department: 'Arts',
            dob: '28-06-1987'
        },
        {
            name: 'Naveen',
            department: 'commers',
            dob: '28-06-1980'
        },
        {
            name: 'arya',
            department: 'Maths',
            dob: '28-06-1976'
        }
    ];
     
    $scope.onStundentSelect = function(student){
        $scope.selectedStudent = student;
        console.log(student);
    };
});