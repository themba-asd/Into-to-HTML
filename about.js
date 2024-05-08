
let info = {
  aboutMe: {
    part1: "I am 21 years of age, I reside in Gauteng, South of Johannesburg. I've been practicing coding for over just 3 years now. Eager to contribute to projects, lets connect and explore opportunities to collaborate in creating innovative and cutting-edge solutions. I specialize in creating intuitive and visually appealing frontend solutions.",
    part2: "I have certifications of completion in NodeJs Fundamentals and JavaScript.In the realm of frontend development, I'm proficient in HTML5, CSS3 and VueJs. With additional knowledge and use in Python. My skill's proficiency extend to UI design, APIs, SQL, Electron, Tailwind, Bootstrap, JQuery & Firebase."
  },
  projects: [
    {
      project: 'Resume Builder',
      url: 'https://360resume.netlify.app/'
    },
    {
      project: 'Qoutes Site',
      url: 'https://serenecosmo.netlify.app/'
    },
    {
      project: 'Weather App',
      url: 'https://github.com/themba-asd/weather_app'
    },
    {
      project: 'Password Builder',
      url: 'https://github.com/themba-asd/password_generator'
    }
  ]
};

function onStart() {
  document.querySelector('#resume').textContent = info.projects[0].project;
  document.querySelector('#qoutes').textContent = info.projects[1].project;
  document.querySelector('#password').textContent = info.projects[2].project;
  document.querySelector('#weather').textContent = info.projects[3].project;
}

onStart();