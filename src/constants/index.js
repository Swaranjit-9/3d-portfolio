import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  AiApp,
  portfolio,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Problem Solver',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer (freelance)',
    company_name: 'Fiver/Up-work',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'Mar 2022 - present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Software Developer',
    company_name: 'New Home Superior Home Inspection Ltd',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jan 2022 - May 2022',
    points: [
      'Worked on a progress monitoring and ticketing software made for construction projects. The software had multiple interfaces -- admin, manager, worker',
      'Programmed API GET and POST endpoints for functionalities like progress, time elapsed, worker status, fault detection and priority.',
      'Developed a visual tool using React-vis that shows detailed charts and graphs about progress of current project.',
      'Technologies used: React, ASP.NET, HTML/CSS. JavaScript, SQL, AXIOS, JSON, Postman, Jira.',
    ],
  },
  {
    title: 'Teaching Assistant - PAL Leader ',
    company_name: 'Sheridan college',
    icon: shopify,
    iconBg: '#383E56',
    date: 'May 2021 - Sep 2021',
    points: [
      'Hosted weekly virtual group sessions and clarified concepts in classes-  Object Oriented Programming Java and Web Development to first-year students.',
    ],
  },
  {
    title: 'Software Developer',
    company_name: 'Unimark Pharma India LTD',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'May 2018 - Jun 2019',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I highly recommend Swaran as a software developer. I have had the pleasure of working closely with Swaran on various projects, and his exceptional technical skills and dedication have consistently impressed me.Moreover, he is an excellent communicator, always willing to collaborate and contribute ideas to improve the overall project outcome. I have no doubt that Swaran will excel in any software development role and would be a valuable addition to any organization.',
    name: 'Hardik Sonetta',
    designation: 'Computer Vision Engineer and Co-founder of IsManga',
    company: 'Scryb Inc',
    image:
      'https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png',
    source_code_link: 'https://www.linkedin.com/in/hardiksonetta/',
  },
  {
    testimonial:
      'Swaran is one of the best among all the people I have ever worked with. As I remember, he was a very productive person, is hardworking, broad-minded and forward thinking individual. Intelligent, ambitious, energetic and proactive perfectionist. Desire for proficiency and education makes Swaran a valuable asset to the team. Working with him is a signature of success.',
    name: 'Eisa Adil',
    designation: 'Software Development Engineer',
    company: 'Amazon',
    image:
      'https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png',
    source_code_link: 'https://www.linkedin.com/in/eisa/',
  },
  {
    testimonial:
      'I have had the opportunity to work with Swaran in various projects in college and can attest to their technical expertise and problem-solving abilities. He is highly skilled in Software Development, and their ability to find creative solutions to complex problems was a valuable asset to our team. His ability to collaborate with cross-functional teams and effectively communicate technical information to non-technical stakeholders has been invaluable. ',
    name: 'Simran Arora',
    designation: 'Software Engineer',
    company: 'TD',
    image:
      'https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png',
    source_code_link: 'https://www.linkedin.com/in/simranxarora/',
  },
];

const projects = [
  {
    name: ' AI Image Generation App | Midjourney & DALL-E Clone (In Progress)',
    description:
      'Full Stack(MERN), AI image generation app with modern and minimalistic design. It alows users to generate images from texts and share it with the built in community too with fully functioning search tool.  ',
    tags: [
      {
        name: 'MERN',
        color: 'blue-text-gradient',
      },
      {
        name: 'OpenAPI',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: AiApp,
    source_code_link: 'https://github.com/',
  },
  {
    name: "Swaran's Portfolio (This portfolio)",
    description:
      'A 3D developer portfolio using React, ThreeJS and TailindCSS. Utilised 3D models and geometries with various lights with React Three Fiber',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'green-text-gradient',
      },
      {
        name: 'ThreeJS',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Contact Keeper',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Library Database',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'Spring Boot',
        color: 'blue-text-gradient',
      },
      {
        name: 'Java',
        color: 'green-text-gradient',
      },
      {
        name: 'SCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Github Finder',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'GithubAPI',
        color: 'green-text-gradient',
      },
      {
        name: 'Netlify',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
