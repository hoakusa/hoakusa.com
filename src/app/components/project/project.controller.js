import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './project.routes';

import ProjectService from '../../shared/project.service';
import AppService from '../../app.service';

class ProjectController {
  constructor(ProjectService, AppService, $stateParams, $state) {
    let name = $stateParams.name;
    this.ProjectService = ProjectService;
    this.$state = $state;

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
    this.$state.go('project', {name: this.ProjectService.findPrev(this.data.id)}, {reload: true});
  }

  goNext() {
    this.$state.go('project', {name: this.ProjectService.findNext(this.data.id)}, {reload: true});
  }

  elementIn($el) {
    $el.addClass('fadeInUp');
    setTimeout(() => {
      $el.css('opacity', 1);
    }, 900);
  }
  
}

ProjectController.$inject = ['ProjectService', 'AppService', '$stateParams', '$state'];

export default angular.module('app.project', [uirouter, ProjectService, AppService])
  .config(routing)
  .controller('ProjectController', ProjectController)
  .name;