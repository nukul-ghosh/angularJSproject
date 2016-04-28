app.controller('curdCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('http://10.1.3.150:8000/js/json/developerList.json')
        .success(function(response) {
            $scope.developerList = response.records;
        });

    //$scope.developerList = [{"name":"Harsh"}, {"name":"Nukul"}, {"name":"Vikram"}, {"name":"Aseem"}, {"name":"Jose"}, {"name":"Girish"}];
    $scope.addNewDeveloper = false;
    $scope.addNewDeveloper = false;
    $scope.updateDeveloperName = false;

    $scope.args = {
        newDev: ""
    };

    $scope.argss = {
        updateDev: ""
    };

    $scope.addDeveloperForm = function() {
        $scope.addNewDeveloper = true;
    };

    $scope.addDeveloper = function() {
        //console.log($scope.args.newDev);
        //$scope.developerList.push({ name: $scope.args.newDev });
        $scope.developerList.splice(0, 0, { name: $scope.args.newDev });
        $scope.addNewDeveloper = false;
        $scope.args.newDev = "";
    };

    $scope.cancelAdd = function() {
        $scope.addNewDeveloper = false;
    };

    $scope.delete = function(developer) {
        //$scope.developerList.splice($index, 1); 
        //console.log(developer);
        var dLength = $scope.developerList;
        for (var i = 0; i < dLength.length; i++) {
            if (dLength[i].name == developer.name) {
                dLength.splice(i, 1);
            }
        }
    };

    $scope.edit = function($index, developer) {
        $scope.argss.updateDev = developer.name;
        $scope.updateDeveloperName = true;
        $scope.toBeUpdatedDev = $index;
    };

    $scope.cancelUpdate = function() {
        $scope.updateDeveloperName = false;
    };

    $scope.updateDeveloper = function() {
        $scope.developerList[$scope.toBeUpdatedDev].name = $scope.argss.updateDev;
        $scope.updateDeveloperName = false;
    };
}]);
