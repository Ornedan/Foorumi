FoorumApp.controller('UsersController', function ($scope, $location, Api) {
    // Toteuta kontrolleri tähän
    $scope.loginFailed = false;
    $scope.registerError = null;

    $scope.login = function () {
        Api.login($scope.user).success(function () {
            $location.path("/");
        }).error(function () {
            $scope.loginFailed = true;
        });
    };
    
    $scope.register = function() {
        Api.register($scope.user).success(function() {
            $location.path("/");
        }).error(function(resp) {
            $scope.registerError = resp.error;
        });
    };
});
