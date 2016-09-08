function componentRoutes ($stateProvider, $urlRouterProvider) {

  // $urlRouterProvider.otherwise("/state1");

  // TODO: try internal routes with different hash prefixes

  /* $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "partials/state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "partials/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    }); */
}

componentRoutes.$inject = ['$stateProvider', '$urlRouterProvider']

export default componentRoutes

