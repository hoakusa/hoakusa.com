import angular from 'angular';
import MenuService from './menu.service';
import DataService from '../data.service';

class MenuController {
  constructor(MenuService, DataService, $state, $timeout) {
    this.isWaiting = false;
    this.isOpen   = false;
    this.isClose  = false;
    this.$state   = $state;
    this.$timeout = $timeout;

    this.title    = "Alice";
    this.bio      = "UX Designer & Web Developer";
    this.tabs     = MenuService.getMenu();
    this.links    = DataService.getContact().links;
  }

  goto(state) {
    this.close();
    
    this.isWaiting = true;
    this.$timeout(() => {
      this.$state.go(state, {}, {reload: true});
      this.isWaiting = false;
    }, 1900);
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
    }, 300);
  }
}

MenuController.$inject = ['MenuService', 'DataService', '$state', '$timeout'];

export default angular.module('app.menu', [MenuService, DataService])
  .controller('MenuController', MenuController)
  .name;