app.controller('mainPage', ['$scope', function($scope) {
    $scope.copyright = "© 2015 Company, Inc."
    $scope.opened = false;
    $scope.sidebar = function() {
        if ($scope.opened) {
            $scope.opened = false;
        } else {
            $scope.opened = true;
        }
    };
    $scope.closeSidebar = function() {
        $scope.opened = false;
    };
}]);
