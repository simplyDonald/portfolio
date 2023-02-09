const techStack = [
  {
    name: "Pandemic Tracker",
    stack: [
      "React",
      "Ruby",
      " d3.js",
      " Rails",
      "SQLite",
      "bcrypt",
      "RSpec",
      "material UI",
    ],
    github: "https://github.com/xihai01/Pandemic-Tracker",
    desc: "Pandemic tracker is an interactive map application built with React using d3.js and a Rails API backend that displays restrictions and key covid statistics for any region within the map.",
    img: "pandemic-tracker.gif",
  },
  {
    name: "Interview Scheduler",
    stack: ["React", "SASS", "Axios", "Node", "Express", "PostgreSQL"],
    github: "https://github.com/simplyDonald/scheduler",
    desc: "A Web App for students to book appointments with Mentors. They can edit, create and cancel scheduled appointments.",
    img: "scheduler.png",
  },
  {
    name: "Smart To-Do List",
    stack: [
      "HTML",
      "CSS",
      "JS",
      "jQuery",
      "AJAX",
      "Node",
      "Express",
      "PostgreSQL",
      "Bootstrap",
    ],
    github: "https://github.com/simplyDonald/midterm-smartToDoList",
    desc: "An application built with Node and Express that allows users to create to-do items and have them auto-categorized into four categories",
    img: "smart-todo-list.png",
  },
  {
    name: "Tweeter",
    stack: ["JavaScript", "jQuery", "AJAX", "Express", "Node"],
    github: "https://github.com/simplyDonald/tweeter",
    desc: "Tweeter is a simple, single-page Twitter clone.",
    img: "tweeter.png",
  },
];


const frameworks = [
  {
    name: "Javascript",
    img: "/devlogo/js.png"
  },
  {
    name: "Python",
    img: "devlogo/python.png"
  },
  {
    name: "Rails",
    img: "devlogo/ruby-on-rails.png"
  },
  {
    name: "React",
    img: "devlogo/react.png"  
  },
  {
    name: "Redux",
    img: "devlogo/redux.png"
  },
  {
    name: "PostgreSQL",
    img: "devlogo/postgre.png"
  },
  {
    name: "Jest",
    img: "devlogo/jest.png"
  },
  {
    name: "Sass",
    img: "devlogo/sass.png"
  },
  {
    name: "Node.js",
    img: "devlogo/nodejs.png"
  },
  {
    name: "Git",
    img: "devlogo/git-icon.png"
  },
   {
    name: "Storybook",
    img: "devlogo/storybook-icon.png"                                             
  },
  {
    name: "Tailwind",
    img: "devlogo/tailwind-css-icon.png"                                             
  },
  {
    name: "Typescript",
    img: "devlogo/typescript.png"
  },
  {
    name: "VSCode",
    img: "devlogo/visualstudio.png"
  },
  {
    name: "MongoDb",
    img: "devlogo/mongodb.png"
  },
  {
    name: "Express",
    img: "devlogo/express1.png"
  },
    {
    name: "Docker",
    img: "devlogo/docker.png"
  },
    {
    name: "Slack",
    img: "devlogo/slack.png"
  }
];

// social icons 
const socials = [
  {
    name: "github",
    img: "github-icon.png" ,
    link: "https://github.com/simplyDonald"  
  },
  {
    name: "linkedin",
    img: "socialsIcon/linkedin.svg", 
    link: "https://www.linkedin.com/in/donaldabuah/"  

  },
  {
    name: "twitter",
    img: "socialsIcon/twitter.svg",
    link: "https://twitter.com/DonaldAbuah"  

  },
  {
    name: "Instagram",
    img: "socialsIcon/instagram.svg",
    link: "https://www.instagram.com/donaldabuah/"  

  }
];

// object for navlinks
const items = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "TechStack", link: "#tech" },
    { name: "Contact", link: "#contact" },
    { name: "Resume", link: "https://resume.creddle.io/resume/coanj0054zk", target: "blank" }

  ];

  const projectItems = [
    { name: "slack", link: {github:"https://github.com/simplyDonald/slack-clone", external: "https://slack-clone-c6db2.web.app/"}, color: "purple", logo: "projectLogos/slack.png", gridstamp:"row-start-3 row-end-7" },
    { name: "airbnb", link: {github:"https://github.com/simplyDonald/airbnb-clone", external: "https://airbnb-clone-sigma-puce.vercel.app/"}, color: "red", logo: "projectLogos/airbnb.png", gridstamp:"row-start-2 row-end-6" },
    { name: "amazon", link: {github:"https://github.com/simplyDonald/amazon-clone", external: "https://amazon-clone-c6ff.vercel.app/"}, color: "yellow", logo: "projectLogos/amazon.png", gridstamp:"row-start-1 row-end-7" },
    { name: "linkedin", link: {github:"https://github.com/simplyDonald/linkedIn-clone", external: "https://linkedin-clone-2ec1c.web.app/"}, color: "blue", logo: "projectLogos/linkedin.png", gridstamp:"row-start-1 row-end-5" },
    { name: "snapchat", link: {github:"https://github.com/simplyDonald/snapchat-clone", external: "https://snapchat-clone-9fe61.web.app/"}, color: "yellow", logo: "projectLogos/snapchat.png", gridstamp:"row-start-2 row-end-7" },]



export {techStack, frameworks, socials, items, projectItems};                               