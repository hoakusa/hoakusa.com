import angular from 'angular';

class MenuService {
  constructor() {
    this.tabs = [
      {
        name: 'About',
        url: '/'
      },{
        name: 'Works',
        url: '/work'
      },{
        name: 'Blog',
        url: '/'
      },{
        name: 'Contact',
        url: '/contact'
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