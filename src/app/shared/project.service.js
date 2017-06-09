import angular from 'angular';

class ProjectService {
  constructor() {
    this.category = ['Web & Mobile', 'Brand & Service', 'Research'];

    this.projects = [
      {
        name: 'Project 1',
        category: 0,
        tags: 'Interactive, Full stack Developer, AngularJS, React, Wordpress CMS',
        time: 'February 2017',
        partner: {
          name: 'Kiem Oy',
          url: 'http://kiem.fi'
        },
        image: 'https://image.ibb.co/cdT2tF/G743bff.jpg',
        urls: {
          project: '/',
          bahance: '/',
          website: '/'
        },
        contents: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin purus sapien, sit amet viverra urna laoreet in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum porttitor urna, ac sollicitudin diam fringilla in. Cras at sem in ex interdum pharetra. Proin viverra congue justo, sit amet tincidunt quam dapibus ac.',
          images: [
            'https://image.ibb.co/cdT2tF/G743bff.jpg',
            'https://image.ibb.co/cdT2tF/G743bff.jpg',
            'https://image.ibb.co/cdT2tF/G743bff.jpg'
          ]
        }        
      },{
        name: 'Web Service',
        category: 1,
        tags: 'Interactive, Full stack Developer, AngularJS, React, Wordpress CMS',
        time: 'February 2016',
        partner: {
          name: 'Kiem Oy',
          url: 'http://kiem.fi'
        },
        image: 'https://image.ibb.co/gQ21na/ARiOahH.jpg',
        urls: {
          project: '/',
          bahance: '/',
          website: '/'
        },
        contents: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin purus sapien, sit amet viverra urna laoreet in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum porttitor urna, ac sollicitudin diam fringilla in. Cras at sem in ex interdum pharetra. Proin viverra congue justo, sit amet tincidunt quam dapibus ac.',
          images: [
            'https://image.ibb.co/cdT2tF/G743bff.jpg',
            'https://image.ibb.co/cdT2tF/G743bff.jpg',
            'https://image.ibb.co/cdT2tF/G743bff.jpg'
          ]
        }
      },{
        name: 'iOS/Android Application',
        category: 2,
        tags: 'Mobile Interaction, Prototype, Invision, Frame.js, IoT app',
        time: 'February 2015',
        partner: {
          name: 'Kiem Oy',
          url: 'http://kiem.fi'
        },
        image: 'https://image.ibb.co/dHOkDF/o3hIuqr.jpg',
        urls: {
          project: '/',
          bahance: '/',
          website: '/'
        },
        contents: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin purus sapien, sit amet viverra urna laoreet in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum porttitor urna, ac sollicitudin diam fringilla in. Cras at sem in ex interdum pharetra. Proin viverra congue justo, sit amet tincidunt quam dapibus ac.',
          images: [
            'https://image.ibb.co/cdT2tF/G743bff.jpg',
            'https://image.ibb.co/cdT2tF/G743bff.jpg',
            'https://image.ibb.co/cdT2tF/G743bff.jpg'
          ]
        }
      },{
        name: 'Brand & Service',
        category: 0,
        tags: 'Concept, Wireframe, Brand Identity, Photoshop, Illustrator, Sketch App',
        time: 'February 2014',
        partner: {
          name: 'Kiem Oy',
          url: 'http://kiem.fi'
        },
        image: 'https://image.ibb.co/dHOkDF/o3hIuqr.jpg',
        urls: {
          project: '/',
          bahance: '/',
          website: '/'
        },
        contents: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin purus sapien, sit amet viverra urna laoreet in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum porttitor urna, ac sollicitudin diam fringilla in. Cras at sem in ex interdum pharetra. Proin viverra congue justo, sit amet tincidunt quam dapibus ac.',
          images: [
            'https://image.ibb.co/cdT2tF/G743bff.jpg',
            'https://image.ibb.co/cdT2tF/G743bff.jpg',
            'https://image.ibb.co/cdT2tF/G743bff.jpg'
          ]
        }
      }
    ];
  }

  getCategory() {
    return this.category;
  }

  getProjectsAll() {
    this.projects.map((p,i) => {
      p.id = i;
      p.category_name = this.category[p.category];
      p.urls.project = this.encodeURL(p.name);
    });
    return this.projects;
  }

  getProjects(param) {
    return this.projects.filter((p) => {
      return p.category === param;
    }); 
  }

  getProject(param) {
    let list = this.getProjects();

    return list.filter((p) => {
      return p.url.project === param;
    })[0];   
  }

  encodeURL(str) {
    let url = str.toLowerCase().replace(/[^A-Z0-9]+/ig, "-");
    return url;
  }
}

export default angular.module('services.project', [])
  .service('ProjectService', ProjectService)
  .name;