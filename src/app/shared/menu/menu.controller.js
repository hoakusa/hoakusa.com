import angular from 'angular';
import MenuService from './menu.service';

class MenuController {
  constructor(MenuService) {
    this.title = "Alice";
    this.tabs = MenuService.getMenu();
    console.log(this.tabs);
  }
}

MenuController.$inject = ['MenuService'];

export default angular.module('app.menu', [MenuService])
  .controller('MenuController', MenuController)
  .name;