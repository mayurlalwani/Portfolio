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
  paragraphTwo: 'My skills includes JavaScript, ReactJs, Nodejs, Express and MySql.',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1cfUIpEJFtPgymC9LJBDimb72kOyY5ebV/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Number Guessing Game',
    info: 'A fun number guessing game built with React',
    info2: '',
    url: 'https://numberguessingapp.netlify.app/',
    repo: 'https://github.com/mayurlalwani/react-number-guessing-game', // if no repo, the button will not show up
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
    title: 'To-Do Crud App',
    info: 'A simple To-Do app built with React and Styled components.',
    info2: '',
    url: 'https://todocrudreact.netlify.app/',
    repo: 'https://github.com/mayurlalwani/Todo-crud', // if no repo, the button will not show up
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
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/mayurlalwani3',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
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
