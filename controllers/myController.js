appRoot.controller('myController', function($scope) {


    $scope.member = {
        'name': "",      
        'email': "",
        'phone':"",
        'password': "",
        'confirmPassword': ""
        
    };


    $scope.resetAccount = function() {

        window.location.reload(false);
    };

    $scope.signIn = function(){
        console.log("User Sign");

    }

    $scope.forgetPassowrd = function(){
         console.log("Forget Password Sign");
    }


});