import angular from 'angular';
import MenuService from './menu.service';
import SocialLinkService from '../social-link.service';

class MenuController {
  constructor(MenuService, SocialLinkService) {
    this.title = "Alice";
    this.bio = "UX Designer & Web Developer";
    this.tabs = MenuService.getMenu();
    this.links = SocialLinkService.getLinks();

    this.isActive = false; // Close menu
  }
}

MenuController.$inject = ['MenuService', 'SocialLinkService'];

export default angular.module('app.menu', [MenuService, SocialLinkService])
  .controller('MenuController', MenuController)
  .name;