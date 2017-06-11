import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './contact.routes';

import AppService from '../../app.service';
import SocialLinkService from '../../shared/social-link.service';

class ContactController {
  constructor(AppService, SocialLinkService) {
    AppService.setTitle('Contact |');
    this.links = SocialLinkService.getLinks();
    
    this.title = 'Contact';
    this.image = 'https://image.ibb.co/cdT2tF/G743bff.jpg';
    this.email = 'anpham.hn910@gmail.com';
    this.cv    = '/';
    this.certification = 'https://www.freecodecamp.com/hoakusa/front-end-certification';
  }
  
}

ContactController.$inject = ['AppService', 'SocialLinkService'];

export default angular.module('app.contact', [uirouter, AppService, SocialLinkService])
  .config(routing)
  .controller('ContactController', ContactController)
  .name;