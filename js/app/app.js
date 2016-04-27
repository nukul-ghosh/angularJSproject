var app = angular.module('myApp', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/page1",
      templateUrl: "templates/page1.html"
    })
    .state('state2', {
      url: "/page2",
      templateUrl: "templates/page2.html"
    });
});