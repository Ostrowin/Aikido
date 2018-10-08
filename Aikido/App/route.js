app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'App/Start/start.html'
        })
        .when('/news-Torun', {
            templateUrl: 'App/Cities/Torun/News/newsTorun.html'
        })
        .when('/treningi-w-toruniu', {
            templateUrl: 'App/Cities/Torun/Trainings/trainingsTorun.html',
            controller: 'TrainingsTorunController'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);