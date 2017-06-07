import angular from 'angular';

let menu = () => {
  return {
    template: require('./menu.html'),
    controller: 'MenuController',
    controllerAs: 'menu'
  }
};

export default angular.module('directives.menu', [])
  .directive('mainMenu', menu) // directive name is Camel case, directive tag is prefix dash
  .name;