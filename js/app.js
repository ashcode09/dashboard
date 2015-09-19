var dashboardApp = angular.module('Dashboard', ['ngRoute']);

dashboardApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about', {
        templateUrl: 'views/about.html',
        controller: 'dashController'
      }).
      when('/accessing', {
        templateUrl: 'views/accessing.html',
        controller: 'dashController'
      }).
      when('/manage-account', {
        templateUrl: 'views/manageAccount.html',
        controller: 'dashController'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);