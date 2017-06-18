import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngTouch from 'angular-touch';

import routing from './home.routes';

import HomeService from './home.service';
import AppService from '../../app.service';

class HomeController {
  constructor(HomeService, AppService, $interval, $state, $timeout) {
    AppService.setTitle('hoakusa |');
    this.textAnimate();
    
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
    this.setBanner(this.nextPage(this.currentPage), 1);
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

  setBanner(id, direction) { // 0:left 1:right
    this.isActive = [];
    this.isNext   = [];
    this.isPrev   = [];

    for(let i = 0; i<this.pages.length; i++) {
      if (i === id) this.isActive.push(true);
      else this.isActive.push(false);

      if (i === this.nextPage(id) && direction === 0) {
        this.isNext.push(true);
        this.isPrev.push(1);
      }
      else this.isNext.push(false);

      if (i === this.prevPage(id) && direction === 1) this.isPrev.push(2);
      else this.isPrev.push(false);
    }
  }

  goPrev(id) {
    this.$interval.cancel(this.timeinterval);
    this.currentPage = this.prevPage(id);
    this.setBanner(this.prevPage(id), 0);

    this.timeinterval = this.$interval(this.showSlides.bind(this), 10000);
  }

  goNext(id) {
    this.$interval.cancel(this.timeinterval);
    this.currentPage = this.nextPage(id);
    this.setBanner(this.nextPage(id), 1);

    this.timeinterval = this.$interval(this.showSlides.bind(this), 10000);
  }

  goProject(url) {
    this.isWaiting = true;
    this.$timeout(() => {
      this.$state.go('project', {name: url}, {reload: true});
      this.isWaiting = false;
    }, 1900); 
  }

  textAnimate() {
    var s = Snap('#svg-opening svg');
    var text = 'hoakusa';
    var len = text.length;
    var array = [];
    for (var x = 0; x < len; x++) {
      var t = text[x]
      array.push(t);
    }
    var txt = s.text(16, 100, array)
    $('tspan').css({
      'font-size': 80,
      'font-family': 'Sorts Mill Goudy, serif',
      'font-style': 'italic',
      fill: 'rgba(62,96,59,0)',
      stroke: '#3E603B',
      'stroke-dasharray': 300,
      'stroke-dashoffset': 300
    })

    $('tspan').each(function(index) {
      $(this).stop(true, true).delay(350 * index).animate({
        'stroke-dashoffset': 0,
      }, 400, function() {
        $(this).css({'fill': 'rgba(62,96,59, 1)', 'transition': 'fill 0.5s'});
      })
    })
  }
}

HomeController.$inject = ['HomeService', 'AppService', '$interval', '$state', '$timeout'];

export default angular.module('app.home', [uirouter, ngTouch, HomeService, AppService])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;