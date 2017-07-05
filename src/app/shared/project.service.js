import angular from 'angular';

class ProjectService {
  constructor() {
    this.category = ['Web & Mobile', 'Brand & Service', 'Research', 'Game Design'];

    this.projects = [
      {
        name: 'Project 1',
        category: 0,
        tags: ['Interactive', 'Full stack Developer', 'AngularJS', 'React', 'Wordpress CMS'],
        time: {
          month: 'Feb',
          year: '2017'
        },
        partner: {
          name: 'Kiem Oy',
          url: 'http://kiem.fi'
        },
        image: 'https://image.ibb.co/cdT2tF/G743bff.jpg',
        banner_video: '',
        urls: {
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
        time: {
          month: 'Feb',
          year: '2016'
        },
        partner: {
          name: 'Kiem Oy',
          url: 'http://kiem.fi'
        },
        image: 'https://image.ibb.co/gQ21na/ARiOahH.jpg',
        banner_video: '',
        urls: {
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
        time: {
          month: 'Feb',
          year: '2015'
        },
        partner: {
          name: 'Kiem Oy',
          url: 'http://kiem.fi'
        },
        image: 'https://image.ibb.co/dHOkDF/o3hIuqr.jpg',
        banner_video: '',
        urls: {
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
        name: 'Alex in Wonderland',
        category: 3,
        tags: ['Game', 'Game Design', 'Unity2D', 'Global Game Jam'],
        time: {
          month: 'Jan',
          year: '2015'
        },
        partner: {
          name: 'Global Game Jam',
          url: 'http://globalgamejam.org/'
        },
        image: '/img/alex-cover.png',
        banner_video: '/img/alex-cover.mp4',
        urls: {
          bahance: 'https://www.behance.net/gallery/54387205/Alex-in-Wonderland',
          website: 'http://globalgamejam.org/2015/games/alex-wonderland'
        },
        content: {
          text: 'Alex in Wonderland is a PC game build for Window platform, which is made by Unity2D. This game is my first time join Global Game Jam - an annual game maker event during 48 hours. In Alex in Wonderland, the goal is to shoot down as many coin boxes with your boomerang as possible before the countdown runs out, while avoiding bombs and poisonous frogs that will randomly jump out. Use W, A, D key to jump, move left and move right. Press mouse left to aim and hold to charge the power.',
          images: [
            '/img/alex-01.png'
          ]
        }
      },{
        name: 'Simon Game',
        category: 0,
        tags: ['Game', 'Javascript', 'Free Code Camp', 'web app'],
        time: {
          month: 'June',
          year: '2017'
        },
        partner: {
          name: '',
          url: ''
        },
        image: '/img/simon-cover.png',
        banner_video: '/img/simon.mp4',
        urls: {
          bahance: '',
          website: 'https://codepen.io/hoakusa/full/wevVKw/'
        },
        content: {
          text: 'Simon Game is an electronic game of memory skills, requires player listen to music (or sound) then repeat what they hear in order. At each level, game device plays sounds and show the light (red, green, yellow, blue) which correspond to the sound order. Player has to remember the order of sound and light position. After game device done, playes has to perform what they heard in the order as game device played before. If player plays right, he will pass to next level, if wrong answer, game will restart.',
          images: [
            '/img/simon1.png',
            '/img/simon2.png',
            '/img/simon3.png',
          ]
        }
      },{
        name: 'Tic tac toe',
        category: 0,
        tags: ['Game', 'Javascript', 'Free Code Camp', 'web app'],
        time: {
          month: 'June',
          year: '2017'
        },
        partner: {
          name: '',
          url: ''
        },
        image: '/img/tic-cover.png',
        banner_video: '/img/tic.mp4',
        urls: {
          bahance: '',
          website: 'https://codepen.io/hoakusa/full/KqKRzg/'
        },
        content: {
          text: 'My game is based on classical Tic-tac-toe paper game. Here, there are 2 playes, X and O, who take turns marking the spaces in a 3x3 grid. First player who place three of their mark (same X or O) in a horizontal, vertical or diagonal row wins this game. In my game, playes will play versus computer. Hope people like it.',
          images: [
            '/img/tic1.png',
            '/img/tic2.png',
            '/img/tic3.png',
            '/img/tic4.png',
          ]
        }
      },{
        name: 'Calculator',
        category: 0,
        tags: ['Game', 'Javascript', 'Free Code Camp', 'web app'],
        time: {
          month: 'June',
          year: '2017'
        },
        partner: {
          name: '',
          url: ''
        },
        image: '/img/calculator.png',
        banner_video: '',
        urls: {
          bahance: '',
          website: 'https://codepen.io/hoakusa/full/yXLPby/'
        },
        content: {
          text: 'The application is an electrical calculator simulator follow Skeuomorphism design. People can do simple operators with my calculator such as sum, subtract, multiply, divide. Hope people will like it.',
          images: [
            '/img/calculator.png'
          ]
        }
      },{
        name: 'Pomodoro Clock',
        category: 0,
        tags: ['Game', 'Javascript', 'Free Code Camp', 'web app'],
        time: {
          month: 'June',
          year: '2017'
        },
        partner: {
          name: '',
          url: ''
        },
        image: '/img/pomodoro.png',
        banner_video: '',
        urls: {
          bahance: '',
          website: 'https://codepen.io/hoakusa/full/VWwyGo/'
        },
        content: {
          text: 'Pomodoro clock is a technique to control and countdown timer as your wish. My online pomodoro Clock via Codepen server brings an intuitive look to set timer. Hope my project is helpful for everyone.',
          images: [
            '/img/pomodoro.png'
          ]
        }
      },      
    ];
  }

  getCategory() {
    return this.category.slice(0, 3);
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

    let p_array = [];
    let c_array = [];
    let results = [];

    this.projects.map((p,i) => {
      if (i !== id) {
        let count = 0;

        p.tags.map((tag,j) => {
          if (project.tags.indexOf(tag) > -1) count++;
        });

        if (count > 0) {
          let p_result = {
            projectId: i,
            count: count
          }

          p_array.push(p_result);
          c_array.push(count);
        }
      }      
    });

    // Return best 3 index
    if (c_array.length > 3) {
      this.findMax3(c_array).map((c,i) => {
        let k = false; // find only first item

        p_array.map((p,i) => {
          if (p.count === c && !k) {
            results.push(p.projectId);
            p_array.splice(i,1);
            k = true;
          }
        });
      });
      return results;

    } else if (c_array.length > 0) {
      c_array.map((c,i) => {
        let k = false; // find only first item

        p_array.map((p,i) => {
          if (p.count === c && !k) {
            results.push(p.projectId);
            p_array.splice(i,1);
            k = true;
          }
        });
      });
      return results;

    } else return results;
    
  }

  findMax3(array) {
    let array2 = array;
    let results = [];
    for (let i = 0; i < 3; i++) {
      let max = Math.max.apply(Math, array2);
      results.push(max);
      array2.splice(array2.indexOf(max),1);
    }
    return results;
  }
}

export default angular.module('services.project', [])
  .service('ProjectService', ProjectService)
  .name;