// DIRECTIVES - From Jeetan Madaan

app.directive("customHeader", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/custom-header.html',
        replace: true
    }
});

app.directive("customFooter", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/custom-footer.html',
        replace: true,
        scope:{
            authorname:"@",
            linkurl:"@"
        }
    }
});

app.directive("homeSideMenu", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/home-side-menu.html',
        replace: true
    }
});

app.directive("integrationSideMenu", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/integration-side-menu.html',
        replace: true
    }
});

app.directive("projectSideMenu", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/project-side-menu.html',
        replace: true
    }
});

app.directive("sprintSideMenu", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/sprint-side-menu.html',
        replace: true
    }
});

app.directive("homeTimeline", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/home-timeline.html',
        replace: true
    }
});


app.directive("panelGroup", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/panel-group.html',
        replace: true,
        scope:{
            title1:"@",
            text1:"@",
            title2:"@",
            text2:"@",
            title3:"@",
            text3:"@"
        }
    }
});

// app.directive("tableDirective", function(){
//     return {
//         restrict: 'E',
//         templateUrl: 'pages/directives/table-directive.html',
//         replace: true,
//         scope:{
//             data: '='
//         }
//     }
// });

app.directive("projectCard", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/project-card.html',
        replace: true,
        scope:{
            title:"@",
            text:"@",
            linkurl: "@"
        }
    }
});

app.directive("projectReferenceCard", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/project-reference-card.html',
        replace: true,
        scope:{
            title1:"@",
            linkurl1: "@",
            title2:"@",
            linkurl2: "@",
            title3:"@",
            linkurl3: "@"
        }
    }
});