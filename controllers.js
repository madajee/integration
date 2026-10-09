app.controller('homeController', ['$scope',
  function($scope) {
    $scope.randomimage = "https://source.unsplash.com/random/390x270";
    $scope.input = 300;
    $scope.reload = function() {
        $scope.input = $scope.input + 1;
        //$scope.randomimage = 'https://source.unsplash.com/random/400x' + $scope.input;
        $scope.randomimage = 'https://picsum.photos/400/' + $scope.input;

    };
  }]);

app.controller('projectController', ['$scope',
  function($scope) {
  }]);

app.controller('testimonialController', ['$scope',
  function($scope) {
    $scope.images = 
    [
      'https://res.cloudinary.com/madajee/image/upload/v1751481567/Certifications/Cert6326157_AgentforceSpecialist_20250702.png',
      'https://res.cloudinary.com/madajee/image/upload/v1722870147/JMadaan_MuleSoftDeveloper-I_20240710..png',
      'https://res.cloudinary.com/madajee/image/upload/v1722869957/JMadaan_MuleSoftAssociate_20240710.png',
      'https://res.cloudinary.com/madajee/image/upload/v1659626071/Certifications/mule4-certificate.jpg',
      'https://res.cloudinary.com/madajee/image/upload/v1600476853/Certifications/Salesforce-PD-I.png',
      'https://udemy-certificate.s3.amazonaws.com/image/UC-O6Z2ZF66.jpg',
      'https://res.cloudinary.com/madajee/image/upload/v1600437489/Certifications/PSM-I.png',
      'https://udemy-certificate.s3.amazonaws.com/image/UC-KRWDC2Y4.jpg',
      'https://res.cloudinary.com/madajee/image/upload/v1608729296/Certifications/M220JS-MongoDB_For_JS_Developers.jpg',
      'https://res.cloudinary.com/madajee/image/upload/v1600437754/Certifications/M103_-_Course_Completion_Confirmation.jpg',
      'https://res.cloudinary.com/madajee/image/upload/v1662726653/Certifications/aws-certified-developer-cloudgurus.jpg',
      'https://res.cloudinary.com/madajee/image/upload/v1600477117/Certifications/M121-Aggregation-Framework.png',
      'https://udemy-certificate.s3.amazonaws.com/image/UC-ae18f3e3-1ce5-4a7c-b61c-1d41e929f21e.jpg',
      'https://res.cloudinary.com/madajee/image/upload/v1600436743/Certifications/M001-MongoDB-Basics.png',
      'https://res.cloudinary.com/madajee/image/upload/v1600436423/Certifications/MULE-API-ASSOCIATE.png'
    ];
}]);
app.controller('toolsController', ['$scope',
  function($scope) {
}]);
app.controller('homelifelineController', ['$scope',
  function($scope) {
}]);