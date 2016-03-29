
var app = angular.module('portfolio', ['ui.router']);


  app.config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state("home", {
          url: "/home",
          templateUrl: "partials/home.html"
        })
        .state("home.development", {
          url: "/development",
          templateUrl: "partials/development.html"
        })
        .state("home.design", {
          url: "/design",
          templateUrl: "partials/design.html"
        })
        .state("home.about", {
          url: "/about",
          templateUrl: "partials/about.html"
        })
        .state("home.contact", {
          url: "/contact",
          templateUrl: "partials/contact.html"
        });
        $urlRouterProvider.otherwise('/home');

});
