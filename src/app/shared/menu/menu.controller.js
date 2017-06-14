import angular from 'angular';
import MenuService from './menu.service';
import SocialLinkService from '../social-link.service';

class MenuController {
  constructor(MenuService, SocialLinkService, $state, $timeout) {
    this.isOpen   = false;
    this.isClose  = false;
    this.$state   = $state;
    this.$timeout = $timeout;

    this.title    = "Alice";
    this.bio      = "UX Designer & Web Developer";
    this.tabs     = MenuService.getMenu();
    this.links    = SocialLinkService.getLinks();
  }

  goto(state) {
    this.close();
    this.$state.go(state, {}, {reload: true});
  }

  open() {
    this.isClose = false;
    document.getElementById('menu').style.left = '0';
    this.isOpen = true;
    this.$timeout(() => {
      let arr = document.querySelectorAll('.borderV');
      for (let i = 0; i < arr.length; i++) {
        arr[i].style.height = '100%';
      }
    }, 1400);
  }

  close() {
    this.isOpen = false;
    this.isClose = true;

    this.$timeout(() => {
      document.getElementById('menu').style.left = '-100%';
      let arr = document.querySelectorAll('.borderV');
      for (let i = 0; i < arr.length; i++) {
        arr[i].style.height = '0';
      }
    }, 900);
  }
}

MenuController.$inject = ['MenuService', 'SocialLinkService', '$state', '$timeout'];

export default angular.module('app.menu', [MenuService, SocialLinkService])
  .controller('MenuController', MenuController)
  .name;