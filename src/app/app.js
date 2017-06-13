import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import WheelIndicator from 'wheel-indicator';

// IMPORT STYLESHEETS
import '../assets/lib/animate.css';
import '../assets/style/app.scss';

// IMPORT COMPONENTS
import Menu from './shared/menu/menu.controller';
import menu from './shared/menu/menu.directive';
import Home from './components/home/home.controller';
import Work from './components/work/work.controller';
import Project from './components/project/project.controller';
import Contact from './components/contact/contact.controller';

import AppService from './app.service';

// let app = () => {
//   return {
//     template: require('./app.html'),
//     controller: 'AppController',
//     controllerAs: 'app'
//   }
// };

class AppController {
  constructor(AppService) {
    this.App = AppService;
    
    this.smoothScroll();
  }

  smoothScroll() {
    // Jquery

    var a=$(window);
    a.on("mousewheel DOMMouseScroll",function(b){
      b.preventDefault();
      b=b.originalEvent.wheelDelta/120||-b.originalEvent.detail/3;
      b=a.scrollTop()-parseInt(280*b);
      TweenMax.to(a,0.6,{scrollTo:{y:b,autoKill:!0},ease:Power2.easeOut,overwrite:5});
      return false;
    });

    // let indicator = new WheelIndicator ({
    //   elem: document.documentElement,
    //   callback: (e) => {
    //     // console.log(e.direction) // "up" or "down"

        
    //   }
    // });

    // indicator.getOption('preventMouse');
  }
}

AppController.$inject = ['AppService'];

export default angular.module('app', [uirouter, Menu, menu, Home, Work, Project, Contact, AppService])
  // .directive('app', app)
  .controller('AppController', AppController)
  .config(routing);