import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';

import ScrollAnimate from './shared/angular-scroll-animate';
import ngParallax from './shared/ngParallax';

// IMPORT STYLESHEETS
import '../assets/lib/animate.css';
import '../assets/style/app.scss';

// IMPORT COMPONENTS
import Menu from './shared/menu/menu.controller';
import menu from './shared/menu/menu.directive';
import Home from './components/home/home.controller';
import Work from './components/work/work.controller';
import Project from './components/project/project.controller';
import Contact from './components/contact/contact.controller';

import AppService from './app.service';

// let app = () => {
//   return {
//     template: require('./app.html'),
//     controller: 'AppController',
//     controllerAs: 'app'
//   }
// };

class AppController {
  constructor(AppService) {
    this.App = AppService;
  }
}

AppController.$inject = ['AppService'];

export default angular.module('app', [uirouter, Menu, menu, Home, Work, Project, Contact, AppService, ScrollAnimate, ngParallax])
  // .directive('app', app)
  .controller('AppController', AppController)
  .config(routing);