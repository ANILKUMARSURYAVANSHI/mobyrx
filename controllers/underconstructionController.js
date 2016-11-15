appRoot.controller('underconstructionController', function($scope) {

    $scope.member = {
         'email': "",
        'phone':"",
        'password': ""
     
        
    };   

    $scope.goBack = function(){
        console.log("back to page");
        history.back();
    }

   

});