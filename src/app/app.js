import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';

// IMPORT STYLESHEETS
import '../assets/style/app.scss';
import '../assets/lib/pure-min.css';
import '../assets/lib/animate.css';

// IMPORT COMPONENTS
import Menu from './shared/menu/menu.controller';
import Home from './components/home/home.controller';

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

export default angular.module('app', [uirouter, Home, Menu])
  // .directive('app', app)
  .controller('AppController', AppController)
  .config(routing);