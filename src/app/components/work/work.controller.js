import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './work.routes';

import ProjectService from '../../shared/project.service';
import AppService from '../../app.service';

class WorkController {
  constructor(ProjectService, AppService, $timeout) {
    AppService.setTitle('Works |');
    this.isActive = [true];
    this.title = "Works";
    this.isClose = false;
    this.isOpen = false;

    this.ProjectService = ProjectService;
    this.$timeout = $timeout;

    this.projects = this.ProjectService.getProjectsAll();
    this.category = this.ProjectService.getCategory();

    for (let i = 0; i < this.category.length; i++) {
      this.isActive.push(false);
    }
  }

  getProjectsAll() {
    this.isClose = true;

    for (let i = 0; i < this.isActive.length; i++) {
      this.isActive[i] = (i === 0) ? true : false;
    }    
    
    this.$timeout(() => {
      this.isClose = false;
      this.isOpen = true;
      this.projects = this.ProjectService.getProjectsAll();
    }, 700);
  }

  getProjects(param) {
    this.isClose = true;

    for (let i = 0; i < this.isActive.length; i++) {
      this.isActive[i] = (i === param + 1) ? true : false;
    }

    this.$timeout(() => {
      this.isClose = false;
      this.isOpen = true;
      this.projects = this.ProjectService.getProjects(param);
    }, 700);
  }

  elementIn($el) {
    $el.addClass('fadeInUp');
    setTimeout(() => {
      $el.css('opacity', 1);
    }, 900);
  }
}

WorkController.$inject = ['ProjectService', 'AppService', '$timeout'];

export default angular.module('app.work', [uirouter, ProjectService, AppService])
  .config(routing)
  .controller('WorkController', WorkController)
  .name;