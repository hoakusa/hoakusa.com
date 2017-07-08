routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('work', {
      url: '/works',
      template: require('./work.html'),
      controller: 'WorkController',
      controllerAs: 'work'
    });
}