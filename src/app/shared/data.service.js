import angular from 'angular';

class DataService {
  constructor() {
    this.contact = {
      image: '/img/contactbg.jpg',
      email: 'anpham.hn910@gmail.com',
      cv:    '/img/AnPham_CV.pdf',
      certification: 'https://www.freecodecamp.com/hoakusa/front-end-certification',
      links: [
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
      ]
    };

    this.categories = ['Web & Mobile', 'Brand & Service', 'Research', 'Game Design'];
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
        image: '/img/plantui-cover.jpg',
        banner_image: '/img/plantui-banner.jpg',
        banner_video: '',
        urls: {
          behance: 'https://www.behance.net/gallery/54364375/Plantui-App',
          website: ''
        },
        content: {
          text: 'Apply Internet of Things technique in Plantui Smart device to follow and control plant growth from remote. With Plantui Garden, everyone has fresh vegetable without soil, without take care of all time. Plantui Project is established with Plantui Oy partner and Oulu University of Applied Sciences, Oulu, Finland. The final product includes a website manager and a mobile app service which connect with Plantui device to send plant growth information to user.',
          images: [
            '/img/plantui1.jpg',
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
        image: '/img/invie-cover.jpg',
        banner_image: '/img/banner4.jpg',
        banner_video: '',
        urls: {
          behance: 'https://www.behance.net/gallery/54423973/Invie-App',
          website: ''
        },
        content: {
          text: 'Start with saving energy ideal in Avanto kickstarter program, Inive House bring a smart solution for future house to follow and control electric furniture via Invie application. Apply Internet of Things technique in Invie Plug, we bring a wireless house control system for everyone. With Invie House, people are free to control electric device from remote, also observe and manage electric consumption usage. With Invie App, everything is under your control.',
          images: [
            '/img/invie1.jpg',
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
        image: '/img/kiem2017-cover.jpg',
        banner_image: '/img/kiem2017-cover.jpg',
        banner_video: '',
        urls: {
          behance: 'https://www.behance.net/gallery/54369059/Kiemfi-2017',
          website: 'http://kiem.fi'
        },
        content: {
          text: 'Kiem Ravintola is a Chinese Restaurant in Oulu areas, Finland. In remake version, new website interface focuses on highlight Menu list and buffet lounas service. About backend, we continue using Wordpress as manager tool for customize style purpose and update posts. In front-end, because Wordpress has opened REST API from version 4.7 new client can connect with DataServicebase through request via React-axios, hence, exchange DataService will pass through request then handle with React components.',
          images: [
            '/img/kiem20171.jpg',
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
        image: '/img/minhshop-cover.jpg',
        banner_image: '/img/minhshop-cover.jpg',
        banner_video: '',
        urls: {
          behance: 'https://www.behance.net/gallery/54370019/Minh-shop',
          website: ''
        },
        content: {
          text: 'The purpose of the project is to design an e-commercial comestic website for Minhshop in Hanoi. Their online shopping activity could increase their profit and attract more attention via social media network. The shop website transmits necessary information about cosmetic products in different categories. Grouping products provides a powerful solution for quickly view and selection that help administrator could effortlessly update product details. More than promoting local store activities, website product can preserve a successful long term relationship between shop and customer.',
          images: [
            '/img/minhshop1.jpg',
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
        image: '/img/kiem2015-cover.jpg',
        banner_image: '/img/kiem2015-cover.jpg',
        banner_video: '/img/kiem2015.mp4',
        urls: {
          behance: 'https://www.behance.net/gallery/54369059/Kiemfi-2015',
          website: 'http://kiem.fi'
        },
        content: {
          text: 'Kiem Ravintola is a Chinese Restaurant in Oulu areas, Finland. In Kiem site, customers feel relax to search information details, list of foods and music event in Kiem Pub every weekend. Build by Wordpress CMS, the admin page provides a smooth manager tool for modifying and update posts.',
          images: [
            '/img/kiem2015-cover.jpg',
            '/img/kiem20152.jpg',
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
        image: '/img/alphabet-cover.jpg',
        banner_image: '/img/alphabet-cover.jpg',
        banner_video: '',
        urls: {
          behance: 'https://www.behance.net/gallery/54391931/Alphabet-Studio',
          website: 'http://alphabetstudio.hoakusa.com'
        },
        content: {
          text: 'Alphabet Creative Studio provides website template at the intersection of technology, design, culture, and brand stories. The website exhibits design products made by Alphabet Studio. With bright color set, we believe this website is appropriate landing page for various companes and indie studios. After finish design phase with Photoshop and Illustrator, a demo website was made by AngularJS and available to visit around. Hope people like it.',
          images: [
            '/img/alphabet1.jpg',
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
        image: '/img/indoor-cover.jpg',
        banner_image: '/img/indoor-cover.jpg',
        banner_video: '/img/indoor-cover.mp4',
        urls: {
          behance: 'https://www.behance.net/gallery/54341707/OutdoorAR-ver20',
          website: 'https://play.google.com/store/apps/details?id=com.suprview.prefabshouses&hl=en'
        },
        content: {
          text: 'OUTDOOR AR offers you a gorgeous way to view your house in its glory. In the second version, OUTDOOR AR provides an intuitive technique to discovery both outside and inside your house. With walk through view, customers feel relax to customize home style by own ideal.',
          images: [
            '/img/indoor1.jpg',
            '/img/indoor2.gif',
            '/img/indoor-cover.jpg',
            '/img/indoor4.gif',
            '/img/indoor5.jpg'
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
        image: '/img/outdoorAR-cover.jpg',
        banner_image: '/img/outdoorAR-cover.jpg',
        banner_video: '/img/outdoorAR.mp4',
        urls: {
          behance: 'https://www.behance.net/gallery/54213967/OutdoorAR',
          website: 'https://play.google.com/store/apps/details?id=com.suprview.prefabshouses&hl=en'
        },
        content: {
          text: 'OUTDOOR AR offers you a gorgeous way to view your house in its glory. Under the effect of our amazing software with the use of cutting-edge Augmented Reality technology, 3D model of building will be smoothly visualized in the real environment. There are some unique features such as changing the size or even colors of the building. Our product is known as AR catalog that helps prefabricated house manufacturers to get notification from potential buyers anywhere in the world without a sales person initial contacts. #outdoorAR		#mobileservice		#ARapp	#interactivedesign',
          images: [
            '/img/outdoorAR-cover.jpg',
            '/img/outdoorAR2.jpg',
            '/img/outdoorAR3.jpg',
            '/img/outdoorAR4.gif',
            '/img/outdoorAR5.jpg',
            '/img/outdoorAR9.gif',
            '/img/outdoorAR10.jpg',
          ]
        }
      },{
        name: 'Instagroom',
        category: 0,
        tags: ['Mobile', 'Javascript', 'Service', 'Ionic', 'AngularJS', 'nodejs', 'mongoDB', 'express'],
        time: {
          month: 'Oct',
          year: '2015'
        },
        partner: {
          name: '',
          url: ''
        },
        image: '/img/instagroom-cover.jpg',
        banner_image: '/img/instagroom-cover.jpg',
        banner_video: '/img/instagroom.mp4',
        urls: {
          behance: '',
          website: 'https://github.com/hoakusa/Instagram_client'
        },
        content: {
        text: 'Like Instagram, Instagroom app allows users are able to post shots and sharing life with friends. Through following function and sharing pictures, people are welcome to join image-social world as Instagram app. This project is open source, build with Ionic and Angular 1.x, server runs by Heroku, Expressjs and MongoDB.',
          images: [
            '/img/instagroom-cover.jpg'
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
        image: '/img/alex-cover.jpg',
        banner_image: '/img/alex-cover.jpg',
        banner_video: '/img/alex-cover.mp4',
        urls: {
          behance: 'https://www.behance.net/gallery/54387205/Alex-in-Wonderland',
          website: 'http://globalgamejam.org/2015/games/alex-wonderland'
        },
        content: {
          text: 'Alex in Wonderland is a PC game build for Window platform, which is made by Unity2D. This game is my first time join Global Game Jam - an annual game maker event during 48 hours. In Alex in Wonderland, the goal is to shoot down as many coin boxes with your boomerang as possible before the countdown runs out, while avoiding bombs and poisonous frogs that will randomly jump out. Use W, A, D key to jump, move left and move right. Press mouse left to aim and hold to charge the power.',
          images: [
            '/img/alex-01.jpg'
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
        banner_image: '/img/nuoriso-cover.jpg',
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
        image: '/img/quote-cover.jpg',
        banner_image: '/img/quote-cover.jpg',
        banner_video: '',
        urls: {
          behance: '',
          website: 'http://quotemachine.hoakusa.com'
        },
        content: {
          text: 'With Quote Machine, people will get random quotation by genius in the world. In my application, precious quotation resources came from popular book authors. In additional, visitors are welcome to tweet out and sharing favourite quote through twitter network.',
          images: [
            '/img/quote1.jpg',
            '/img/quote2.jpg',
            '/img/quote3.jpg',
            '/img/quote4.jpg'
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
        image: '/img/simon-cover.jpg',
        banner_image: '/img/simon-cover.jpg',
        banner_video: '/img/simon.mp4',
        urls: {
          behance: '',
          website: 'http://simongame.hoakusa.com'
        },
        content: {
          text: 'Simon Game is an electronic game of memory skills, requires player listen to music (or sound) then repeat what they hear in order. At each level, game device plays sounds and show the light (red, green, yellow, blue) which correspond to the sound order. Player has to remember the order of sound and light position. After game device done, playes has to perform what they heard in the order as game device played before. If player plays right, he will pass to next level, if wrong answer, game will restart.',
          images: [
            '/img/simon1.jpg',
            '/img/simon2.jpg',
            '/img/simon3.jpg',
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
        image: '/img/tic-cover.jpg',
        banner_image: '/img/tic-cover.jpg',
        banner_video: '/img/tic.mp4',
        urls: {
          behance: '',
          website: 'http://tictactoe.hoakusa.com'
        },
        content: {
          text: 'My game is based on classical Tic-tac-toe paper game. Here, there are 2 playes, X and O, who take turns marking the spaces in a 3x3 grid. First player who place three of their mark (same X or O) in a horizontal, vertical or diagonal row wins this game. In my game, playes will play versus computer. Hope people like it.',
          images: [
            '/img/tic1.jpg',
            '/img/tic2.jpg',
            '/img/tic3.jpg',
            '/img/tic4.jpg',
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
        image: '/img/calculator.jpg',
        banner_image: '/img/calculator.jpg',
        banner_video: '',
        urls: {
          behance: '',
          website: 'https://codepen.io/hoakusa/full/yXLPby/'
        },
        content: {
          text: 'The application is an electrical calculator simulator follow Skeuomorphism design. People can do simple operators with my calculator such as sum, subtract, multiply, divide. Hope people will like it.',
          images: [
            '/img/calculator.jpg'
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
        image: '/img/pomodoro.jpg',
        banner_image: '/img/pomodoro.jpg',
        banner_video: '',
        urls: {
          behance: '',
          website: 'https://codepen.io/hoakusa/full/VWwyGo/'
        },
        content: {
          text: 'Pomodoro clock is a technique to control and countdown timer as your wish. My online pomodoro Clock via Codepen server brings an intuitive look to set timer. Hope my project is helpful for everyone.',
          images: [
            '/img/pomodoro.jpg'
          ]
        }
      }  
    ];
  }

  getCategories() {
    return this.categories;
  }

  getProjects() {
    return this.projects;
  }

  getContact() {
    return this.contact;
  }

}

export default angular.module('services.data', [])
  .service('DataService', DataService)
  .name;