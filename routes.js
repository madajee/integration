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
    .when('/project', {
        templateUrl: 'pages/project/project_100.html',
        controller: 'projectController'
    })
    .when('/project/:projectid', {
        templateUrl: function (param) {
            return 'pages/project/project_' + param.projectid + '.html'
        },
        controller: 'projectController'
    })
    .when('/sprint', {
        templateUrl: 'pages/sprint/sprint_1.html',
        controller: 'sprintController'
    })
    .when('/sprint/:sprintid', {
        templateUrl: function (param) {
            return 'pages/sprint/sprint_' + param.sprintid + '.html'
        },
        controller: 'sprintController'
    })
    .
    otherwise('/');
    
});