import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './work.routes';

import ProjectService from '../../shared/project.service';
import AppService from '../../app.service';

class WorkController {
  constructor(ProjectService, AppService) {
    AppService.setTitle('Works |');
    this.isActive = [true];
    this.title = "Works";
    this.ProjectService = ProjectService;

    this.projects = this.ProjectService.getProjectsAll();
    this.category = this.ProjectService.getCategory();

    for (let i = 0; i < this.category.length; i++) {
      this.isActive.push(false);
    }
  }

  getProjectsAll() {
    for (let i = 0; i < this.isActive.length; i++) {
      this.isActive[i] = (i === 0) ? true : false;
    }    
    this.projects = this.ProjectService.getProjectsAll();
  }

  getProjects(param) {
    for (let i = 0; i < this.isActive.length; i++) {
      this.isActive[i] = (i === param + 1) ? true : false;
    }

    this.projects = this.ProjectService.getProjects(param);
  }
}

WorkController.$inject = ['ProjectService', 'AppService'];

export default angular.module('app.work', [uirouter, ProjectService, AppService])
  .config(routing)
  .controller('WorkController', WorkController)
  .name;