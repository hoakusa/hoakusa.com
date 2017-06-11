import angular from 'angular';

class ProjectService {
  constructor() {
    this.category = ['Web & Mobile', 'Brand & Service', 'Research'];

    this.projects = [
      {
        name: 'Project 1',
        category: 0,
        tags: ['Interactive', 'Full stack Developer', 'AngularJS', 'React', 'Wordpress CMS'],
        time: 'Feb 2017',
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
        content: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin purus sapien, sit amet viverra urna laoreet in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum porttitor urna, ac sollicitudin diam fringilla in. Cras at sem in ex interdum pharetra. Proin viverra congue justo, sit amet tincidunt quam dapibus ac.',
          images: [
            'https://image.ibb.co/cdT2tF/G743bff.jpg',
            'https://image.ibb.co/gQ21na/ARiOahH.jpg',
            'https://image.ibb.co/dHOkDF/o3hIuqr.jpg'
          ]
        }        
      },{
        name: 'Web Service',
        category: 1,
        tags: ['Interactive', 'Full stack Developer', 'AngularJS', 'React', 'Wordpress CMS'],
        time: 'Feb 2016',
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
        content: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin purus sapien, sit amet viverra urna laoreet in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum porttitor urna, ac sollicitudin diam fringilla in. Cras at sem in ex interdum pharetra. Proin viverra congue justo, sit amet tincidunt quam dapibus ac.',
          images: [
            'https://image.ibb.co/cdT2tF/G743bff.jpg',
            'https://image.ibb.co/gQ21na/ARiOahH.jpg',
            'https://image.ibb.co/dHOkDF/o3hIuqr.jpg'
          ]
        }
      },{
        name: 'iOS/Android Application',
        category: 2,
        tags: ['Mobile Interaction', 'Prototype', 'Invision', 'Frame.js', 'IoT app'],
        time: 'Feb 2015',
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
        content: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin purus sapien, sit amet viverra urna laoreet in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum porttitor urna, ac sollicitudin diam fringilla in. Cras at sem in ex interdum pharetra. Proin viverra congue justo, sit amet tincidunt quam dapibus ac.',
          images: [
            'https://image.ibb.co/cdT2tF/G743bff.jpg',
            'https://image.ibb.co/gQ21na/ARiOahH.jpg',
            'https://image.ibb.co/dHOkDF/o3hIuqr.jpg'
          ]
        }
      },{
        name: 'Brand & Service',
        category: 0,
        tags: ['Concept', 'Wireframe', 'Brand Identity', 'Photoshop', 'Illustrator', 'Sketch App'],
        time: 'Feb 2014',
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
        content: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin purus sapien, sit amet viverra urna laoreet in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum porttitor urna, ac sollicitudin diam fringilla in. Cras at sem in ex interdum pharetra. Proin viverra congue justo, sit amet tincidunt quam dapibus ac.',
          images: [
            'https://image.ibb.co/cdT2tF/G743bff.jpg',
            'https://image.ibb.co/gQ21na/ARiOahH.jpg',
            'https://image.ibb.co/dHOkDF/o3hIuqr.jpg'
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
      p.tag_name = p.tags.join(', ');
      p.urls.project = this.encodeURL(p.name);
    });
    return this.projects;
  }

  getProjects(param) {
    let list = this.getProjectsAll();
    return list.filter((p) => {
      return p.category === param;
    }); 
  }

  getProject(param) {
    let list = this.getProjectsAll();

    return list.filter((p) => {
      return p.urls.project === param;
    })[0];
  }

  getProjectById(id) {
    let list = this.getProjectsAll();

    return list.filter((p,i) => {
      return i === id;
    })[0];
  }

  encodeURL(str) {
    let url = str.toLowerCase().replace(/[^A-Z0-9]+/ig, "-");
    return url;
  }

  findPrev(id) {
    let nextId = id > 0 ? id - 1 : this.projects.length - 1;
    return this.getProjectById(nextId).urls.project;
  }

  findNext(id) {
    let nextId = (id < this.projects.length - 1) ? id + 1 : 0;
    return this.getProjectById(nextId).urls.project;
  }

  findRelateWork(id) {
    let results = [];
    let listId = this.findRelateWorkId(id);
    
    if (listId.length > 2) {
      listId.map((val) => results.push(this.getProjectById(val)));
      return results;
    }
    
    if (listId.length === 2) {
      listId.map((val) => results.push(this.getProjectById(val)));
      let add = this.getProjectsAll().filter((p,i) => {
        return p.id !== id && listId.indexOf(p.id) === -1;
      });
      results.push(add[0]);
      return results;

    }
    
    if (listId.length === 1) {
      listId.map((val) => results.push(this.getProjectById(val)));
      let add = this.getProjectsAll().filter((p,i) => {
        return p.id !== id && listId.indexOf(p.id) === -1;
      });
      results.push(add[0], add[1]);
      return results;
    }

    if (listId.length === 0) {
      let add = this.getProjectsAll().filter((p,i) => {
        return p.id !== id;
      });
      results.push(add[0], add[1], add[2]);
      return results;
    }

  }

  findRelateWorkId(id) {
    let project = this.projects[id];   
    let results = this.findRelateTag(id);
    
    if (results.length === 3) return results;
    else if (results.length > 0) {

      let filter = this.projects.filter((p,i) => {
        if (results.indexOf(i) === -1 && i !== id) return p.category === project.category;
      });

      if (results.length === 2 && filter.length > 0) {
        results.push(filter[0].id);
        return results;
      }

      if (results.length === 1 && filter.length > 1) {
        results.push(filter[0].id, filter[1].id);
        return results;
      }

      return results;
    } else {
      let filter = this.projects.filter((p,i) => {
        if (i !== id) return p.category === project.category;
      });

      if (filter.length >= 3) return [filter[0].id, filter[1].id, filter[2].id];
      else if (filter.length === 2) return [filter[0].id, filter[1].id];
      else if (filter.length === 1) return [filter[0].id];
      else return results;
    }
  }

  findRelateTag(id) {
    let project = this.projects[id];
    let p_result = [];
    let c_result = [];
    let results = [];

    this.projects.map((p,i) => {
      if (i !== id) {
        let count = 0;

        p.tags.map((tag,j) => {
          if (project.tags.indexOf(tag) > -1) count++;
        });

        if (count > 0) {
          p_result.push(i);
          c_result.push(count);
        }
      }      
    });

    // Return best 3 index
    if (c_result.length > 3) {
      this.findMax3(c_result).map((c,i) => {
        results.push(p_result[c_result.indexOf(c)]);
      });
      return results;
    } else if (c_result.length === 3) {
      c_result.map((c,i) => {
        results.push(p_result[c_result.indexOf(c)]);
      });
      return results;
    } else {
      c_result.map((c,i) => {
        results.push(p_result[c_result.indexOf(c)]);
      });
      return results;
    }
    
  }

  findMax3(array) {
    let array2 = array;
    let results = [];
    for (let i = 0; i < 3; i++) {
      let max = Math.max.apply(Math, array2);
      results.push(array.indexOf(max));
      array2.splice(array2.indexOf(max),1);
    }
    return results;
  }
}

export default angular.module('services.project', [])
  .service('ProjectService', ProjectService)
  .name;