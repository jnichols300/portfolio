

(function() {
// "use strict";
  angular
  .module("portfolio", [
      "ui-router"
    ])

  .config([
    "$stateProvider",
    RouterFunction
  ]);

    function RouterFunction($stateProvider){
      $stateProvider
        .state("portfolio.home", {
          url: "/index",
          template: "The portfolio of Jared Nichols",
          templateUrl: "partials/index.html"
          })
        .state("portfolio.development", {
          url: "/development",
          templateUrl: "partials/development.html"
          // controller: "",
        })
        .state("portfolio.design", {
          url: "/design",
          templateUrl: "partials/design.html"
        })
        .state("portfolio.about", {
          url: "/about",
          templateUrl: "partials/about.html"
        })
        .state("portfolio.contact", {
          url: "/contact",
          templateUrl: "partials/contact.html"
        });
      }
})();
