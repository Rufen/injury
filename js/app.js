var myApp = angular.module('myApp', [
  'ngRoute',
  'injuryControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/injury', {
    templateUrl: 'partials/injury.html',
    controller: 'InjuryController'
  }).
  when('/reported', {
    templateUrl: 'partials/reported.html',
    controller: 'SupervisorController'
  }).
  when('/supervisor', {
    templateUrl: 'partials/supervisor.html',
    controller: 'SupervisorController'
  }).
  when('/summary', {
    templateUrl: 'partials/summary.html',
    controller: 'SummaryController'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/injury'
  });
}]);