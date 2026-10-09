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

// Home Page
app.directive("homeTimeline", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/home-timeline.html',
        replace: true
    }
});

// Home Page
app.directive("viewLinkedin", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/home-lifeline.html',
        replace: true
    }
});

// Testimonial Page
app.directive("testimonialImgRow", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/testimonial-img-row.html',
        replace: true,
        scope:{
            imagecol1:"@",
            imagecol2:"@",
            imagecol3:"@"
        }
    }
});

app.directive("projectCard", function(){
    return {
        restrict: 'E',
        templateUrl: 'pages/directives/project-card.html',
        replace: true,
        scope:{
            title:"@",
            text:"@"
        }
    }
});