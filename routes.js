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
    .when('/estore', {
        templateUrl: 'pages/estore/estore_1.html',
        controller: 'estoreController'
    })
    .when('/estore/:estoreid', {
        templateUrl: function (param) {
            return 'pages/estore/estore_' + param.estoreid + '.html'
        },
        controller: 'estoreController'
    })
    .when('/agentai', {
        templateUrl: 'pages/agentai/agentai_1.html',
        controller: 'agentaiController'
    })
    .when('/agentai/:agentaiid', {
        templateUrl: function (param) {
            return 'pages/agentai/agentai_' + param.agentaiid + '.html'
        },
        controller: 'agentaiController'
    })
    .
    otherwise('/');
    
});