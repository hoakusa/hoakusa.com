import angular from 'angular';

class MenuService {
  constructor() {
    this.tabs = [
      {
        name: 'About',
        url: '/',
        state: 'home',
        image: '/img/menu1.jpg'
      },{
        name: 'Works',
        url: '/work',
        state: 'work',
        image: '/img/menu2.jpg'
      },{
        name: 'Blog',
        url: '/',
        state: 'home',
        image: '/img/menu3.jpg'
      },{
        name: 'Contact',
        url: '/contact',
        state: 'contact',
        image: '/img/menu4.jpg'
      }
    ];
  }

  getMenu() {
    this.tabs.forEach((tab, i) => tab.id = '0' + (i + 1));
    return this.tabs;
  }
}

export default angular.module('services.menu', [])
  .service('MenuService', MenuService)
  .name;