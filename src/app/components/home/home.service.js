import angular from 'angular';

import ProjectService from '../../shared/project.service';

class HomeService {
  constructor(ProjectService) {
    this.ProjectService = ProjectService;
    this.pages = [
      {
        title: 'About',
        description: '',
        projectId: 0,
        image: '/img/plantui-banner.jpg',
      },{
        title: 'Web Service',
        description: 'Web Design, UX/UI, Full stack Developer, AngularJS, React, Wordpress CMS',
        projectId: 3,
        image: '/img/banner2.jpg',
      },{
        title: 'iOS/Android Application',
        description: 'Mobile Design, Interaction & Motion, Prototype, Invision, IoT app',
        projectId: 7,
        image: '/img/banner31.jpg',
      },{
        title: 'Brand & Service',
        description: 'Concept, Wireframe, Brand Identity, Photoshop, Illustrator, Sketch App',
        projectId: 1,
        image: '/img/banner4.jpg',
      }
    ];
  }

  getPages() {
    this.pages.forEach((tab, i) => {
      tab.id = i;
      tab.projectURL = this.ProjectService.getProjectById(tab.projectId).urls.project;
    });
    return this.pages;
  }
}

HomeService.$inject = ['ProjectService'];

export default angular.module('services.home', [ProjectService])
  .service('HomeService', HomeService)
  .name;