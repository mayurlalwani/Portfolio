import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey, my name is',
  name: 'Mayur Lalwani',
  subtitle: "I'm a Full Stack Developer",
  cta: '',
  img: 'profile.jpg',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a passionate web developer, currently living and working in Gujarat.',
  paragraphTwo: 'My skills includes HTML, CSS, JavaScript, React, Nodejs, Express and MySql.',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1YgBtNq0DvL1YYAya65VSl-EfkfTjxgsw/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Note Zipper',
    info: 'A MERN stack application where users can collaborate notes with others.',
    info2: '',
    url: 'https://notes-mern-app.onrender.com/',
    repo: 'https://github.com/mayurlalwani/notes-app-mern', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Resume Builder',
    info: 'A web application to build resume with features like Download and Drag & Drop.',
    info2: '',
    url: 'https://resume-builder-ubbt.onrender.com/',
    repo: 'https://github.com/mayurlalwani/resume-builder-mern', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Typing Speed Test',
    info: 'A web application built with React to test your typing speed.',
    info2: '',
    url: 'https://typingspeedtest.netlify.app/',
    repo: 'https://github.com/mayurlalwani/react-typing-speed-test', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Github Finder',
    info:
      'A responsive web application built with React to search github profiles. This app uses Context API along with useContext and useReducer hooks for state management.',
    info2: '',
    url: 'https://githubfinduser.netlify.app/',
    repo: 'https://github.com/mayurlalwani/github-finder', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'FEM - Four Card Feature Section',
  //   info: 'A simple web template created with HTML and CSS to improve skills.',
  //   info2: '',
  //   url: 'https://serene-swartz-201b84.netlify.app/',
  //   repo: 'https://github.com/mayurlalwani/FEM-Four-card-feature-section', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'lalwanimayur06@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/mayurlalwani3',
    },

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mayurlalwani',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mayurlalwani',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
