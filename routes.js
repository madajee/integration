// ROUTES
app.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'integrationController'
    })
    .when('/integration', {
        templateUrl: 'pages/integration/integration_100.html',
        controller: 'integrationController'
    })
    .when('/integration/:integrationid', {
        templateUrl: function (param) {
            return 'pages/integration/integration_' + param.integrationid + '.html'
        },
        controller: 'integrationController'
    })
    .
    otherwise('/');
    
});