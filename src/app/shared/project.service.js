import angular from 'angular';

class ProjectService {
  constructor() {
    this.category = ['Web & Mobile', 'Brand & Service', 'Research', 'Game Design'];

    this.projects = [
      {
        name: 'Plantui App',
        category: 0,
        tags: ['Web', 'Mobile', 'iOS', 'Design', 'Service', 'IoT', 'Interaction', 'UX/UI', 'Photoshop', 'Illustrator'],
        time: {
          month: 'March',
          year: '2016'
        },
        partner: {
          name: 'Plantui Oy',
          url: 'http://plantui.com/'
        },
        image: '/img/plantui-cover.png',
        banner_video: '',
        urls: {
          behance: 'https://www.behance.net/gallery/54364375/Plantui-App',
          website: ''
        },
        content: {
          text: 'Apply Internet of Things technique in Plantui Smart device to follow and control plant growth from remote. With Plantui Garden, everyone has fresh vegetable without soil, without take care of all time. Plantui Project is established with Plantui Oy partner and Oulu University of Applied Sciences, Oulu, Finland. The final product includes a website manager and a mobile app service which connect with Plantui device to send plant growth information to user.',
          images: [
            '/img/plantui1.png',
          ]
        }        
      },{
        name: 'Invie House',
        category: 1,
        tags: ['Mobile', 'iOS', 'Design', 'Service', 'Branding', 'IoT', 'Interaction', 'UX/UI', 'Photoshop', 'Sketch App'],
        time: {
          month: 'December',
          year: '2016'
        },
        partner: {
          name: 'Invie Group',
          url: ''
        },
        image: '/img/invie-cover.png',
        banner_video: '',
        urls: {
          behance: 'https://www.behance.net/gallery/54423973/Invie-App',
          website: ''
        },
        content: {
          text: 'Start with saving energy ideal in Avanto kickstarter program, Inive House bring a smart solution for future house to follow and control electric furniture via Invie application. Apply Internet of Things technique in Invie Plug, we bring a wireless house control system for everyone. With Invie House, people are free to control electric device from remote, also observe and manage electric consumption usage. With Invie App, everything is under your control.',
          images: [
            '/img/invie1.png',
          ]
        }        
      },{
        name: 'Alphabet Creative Studio',
        category: 0,
        tags: ['Web', 'Design', 'Wordpress', 'AngularJS', 'Javascript', 'Animation', 'UX/UI', 'Responsive', 'Photoshop', 'Illustrator'],
        time: {
          month: 'June',
          year: '2017'
        },
        partner: {
          name: '',
          url: ''
        },
        image: '/img/alphabet-cover.png',
        banner_video: '',
        urls: {
          behance: 'https://www.behance.net/gallery/54391931/Alphabet-Studio',
          website: 'https://codepen.io/hoakusa/full/ZKRzZX/'
        },
        content: {
          text: 'Alphabet Creative Studio provides website template at the intersection of technology, design, culture, and brand stories. The website exhibits design products made by Alphabet Studio. With bright color set, we believe this website is appropriate landing page for various companes and indie studios. After finish design phase with Photoshop and Illustrator, a demo website was made by AngularJS and available to visit around. Hope people like it.',
          images: [
            '/img/alphabet1.png',
          ]
        }        
      },{
        name: 'Kiem.fi 2017',
        category: 0,
        tags: ['Web', 'Design', 'Wordpress', 'Wordpress API', 'React', 'Animation', 'UX/UI', 'Responsive', 'Kiem Oy', 'Photoshop', 'Illustrator'],
        time: {
          month: 'May',
          year: '2017'
        },
        partner: {
          name: 'Kiem Oy',
          url: 'http://kiem.fi'
        },
        image: '/img/kiem2017-cover.png',
        banner_video: '',
        urls: {
          behance: 'https://www.behance.net/gallery/54369059/Kiemfi-2017',
          website: 'http://kiem.fi'
        },
        content: {
          text: 'Kiem Ravintola is a Chinese Restaurant in Oulu areas, Finland. In remake version, new website interface focuses on highlight Menu list and buffet lounas service. About backend, we continue using Wordpress as manager tool for customize style purpose and update posts. In front-end, because Wordpress has opened REST API from version 4.7 new client can connect with database through request via React-axios, hence, exchange data will pass through request then handle with React components.',
          images: [
            '/img/kiem20171.png',
          ]
        }        
      },{
        name: 'Minhshop E-commercial',
        category: 0,
        tags: ['Web', 'Design', 'E-commercial', 'Interaction', 'UX/UI', 'Responsive', 'Photoshop', 'Illustrator'],
        time: {
          month: 'March',
          year: '2017'
        },
        partner: {
          name: 'Minhshop',
          url: ''
        },
        image: '/img/minhshop-cover.png',
        banner_video: '',
        urls: {
          behance: 'https://www.behance.net/gallery/54370019/Minh-shop',
          website: ''
        },
        content: {
          text: 'The purpose of the project is to design an e-commercial comestic website for Minhshop in Hanoi. Their online shopping activity could increase their profit and attract more attention via social media network. The shop website transmits necessary information about cosmetic products in different categories. Grouping products provides a powerful solution for quickly view and selection that help administrator could effortlessly update product details. More than promoting local store activities, website product can preserve a successful long term relationship between shop and customer.',
          images: [
            '/img/minhshop1.png',
          ]
        }        
      },{
        name: 'Kiem.fi 2015',
        category: 0,
        tags: ['Web', 'Wordpress', 'AngularJS', 'Animation', 'UX/UI', 'Kiem Oy'],
        time: {
          month: 'Feb',
          year: '2015'
        },
        partner: {
          name: 'Kiem Oy',
          url: 'http://kiem.fi'
        },
        image: '/img/kiem2015-cover.png',
        banner_video: '/img/kiem2015.mp4',
        urls: {
          behance: 'https://www.behance.net/gallery/54369059/Kiemfi-2015',
          website: 'http://kiem.fi'
        },
        content: {
          text: 'Kiem Ravintola is a Chinese Restaurant in Oulu areas, Finland. In Kiem site, customers feel relax to search information details, list of foods and music event in Kiem Pub every weekend. Build by Wordpress CMS, the admin page provides a smooth manager tool for modifying and update posts.',
          images: [
            '/img/kiem2015-cover.png',
            '/img/kiem20152.png',
          ]
        }        
      },{
        name: 'OutdoorAR ver2.0',
        category: 0,
        tags: ['Mobile', 'Design', 'Animation', 'Interaction', 'UX/UI', 'Service Design', 'Suprview Oy', 'Augmented Reality', 'Photoshop', 'Illustrator'],
        time: {
          month: 'Aug',
          year: '2015'
        },
        partner: {
          name: 'Suprview Oy',
          url: 'http://suprview.fi'
        },
        image: '/img/indoor-cover.png',
        banner_video: '/img/indoor-cover.mp4',
        urls: {
          behance: 'https://www.behance.net/gallery/54341707/OutdoorAR-ver20',
          website: 'https://play.google.com/store/apps/details?id=com.suprview.prefabshouses&hl=en'
        },
        content: {
          text: 'OUTDOOR AR offers you a gorgeous way to view your house in its glory. In the second version, OUTDOOR AR provides an intuitive technique to discovery both outside and inside your house. With walk through view, customers feel relax to customize home style by own ideal.',
          images: [
            '/img/indoor1.png',
            '/img/indoor2.gif',
            '/img/indoor-cover.png',
            '/img/indoor4.gif',
            '/img/indoor5.png'
          ]
        }
      },{
        name: 'OutdoorAR',
        category: 0,
        tags: ['Mobile', 'Design', 'Animation', 'Interaction', 'UX/UI', 'Service Design', 'Suprview Oy', 'Augmented Reality', 'Photoshop', 'Illustrator'],
        time: {
          month: 'May',
          year: '2015'
        },
        partner: {
          name: 'Suprview Oy',
          url: 'http://suprview.fi'
        },
        image: '/img/outdoorAR-cover.png',
        banner_video: '/img/outdoorAR.mp4',
        urls: {
          behance: 'https://www.behance.net/gallery/54213967/OutdoorAR',
          website: 'https://play.google.com/store/apps/details?id=com.suprview.prefabshouses&hl=en'
        },
        content: {
          text: 'OUTDOOR AR offers you a gorgeous way to view your house in its glory. Under the effect of our amazing software with the use of cutting-edge Augmented Reality technology, 3D model of building will be smoothly visualized in the real environment. There are some unique features such as changing the size or even colors of the building. Our product is known as AR catalog that helps prefabricated house manufacturers to get notification from potential buyers anywhere in the world without a sales person initial contacts. #outdoorAR		#mobileservice		#ARapp	#interactivedesign',
          images: [
            '/img/outdoorAR-cover.png',
            '/img/outdoorAR2.png',
            '/img/outdoorAR3.png',
            '/img/outdoorAR4.gif',
            '/img/outdoorAR5.png',
            '/img/outdoorAR9.gif',
            '/img/outdoorAR10.png',
          ]
        }
      },{
        name: 'Instagroom',
        category: 0,
        tags: ['Mobile', 'Javascript', 'Service', 'Ionic', 'AngularJS'],
        time: {
          month: 'Oct',
          year: '2015'
        },
        partner: {
          name: '',
          url: ''
        },
        image: '/img/instagroom-cover.png',
        banner_video: '/img/instagroom.mp4',
        urls: {
          behance: '',
          website: 'https://github.com/hoakusa/Instagram_client'
        },
        content: {
        text: 'Like Instagram, Instagroom app allows users are able to post shots and sharing life with friends. Through following function and sharing pictures, people are welcome to join image-social world as Instagram app. This project is open source, build with Ionic and Angular 1.x, server runs by Heroku, Expressjs and MongoDB.',
          images: [
            '/img/instagroom-cover.png'
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
          behance: 'https://www.behance.net/gallery/54387205/Alex-in-Wonderland',
          website: 'http://globalgamejam.org/2015/games/alex-wonderland'
        },
        content: {
          text: 'Alex in Wonderland is a PC game build for Window platform, which is made by Unity2D. This game is my first time join Global Game Jam - an annual game maker event during 48 hours. In Alex in Wonderland, the goal is to shoot down as many coin boxes with your boomerang as possible before the countdown runs out, while avoiding bombs and poisonous frogs that will randomly jump out. Use W, A, D key to jump, move left and move right. Press mouse left to aim and hold to charge the power.',
          images: [
            '/img/alex-01.png'
          ]
        }
      },{
        name: 'Nuoriso Liider: Young Thinkers & Doers',
        category: 2,
        tags: ['Marketing plan', 'Demola Oulu', 'Web'],
        time: {
          month: 'April',
          year: '2015'
        },
        partner: {
          name: 'Nouseva Rannikkoseutu ry',
          url: 'https://www.nousevarannikkoseutu.fi/fi/etusivu'
        },
        image: '/img/nuoriso-cover.jpg',
        banner_video: '',
        urls: {
          behance: '',
          website: 'https://www.nousevarannikkoseutu.fi/fi/etusivu'
        },
        content: {
          text: 'The purpose of the project was to build an innovation platform for the YouthLeader program which is aimed at young people aged 13-20 living in one of the 7 municipalities of Hailuoto, Liminka, Tyrnävä, Lumijoki, Siikajoki, Raahe and Pyhäjoki. The program provides funding up to 500 euros to small groups (minimum 3 people) of young people to support their ideas for action and change in their home region. The YouthLeader program is organised by Nouseva Rannikkoseutu (Norsu) ry, and at present, the application process for funding is carried out through the Norsu website www.nousevarannikkoseutu.fi.',
          images: [
            '/img/nuoriso-cover.jpg',
            '/img/nuoriso1.jpg',
            '/img/nuoriso2.jpg',
            '/img/nuoriso3.jpg',
          ]
        }
      },{
        name: 'Quote Machine',
        category: 0,
        tags: ['Web', 'Free Code Camp', 'Javascript', 'Web Animation', 'Social Embeded'],
        time: {
          month: 'June',
          year: '2017'
        },
        partner: {
          name: '',
          url: ''
        },
        image: '/img/quote-cover.png',
        banner_video: '',
        urls: {
          behance: '',
          website: 'https://codepen.io/hoakusa/full/GEKzKN/'
        },
        content: {
          text: 'With Quote Machine, people will get random quotation by genius in the world. In my application, precious quotation resources came from popular book authors. In additional, visitors are welcome to tweet out and sharing favourite quote through twitter network.',
          images: [
            '/img/quote1.png',
            '/img/quote2.png',
            '/img/quote3.png',
            '/img/quote4.png'
          ]
        }
      },{
        name: 'Simon Game',
        category: 0,
        tags: ['Game', 'Javascript', 'Free Code Camp', 'Web'],
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
          behance: '',
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
        tags: ['Game', 'Javascript', 'Free Code Camp', 'Web'],
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
          behance: '',
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
        tags: ['Game', 'Javascript', 'Free Code Camp', 'Web'],
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
          behance: '',
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
        tags: ['Game', 'Javascript', 'Free Code Camp', 'Web'],
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
          behance: '',
          website: 'https://codepen.io/hoakusa/full/VWwyGo/'
        },
        content: {
          text: 'Pomodoro clock is a technique to control and countdown timer as your wish. My online pomodoro Clock via Codepen server brings an intuitive look to set timer. Hope my project is helpful for everyone.',
          images: [
            '/img/pomodoro.png'
          ]
        }
      }  
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