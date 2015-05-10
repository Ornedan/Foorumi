FoorumApp.controller('ShowTopicController', function($scope, $routeParams, $location, Api){
  // Toteuta kontrolleri tähän
  Api.getTopic($routeParams.id).success(function(topic) {
      $scope.topic = topic;
  });
  
  $scope.addMessage = function() {
      Api.addMessage($scope.newMessage, $scope.topic.id).success(function(message) {
         $location.path("/messages/" + message.id); 
      });
  };
});
