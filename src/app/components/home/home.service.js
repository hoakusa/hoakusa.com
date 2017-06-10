import angular from 'angular';

class HomeService {
  constructor() {
    this.pages = [
      {
        title: 'About',
        description: '',
        image: 'https://image.ibb.co/cdT2tF/G743bff.jpg',
        projectURL: '/work/project-1'
      },{
        title: 'Web Service',
        description: 'Interactive, Full stack Developer, AngularJS, React, Wordpress CMS',
        image: 'https://image.ibb.co/gQ21na/ARiOahH.jpg',
        projectURL: '/work/web-service'
      },{
        title: 'iOS/Android Application',
        description: 'Mobile Interaction, Prototype, Invision, Frame.js, IoT app',
        image: 'https://image.ibb.co/dHOkDF/o3hIuqr.jpg',
        projectURL: '/work/ios-android-application'
      },{
        title: 'Brand & Service',
        description: 'Concept, Wireframe, Brand Identity, Photoshop, Illustrator, Sketch App',
        image: 'https://image.ibb.co/dHOkDF/o3hIuqr.jpg',
        projectURL: '/work/brand-service'
      }
    ];
  }

  getPages() {
    this.pages.forEach((tab, i) => tab.id = i);
    return this.pages;
  }
}

export default angular.module('services.home', [])
  .service('HomeService', HomeService)
  .name;