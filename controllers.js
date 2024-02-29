app.controller('integrationController', ['$scope',
  function($scope) {
    $scope.sidemenu = "integration";
    $scope.data = {
      headList: [{ name: 'Topic' }, { name: 'Input' }, { name: 'Output' }],
      rowList: [
                { topic: 'REST API with Node.js and Express', input: 'https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/', output: 'https://github.com/madajee/e-store-express.git'},
                { topic: 'REST API with Mule', input: 'https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/', output: 'https://github.com/madajee/e-store-express-mule.git' }
               ]
   }
  }]);

  app.controller('projectController', ['$scope',
  function($scope) {
    $scope.sidemenu = "project";
  }]);

  app.controller('sprintController', ['$scope',
  function($scope) {
    $scope.sidemenu = "sprint";
  }]);