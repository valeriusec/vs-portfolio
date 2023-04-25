import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faGithub,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

import {
  codecademy,
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  threeIcon,
  tailwindIcon,
  reduxIcon,
  gitIcon,
  githubIcon,
  gsapIcon,
  shopifyIcon,
  webflowIcon,
  framerIcon,
  figmaIcon,
  jammmingProject,
  teslaProject,
  venomsoulProject,
  memojiHand,
  memojiHello,
  memojiOk,
  htmlCertificate,
  cssCertificate,
  jsCertificate,
  reactCertificate,
  webflowCertificate,
} from "../assets";

const media = {
  codecademy,
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  threeIcon,
  tailwindIcon,
  reduxIcon,
  gitIcon,
  githubIcon,
  gsapIcon,
  shopifyIcon,
  webflowIcon,
  framerIcon,
  figmaIcon,
  jammmingProject,
  teslaProject,
  venomsoulProject,
  memojiHand,
  memojiHello,
  memojiOk,
  htmlCertificate,
  cssCertificate,
  jsCertificate,
  reactCertificate,
  webflowCertificate,
}

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faYoutube,
  faTiktok,
};

const introduction = {
  text: [
    "Hi there, I'm glad to have you here!",

    "My name is Valeriu and I am a front-end developer based in Italy. My passion for web development started in April 2022 when I began building Shopify stores.",

    "Since then, I have been constantly advancing and expanding my knowledge in this field. In October 2022, I felt the urge to dive deeper into web development which led me to learn how to code in html, css, js and reactjs. With each project, I strive to create a unique and effective solution while integrating the latest web technologies.",

    "I am always excited to collaborate with individuals and teams who share my passion for creating exceptional web experiences. Thank you for taking the time to visit my portfolio!",
  ],
};

const journeys = [
  {
    title: "Web Foundations",
    company_name: "Codecademy",
    icon: codecademy,
    iconBg: "#204056",
    date: "5 Dec 2022 - 14 Dec 2022",
    points: [
      "Fundamentals of HTML",
      "Fundamentals of CSS",
      "Developing Websites Locally",
      "Deploying Websites",
    ],
  },
  {
    title: "Improved Styling with CSS",
    company_name: "Codecademy",
    icon: codecademy,
    iconBg: "#204056",
    date: "15 Dec 2022 - 29 Dec 2022",
    points: [
      "Fundamentals of Web Design",
      "Making a Website Responsive",
      "CSS Transitions and Animations",
    ],
  },
  {
    title: "Building Interactive Websites",
    company_name: "Codecademy",
    icon: codecademy,
    iconBg: "#204056",
    date: "30 Dec 2022 -  9 Feb 2023",
    points: [
      "JavaScript Syntax",
      "Building Interactive Websites",
      "Making a Website Accessible",
      "Git and Github",
    ],
  },
  {
    title: "Front-End Development",
    company_name: "Codecademy",
    icon: codecademy,
    iconBg: "#204056",
    date: "10 Feb - Present",
    points: [
      "JavaScript Syntax",
      "JavaScript Testing",
      "Async JavaScript",
      "Web Apps",
      "React Framework",
    ],
  },
];

const projects = [
  {
    name: "Venomsoul E-Commerce",
    description: "",
    image: venomsoulProject,
    source_code_link: "https://github.com/valeriusec",
    demo_link: "https://infopilot.netlify.app/",
  },
  {
    name: "Tesla Website",
    description: "",
    image: teslaProject,
    source_code_link: "https://github.com/valeriusec/tesla-website",
    demo_link: "https://infopilot.netlify.app/",
  },
  {
    name: "Jammming App",
    description:
      "Jammming allows you to search for your favorite songs and create custom playlists. Once you've created your playlist, you can export it directly to your Spotify account.",
    image: jammmingProject,
    source_code_link: "https://github.com/valeriusec/jammming-app",
    demo_link: "https://jammming-b7d.pages.dev/",
  },
];

const certificates = {
  image: [
    htmlCertificate,
    cssCertificate,
    jsCertificate,
    reactCertificate,
    webflowCertificate,
  ],
};

const memoji = {
  image: [memojiHello, memojiHand, memojiOk],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "I am proficient using HTML to structure web pages and create semantic content that is accessible to all users.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "I am skilled in using CSS to style web pages and create visually appealing designs that enhance user experience.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "I am experienced in using JavaScript to add interactivity and functionality to web pages and create dynamic user interfaces.",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "I have a strong understanding of React and its core concepts, and I am able to create reusable components and manage application state using hooks and context.",
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    icon: tailwindIcon,
    description:
      "I am familiar with using Tailwind CSS to quickly and efficiently style web pages, and am able to create custom designs by combining pre-defined classes.",
  },
  {
    id: "threejs",
    title: "Three.js",
    icon: threeIcon,
    description:
      "I have experience using Three.js to create 3D graphics and animations in web applications, and am able to create complex scenes and visualizations.",
  },
  {
    id: "figma",
    title: "Figma",
    icon: figmaIcon,
    description:
      "I am proficient in using Figma to design and prototype user interfaces and other graphic elements, and am able to collaborate with other designers and developers using the tool.",
  },
  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
      "I am proficient in using Git to manage and track changes to my code over time, collaborate with others on a project, and manage conflicts between different changes.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "I am skilled in using GitHub to collaborate on projects, share code, and track issues and bugs. With GitHub, I can create and manage repositories, contribute to open-source projects, and showcase my work to potential employers.",
  },
  {
    id: "gsap",
    title: "GSAP",
    icon: gsapIcon,
    description:
      "I have experience using GSAP to create complex animations and effects in web applications. With GSAP, I can create smooth, performant animations that work accross different browsers and devices.",
  },
  {
    id: "shopify",
    title: "Shopify",
    icon: shopifyIcon,
    description:
      "I am proficient in using Shopify to create online stores and sell products. With Shopify, I can manage the inventory, process payments, and customize the look and feel of the online store.",
  },
  {
    id: "framer",
    title: "Framer",
    icon: framerIcon,
    description:
      "I have experience using Framer to create interactive interfaces and animations for web and mobile applications.",
  },
  {
    id: "webflow",
    title: "Webflow",
    icon: webflowIcon,
    description:
      "I am familiar using Webflow to design and build responsive websites visually, using drag-and-drop interface and coded components.",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

const N = 1;
const globeData = [...Array(N).keys()].map(() => ({
  lat: 48.0,
  lng: 11.0,
  size: 20,
  color: "red",
}));

export {
  media,
  introduction,
  journeys,
  projects,
  certificates,
  memoji,
  skills,
  markerSvg,
  globeData,
  icons,
};
