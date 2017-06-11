import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './project.routes';

import ProjectService from '../../shared/project.service';
import AppService from '../../app.service';

class ProjectController {
  constructor(ProjectService, AppService, $stateParams, $state, $location) {
    let name = $stateParams.name;
    this.ProjectService = ProjectService;
    this.$location = $location;

    if (!!ProjectService.getProject(name)) {
      // If url param is existed.
      this.data = ProjectService.getProject(name);
      this.relateWorks = ProjectService.findRelateWork(this.data.id);

      AppService.setTitle(this.data.name + ' |');
      
    } else {
      // If url param isnt existed -> back to work page
      $state.go('work', {}, {reload: true});      
    }   
  }

  goPrev() {
    let nextPath = '/work/' + this.ProjectService.findPrev(this.data.id);
    this.$location.path(nextPath);
  }

  goNext() {
    let nextPath = '/work/' + this.ProjectService.findNext(this.data.id);
    this.$location.path(nextPath);
  }
  
}

ProjectController.$inject = ['ProjectService', 'AppService', '$stateParams', '$state', '$location'];

export default angular.module('app.project', [uirouter, ProjectService, AppService])
  .config(routing)
  .controller('ProjectController', ProjectController)
  .name;