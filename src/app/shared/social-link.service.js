import angular from 'angular';

class SocialLinkService {
  constructor() {
    this.links = [
      {
        name: 'Twitter',
        url: 'https://twitter.com/hoakusa'
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/hoakusa/'
      },{
        name: 'Github',
        url: 'https://github.com/hoakusa'
      },{
        name: 'Behance',
        url: 'https://www.behance.net/hoakusa'
      },
      {
        name: 'Dribble',
        url: 'https://dribbble.com/hoakusa'
      }
    ];
  }

  getLinks() {
    return this.links;
  }
}

export default angular.module('services.social-link', [])
  .service('SocialLinkService', SocialLinkService)
  .name;