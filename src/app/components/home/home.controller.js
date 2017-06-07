import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';

import menu from '../../shared/menu/menu.directive';

class HomeController {
  constructor() {
    this.name = 'World';
  }

  changeName() {
    this.name = 'angular-tips';
  }
}

export default angular.module('app.home', [uirouter, menu])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;