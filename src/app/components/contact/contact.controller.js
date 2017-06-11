import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './contact.routes';

import AppService from '../../app.service';

class ContactController {
  constructor(AppService) {
    AppService.setTitle('Contact |');
    this.title = 'Contact';
    this.image = 'https://image.ibb.co/cdT2tF/G743bff.jpg';
  }
  
}

ContactController.$inject = ['AppService'];

export default angular.module('app.contact', [uirouter, AppService])
  .config(routing)
  .controller('ContactController', ContactController)
  .name;