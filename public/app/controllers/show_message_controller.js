FoorumApp.controller('ShowMessageController', function ($scope, $routeParams, Api) {
    // Toteuta kontrolleri tähän
    function update() {
        Api.getMessage($routeParams.id).success(function (message) {
            $scope.message = message;
        });
    }
    
    $scope.addReply = function () {
        Api.addReply($scope.newReply, $scope.message.id).success(function (reply) {
            // Immediately show our new reply, but then refresh full reply list
            // from server - someone else might have also replied in the
            // meanwhile.
            $scope.message.Replies.push(reply);
            update();
        });
        
        $scope.newReply.content = "";
    };
    
    update();
});
