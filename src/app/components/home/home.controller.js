import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';

import HomeService from './home.service';
import AppService from '../../app.service';

class HomeController {
  constructor(HomeService, AppService, $interval, $state, $timeout) {
    AppService.setTitle('hoakusa |');
    this.isWaiting  = false;

    this.pages = HomeService.getPages();
    this.currentPage = 0;

    this.isActive = [];  
    this.isActive[0] = true;

    this.timeinterval = $interval(this.showSlides.bind(this), 10000);
    this.$interval = $interval;
    this.$state = $state;
    this.$timeout = $timeout;
  }

  showSlides() {
    this.setBanner(this.nextPage(this.currentPage));
    this.currentPage = this.nextPage(this.currentPage);
  }

  prevPage(id) {
    let nextId = id > 0 ? id - 1 : this.pages.length - 1;
    return nextId;
  }

  nextPage(id) {
    let nextId = (id < this.pages.length - 1) ? id + 1 : 0;
    return nextId;
  }

  setBanner(id) {
    this.isActive = [];
    this.isNext   = [];
    this.isPrev   = [];

    for(let i = 0; i<this.pages.length; i++) {
      if (i === id) this.isActive.push(true);
      else this.isActive.push(false);

      if (i === this.nextPage(id)) this.isNext.push(true);
      else this.isNext.push(false);

      if (i === this.prevPage(id)) this.isPrev.push(true);
      else this.isPrev.push(false);
    }
  }

  goPrev(id) {
    this.$interval.cancel(this.timeinterval);
    this.currentPage = this.prevPage(id);
    this.setBanner(this.prevPage(id));

    this.timeinterval = this.$interval(this.showSlides.bind(this), 10000);
  }

  goNext(id) {
    this.$interval.cancel(this.timeinterval);
    this.currentPage = this.nextPage(id);
    this.setBanner(this.nextPage(id));

    this.timeinterval = this.$interval(this.showSlides.bind(this), 10000);
  }

  goProject(url) {
    this.isWaiting = true;
    this.$timeout(() => {
      this.$state.go('project', {name: url}, {reload: true});
      this.isWaiting = false;
    }, 2900); 
  }
}

HomeController.$inject = ['HomeService', 'AppService', '$interval', '$state', '$timeout'];

export default angular.module('app.home', [uirouter, HomeService, AppService])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;