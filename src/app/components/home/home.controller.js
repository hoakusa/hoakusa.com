import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';

import HomeService from './home.service';
import AppService from '../../app.service';

class HomeController {
  constructor(HomeService, AppService) {
    AppService.setTitle('hoakusa |');
    this.pages = HomeService.getPages();
    this.page = this.pages[0];
  }

  goPrev() {
    let nextId = this.page.id > 0 ? this.page.id - 1 : this.pages.length - 1;
    this.page = this.pages[nextId];
  }

  goNext() {
    let nextId = (this.page.id < this.pages.length - 1) ? this.page.id + 1 : 0;
    this.page = this.pages[nextId];
  }
}

HomeController.$inject = ['HomeService', 'AppService'];

export default angular.module('app.home', [uirouter, HomeService, AppService])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;