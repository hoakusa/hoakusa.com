import angular from 'angular';

import ProjectService from '../../shared/project.service';

class HomeService {
  constructor(ProjectService) {
    this.ProjectService = ProjectService;
    this.pages = [
      {
        title: 'About',
        description: '',
        projectId: 0
      },{
        title: 'Web Service',
        description: 'Interactive, Full stack Developer, AngularJS, React, Wordpress CMS',
        projectId: 1
      },{
        title: 'iOS/Android Application',
        description: 'Mobile Interaction, Prototype, Invision, Frame.js, IoT app',
        projectId: 2
      },{
        title: 'Brand & Service',
        description: 'Concept, Wireframe, Brand Identity, Photoshop, Illustrator, Sketch App',
        projectId: 3
      }
    ];
  }

  getPages() {
    this.pages.forEach((tab, i) => {
      tab.id = i;
      tab.image = this.ProjectService.getProjectById(tab.projectId).image;
      tab.projectURL = this.ProjectService.getProjectById(tab.projectId).urls.project;
    });
    return this.pages;
  }
}

HomeService.$inject = ['ProjectService'];

export default angular.module('services.home', [ProjectService])
  .service('HomeService', HomeService)
  .name;