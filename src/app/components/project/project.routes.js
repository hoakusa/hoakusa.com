routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('project', {
      url: '/work/:name',
      template: require('./project.html'),
      controller: 'ProjectController',
      controllerAs: 'project'
    });
}