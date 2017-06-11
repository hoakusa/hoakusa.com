import angular from 'angular';
import MenuService from './menu.service';
import SocialLinkService from '../social-link.service';

class MenuController {
  constructor(MenuService, SocialLinkService, $state) {
    this.$state = $state;
    this.title = "Alice";
    this.bio = "UX Designer & Web Developer";
    this.tabs = MenuService.getMenu();
    this.links = SocialLinkService.getLinks();
  }

  goto(state) {
    this.close();
    this.$state.go(state, {}, {reload: true});
  }

  open() {
    document.getElementById('menu').style.left = '0';
  }

  close() {
    document.getElementById('menu').style.left = '-100%';
  }
}

MenuController.$inject = ['MenuService', 'SocialLinkService', '$state'];

export default angular.module('app.menu', [MenuService, SocialLinkService])
  .controller('MenuController', MenuController)
  .name;