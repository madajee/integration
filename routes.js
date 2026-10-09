// ROUTES
app.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    }).
    when('/project', {
        templateUrl: 'pages/project/project.html',
        controller: 'projectController'
    }).
    when('/project/:projectid', {
        templateUrl: function (param) {
            return 'pages/project/project_' + param.projectid + '.html'
        },
        controller: 'learnjsController'
    }).
    when('/testimonial', {
        templateUrl: 'pages/testimonial.html',
        controller: 'testimonialController'
    }).
    when('/tools', {
        templateUrl: 'pages/tools.html',
        controller: 'toolsController'
    }).
    when('/homelifeline', {
        templateUrl: 'pages/homelifeline.html',
        controller: 'homelifelineController'
    }).
    otherwise('/');
    
});