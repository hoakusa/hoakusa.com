routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('work', {
      url: '/work',
      template: require('./work.html'),
      controller: 'WorkController',
      controllerAs: 'work'
    });
}