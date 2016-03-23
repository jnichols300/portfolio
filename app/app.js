

(function() {
"use strict";
  angular
  .module('portfolio', [
      "ui-router",
      "partials"
    ])

  .config([
    "$stateProvider",
    RouterFunction
  ]);

    function RouterFunction($stateProvider){
      $stateProvider
        .state("home", {
          url: "",
          template: "The portfolio of Jared Nichols"
          })
        .state("development", {
          url: "/development",
          templateUrl: "app/partials/development.html",
          // controller: "",
        })
        .state("design", {
          url: "/design",
          templateUrl: "app/partials/design.html",
        })
        .state("about", {
          url: "/about",
          templateUrl: "app/partials/about.html",
        })
        .state("contact", {
          url: "/contact",
          templateUrl: "app/partials/contact.html",
        });
      }
})();
