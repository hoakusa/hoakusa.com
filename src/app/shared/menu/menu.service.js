import angular from 'angular';

class MenuService {
  constructor() {
    this.tabs = [
      {
        name: 'About',
        url: '/'
      },{
        name: 'Works',
        url: '/'
      },{
        name: 'Contact',
        url: '/'
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