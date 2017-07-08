routing.$inject = ['$urlRouterProvider', '$locationProvider','$compileProvider'];

export default function routing($urlRouterProvider, $locationProvider, $compileProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  // config production
  $compileProvider.debugInfoEnabled(false);
  $compileProvider.commentDirectivesEnabled(false);
  $compileProvider.cssClassDirectivesEnabled(false);
}