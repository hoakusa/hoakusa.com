import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';

import HomeService from './home.service';
import AppService from '../../app.service';

class HomeController {
  constructor(HomeService, AppService, $interval) {
    AppService.setTitle('hoakusa |');
    this.pages = HomeService.getPages();
    this.page = this.pages[0];

    this.timeinterval = $interval(this.nextPage.bind(this), 7000);
    this.$interval = $interval;
  }

  prevPage() {
    let nextId = this.page.id > 0 ? this.page.id - 1 : this.pages.length - 1;
    this.page = this.pages[nextId];
  }

  nextPage() {
    let nextId = (this.page.id < this.pages.length - 1) ? this.page.id + 1 : 0;
    this.page = this.pages[nextId];
  }

  goPrev() {
    this.$interval.cancel(this.timeinterval);
    this.prevPage();
    this.timeinterval = this.$interval(this.nextPage.bind(this), 7000);
  }

  goNext() {
    this.$interval.cancel(this.timeinterval);
    this.nextPage();
    this.timeinterval = this.$interval(this.nextPage.bind(this), 7000);
  }
}

HomeController.$inject = ['HomeService', 'AppService', '$interval'];

export default angular.module('app.home', [uirouter, HomeService, AppService])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;