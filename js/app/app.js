var app = angular.module('myApp', ['ui.router', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/welcome');

    $stateProvider
      .state('welcome', {
          url: '/welcome',
          templateUrl: 'templates/welcome.html',
          controller: 'welcomeCtrl'
      })

    .state('form', {
        url: '/form',
        templateUrl: 'templates/form.html',
        controller: 'formCtrl'
    })

    .state('curd', {
        url: '/curd',
        templateUrl: 'templates/curd.html',
        controller: 'curdCtrl'
    });
}]);
