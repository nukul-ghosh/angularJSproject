app.controller('formCtrl', ['$scope', function($scope) {
    $scope.newuser = function(isValid) {
        //console.log(formData);
        $scope.submitted = true;
        if (isValid) {
            console.log("form is working");
        }
    }
}]);