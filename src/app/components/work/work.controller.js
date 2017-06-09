import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './work.routes';

import ProjectService from '../../shared/project.service';

class WorkController {
  constructor(ProjectService) {
    this.title = "Works";

    this.projects = ProjectService.getProjectsAll();
  }
}

WorkController.$inject = ['ProjectService'];

export default angular.module('app.work', [uirouter, ProjectService])
  .config(routing)
  .controller('WorkController', WorkController)
  .name;