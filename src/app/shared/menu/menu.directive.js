import angular from 'angular';

let menu = () => {
  return {
    template: require('./menu.html'),
    controller: 'MenuController',
    controllerAs: 'menu'
  }
};

export default angular.module('directives.menu', [])
  .directive('menu', menu)
  .name;