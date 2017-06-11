import angular from 'angular';

class AppService {
  constructor() {
    this.title = 'Alice - UX Designer & Web Developer';
  }

  getTitle() {
    return this.title;
  }

  setTitle(str) {
    this.title = str + ' Alice - UX Designer & Web Developer';
  }
}

export default angular.module('services.app', [])
  .service('AppService', AppService)
  .name;

