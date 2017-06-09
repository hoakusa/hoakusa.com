import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';

import HomeService from './home.service';

class HomeController {
  constructor(HomeService) {
    this.pages = HomeService.getPages();
    this.page = this.pages[0];
  }

  goPrev() {
    let nextId = this.page.id > 0 ? this.page.id - 1 : this.pages.length - 1;
    this.page = this.pages[nextId % this.pages.length];
  }

  goNext() {
    let nextId = this.page.id + 1;
    this.page = this.pages[nextId % this.pages.length];
  }
}

HomeController.$inject = ['HomeService'];

export default angular.module('app.home', [uirouter, HomeService])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;