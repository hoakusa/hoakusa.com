import angular from 'angular';
import routing from './app.config';
import uirouter from 'angular-ui-router';

import '../assets/style/app.scss';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'http://hoakusa.com';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .config(routing);

export default MODULE_NAME;