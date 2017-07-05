import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './work.routes';

import ProjectService from '../../shared/project.service';
import AppService from '../../app.service';

class WorkController {
  constructor(ProjectService, AppService, $state, $timeout, $anchorScroll) {
    AppService.setTitle('Works |');

    $anchorScroll();
    
    this.isWaiting = false;
    this.isActive = [true];
    this.title = "Works";
    this.isClose = false;
    this.isOpen = false;

    this.ProjectService = ProjectService;
    this.$timeout = $timeout;
    this.$state = $state;

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

  goProject(url) {
    this.isWaiting = true;
    this.$timeout(() => {
      this.$state.go('project', {name: url}, {reload: true});
      this.isWaiting = false;
    }, 1900); 
  }

  lastLetter(str) {
    return str.charAt(str.length() - 1);
  }
}

WorkController.$inject = ['ProjectService', 'AppService', '$state', '$timeout', '$anchorScroll'];

export default angular.module('app.work', [uirouter, ProjectService, AppService])
  .config(routing)
  .controller('WorkController', WorkController)
  .name;