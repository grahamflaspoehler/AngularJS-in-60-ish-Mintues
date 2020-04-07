var demoApp = angular.module("demoApp", ["ngRoute"]);

demoApp.config(function ($routeProvider){
  $routeProvider
    .when("/", 
      {
        controller: "SimpleController",
        templateUrl: "Partials/View1.html"
      })
    .when("/partial2", 
      {
        controller: "SimpleController",
        templateUrl: "Partials/View2.html"
      })
    .otherwise(
      {
        redirectTo: "/"
      })
});

demoApp.controller("SimpleController", function ($scope){
  $scope.customers = [
    { name: "Dave Jones", city: "Phoenix" },
    { name: "Jamie Riley",  city: "Atlanta" },
    { name: "Heedy Wahlin", city: "Chandler" },
    { name: "Thomas Winter", city: "Seattle" }
  ];

  $scope.addCustomer = function() {
    $scope.customers.push({
      name: $scope.newCustomer.name,
      city: $scope.newCustomer.city
    })
  }
});  