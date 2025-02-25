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
   $scope.dataazurelearn = {
    headList: [{ name: 'Learning Path' }, { name: 'Module' }, { name: 'Status and Time' }],
    rowList: [
              { topic: 'Microsoft Azure Fundamentals', input: '[cloud concepts; architecture and services; management and governance]', output: '[Done; about 6 hr]'},
              { topic: 'AZ-400 Devops (part 1)', input: '[Devops Transformation Journey; ]', output: '[In Progress; About 4 hr]' }
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

  app.controller('estoreController', ['$scope',
    function($scope) {
      $scope.sidemenu = "estore";
    }]);