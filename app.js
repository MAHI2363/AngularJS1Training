var myapp = angular.module('myapp',[]);
myapp.component('myCalculator',{
    templateUrl:'myCalcualtor.template.html',
    controller:controller1
});
myapp.controller('controller1',function($scope){
    this.isCalculated = false;
    this.operValue = function(operator){
        var input1 = parseInt(this.input1);
        var input2 = parseInt(this.input2);
        
        var result;
 
     switch(operator)
     {
         case '+':
           result = input1 + input2;
           break;
         case '-':
           result = input1 - input2;
           break;
         case '*':
           result = input1 * input2;
           break;
         case '/':
           result = input1 / input2;
           break;
     }
     this.result = result;
     this.isCalculated = true;
    };
 
    this.onInputChange = function(){
        this.isCalculated = false;
   }
});
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


myapp.controller('MyCtrlImg',function($scope){
    $scope.imgList= [
    'https://www.hdwallpapers.in/thumbs/2017/bond_4k-t2.jpg',
    'https://www.hdwallpapers.in/thumbs/2016/cute_haircut_baby_girl-t2.jpg',
    'https://1.bp.blogspot.com/-i5ED1KQeuSE/WiEA7mv_a0I/AAAAAAAAQLo/stcqbxxxfPM5Gsqp2MfodjRy-rq0WD1nACLcBGAs/s400/max-resolution-hdpictures-of-fairbaby.jpg'
   ];

   $scope.index = 0;
   $scope.increaseIndex = function(){
       if($scope.index ===  $scope.imgList.length-1)
       {
        $scope.index = 0;
       }else{
         $scope.index =  $scope.index+1;
       }
   };

   $scope.decreaseIndex = function(){
    if($scope.index ===  0)
    {
        $scope.index =  $scope.imgList.length -1;        
    }else{
        $scope.index =  $scope.index-1;
    }
   };
});

   myapp.controller('MyOperation',function($scope){

    $scope.isCalculated = false;
   $scope.operValue = function(operator){
       var input1 = parseInt($scope.input1);
       var input2 = parseInt($scope.input2);
       
       var result;

    switch(operator)
    {
        case '+':
          result = input1 + input2;
          break;
        case '-':
          result = input1 - input2;
          break;
        case '*':
          result = input1 * input2;
          break;
        case '/':
          result = input1 / input2;
          break;
    }
    $scope.result = result;
    $scope.isCalculated = true;
   };

  $scope.onInputChange = function(){
    $scope.isCalculated = false;
  }
});