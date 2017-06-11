import angular from 'angular';

class MenuService {
  constructor() {
    this.tabs = [
      {
        name: 'About',
        url: '/',
        state: 'home',
        image: 'https://image.ibb.co/nxeAqv/g1.jpg'
      },{
        name: 'Works',
        url: '/work',
        state: 'work',
        image: 'https://image.ibb.co/dBBOAv/g2.jpg'
      },{
        name: 'Blog',
        url: '/',
        state: 'home',
        image: 'https://image.ibb.co/fHygxa/g3.jpg'
      },{
        name: 'Contact',
        url: '/contact',
        state: 'contact',
        image: 'https://image.ibb.co/nxeAqv/g1.jpg'
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