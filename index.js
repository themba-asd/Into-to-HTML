
let info = {
  firstName: 'Thembalakhe',
  lastName: 'Malindi',
  address: 'Three Rivers, Vereeniging, 1929',
  contact: '+27 68 482 1001',
  bio: {
      intro: 'In the realm of frontend development, I am proficient in HTML5, CSS3, and VueJs, with additional expertise in Python programming. My skills extend to graphic design.',
      middle: 'Lets connect and explore opportunities to collaborate in creating innovative solutions that bridge the gap between mechanical engineering and cutting-edge technologies',
      last: 'In the realm of frontend development, I am proficient in HTML5, CSS3, and VueJs, with additional expertise in Python programming. My skills extend to graphic design.',
    },
  aboutMe: {
      part1: "I am 21 years of age, I reside in Gauteng, South of Johannesburg. I've been practicing coding for over just 3 years now. Eager to contribute to projects, lets connect and explore opportunities to collaborate in creating innovative and cutting-edge solutions. I specialize in creating intuitive and visually appealing frontend solutions.",
      part2: "I have certifications of completion in NodeJs Fundamentals and JavaScript.In the realm of frontend development, I'm proficient in HTML5, CSS3 and VueJs. With additional knowledge and use in Python. My skill's proficiency extend to UI design, APIs, SQL, Electron, Tailwind, Bootstrap, JQuery & Firebase."
    },
  links: {
    socials: [
      {
        name: 'X',
        url: 'https://twitter.com/',
        src: '/assets/images/1.png',
      },
      {
        name: 'Telegram',
        url: 'https://telegram.org/',
        src: '/assets/images/3.png',
      },
      {
        name: 'Youtube',
        url: 'https://youtube/',
        src: '/assets/images/2.png',
      },
    ],
    projects: [
      {
        name: 'Resume Builder',
        url: 'https://360resume.netlify.app/'
      },
      {
        name: 'Qoutes Site',
        url: 'https://serenecosmo.netlify.app/'
      },
      {
        name: 'Weather App',
        url: 'https://github.com/themba-asd/weather_app'
      },
      {
        name: 'Password Builder',
        url: 'https://github.com/themba-asd/password_generator'
      }
    ]
  }
};

function onStart() {
  document.querySelector('#full-name').textContent = `${info.lastName} ${info.firstName}`;
  document.querySelector('#intro').textContent = info.bio.intro;
  document.querySelector('#middle').textContent = info.bio.middle;
  document.querySelector('#last').textContent = info.bio.last;
  document.querySelector('address').textContent = info.address;
  document.querySelector('#contact').textContent = info.contact;
};

onStart();