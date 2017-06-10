import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';

// IMPORT STYLESHEETS
import '../assets/lib/animate.css';
import '../assets/style/app.scss';

// IMPORT COMPONENTS
import Menu from './shared/menu/menu.controller';
import menu from './shared/menu/menu.directive';
import Home from './components/home/home.controller';
import Work from './components/work/work.controller';
import Project from './components/project/project.controller';

// let app = () => {
//   return {
//     template: require('./app.html'),
//     controller: 'AppController',
//     controllerAs: 'app'
//   }
// };

class AppController {
  constructor() {
    // this.url = 'http://hoakusa.com';
  }
}

export default angular.module('app', [uirouter, Menu, menu, Home, Work, Project])
  // .directive('app', app)
  .controller('AppController', AppController)
  .config(routing);