import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './contact.routes';

import AppService from '../../app.service';
import DataService from '../../shared/data.service';

class ContactController {
  constructor(AppService, DataService) {
    AppService.setTitle('Contact |');
    let contact = DataService.getContact();

    this.links = contact.links;    
    this.title = 'Contact';
    this.image = contact.image;
    this.email = contact.email;
    this.cv    = contact.cv;
    this.certification = contact.certification;
  }

  elementIn($el) {
    $el.addClass('fadeInUp');
    setTimeout(() => {
      $el.css('opacity', 1);
    }, 900);
  }
  
}

ContactController.$inject = ['AppService', 'DataService'];

export default angular.module('app.contact', [uirouter, AppService, DataService])
  .config(routing)
  .controller('ContactController', ContactController)
  .name;