app.controller('integrationController', ['$scope',
  function($scope) {
    $scope.sidemenu = "integration";
    $scope.data = {
      headList: [{ name: 'Topic' }, { name: 'Input' }, { name: 'Output' }],
      rowList: [
                { topic: 'REST API with Node.js and Express', input: 'https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/', output: 'https://github.com/madajee/integration.git'},
                { topic: 'test', input: 'test', output: 'test' }
               ]
   }
  }]);

  app.controller('projectController', ['$scope',
  function($scope) {
    $scope.sidemenu = "project";
  }]);