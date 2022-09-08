app.controller('integrationController', ['$scope',
  function($scope) {
    $scope.randomimage = "https://source.unsplash.com/random/390x270";
    $scope.input = 300;
    $scope.reload = function() {
        $scope.input = $scope.input + 1;
        $scope.randomimage = 'https://source.unsplash.com/random/400x' + $scope.input;

    };
  }]);