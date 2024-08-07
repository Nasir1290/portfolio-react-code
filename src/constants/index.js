import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  // docker,
  meta,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
  // tripguide,
  // threejs,
  next,
  ecommerce
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Javascript",
    icon: web,
  },
  {
    title: "React",
    icon: mobile,
  },
  {
    title: "Nextjs",
    icon: backend,
  },
  {
    title: "Nodejs",
    icon: creator,
  },
  {
    title: "Python",
    icon: mobile,
  },
  {
    title: "Dsa",
    icon: backend,
  },
  {
    title: "Database",
    icon: creator,
  },
];

const technologies = [
  {
    name: "react JS",
    icon: reactjs,
  },
  {
    name: "nextjs",
    icon: next,
  },
  {
    name: "javaScript",
    icon: javascript,
  },

  {
    name: "github",
    icon: nodejs,
  },

  {
    name: "mongodb",
    icon: mongodb,
  },

  {
    name: "java",
    icon: git,
  },
  {
    name: "hTML 5",
    icon: html,
  },
  {
    name: "cSS 3",
    icon: css,
  },
  {
    name: "tailwind CSS",
    icon: tailwind,
  },


  {
    name: "redux Toolkit",
    icon: redux,
  },


  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },






];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Continuous Since January 2020",
    points: [
      "Developed robust and scalable web applications using the MERN stack",
      "Implemented efficient backend solutions, ensuring seamless data flow and optimal performance.",
      "Leveraged React.js to create dynamic and interactive user interfaces.",
      "Utilized MongoDB for effective data storage and management.",
    ],
  },
  {
    title: "Problem Solving",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Continuous Since January 2020",
    points: [
      "Successfully identified and resolved intricate bugs within the codebase.",
      "showcasing a meticulous approach to troubleshooting and debugging.",
      "demonstrating a knack for thinking outside the box.",
      "Collaborated with the team to conceptualize and implement innovative functionalities.",
    ],
  },
  {
    title: "Database Management",
    company_name: "",
    icon: backend,
    iconBg: "#383E56",
    date: "Continuous Since August 2020",
    points: [
      "Spearheaded the design and optimization of relational databases.",
      "ensuring efficient data storage, retrieval, and seamless integration with application logic.",
      "Integrated third-party APIs and services.",
      "Implemented robust backup and recovery strategies, safeguarding critical data against unforeseen events and minimizing downtime in case of system failures.",
    ],
  },
  {
    title: "Collaboration and Teamwork",
    company_name: "",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Always",
    points: [
      // "Collaborated seamlessly with cross-functional teams.",
      // "Contributed to the iterative development process, promoting flexibility and responsiveness to changing project requirements.",
      // "Actively participated in knowledge-sharing sessions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Nasir for any future endeavors. His dedication, hard work, and passion for his work are truly inspiring. Nasir is a rare talent, and I am confident that he will continue to make great strides in his career and achieve even greater success in the future.",
    name: "Robin",
    designation: "HR Business Partner",
    company: "Experian",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    testimonial:
      "Nasir has very visible passion for his idea and it was great to witness his clarity of thoughts. He is also a good team player, ready to mould his skills if that helps him improve. I wish him the very best",
    name: "Khairul Kabir",
    designation: "HR",
    company: "Simply Body Talk",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    testimonial:
      "This guy has what it takes for the first unicorn. Just wait and watch.",
    name: "Aman Ullah",
    designation: "CTO",
    company: "Dinnerfy",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
];


// projects
const projects = [



  {
    name: "LWS Cart",
    description:
      "At LWS-Cart, we bring you a diverse and trendy collection for all your fashion needs. Whether you're shopping for yourself or your loved ones, we have something special for everyone. ",
    tags: [
      {
        name: "e-commerce application",
        color: "blue-text-gradient",
      },

      {
        name: "Nextjs application",
        color: "green-text-gradient",
      },
      {
        name: "web dev",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://lws-cart.vercel.app/en",
  },


  // {
  //   name: "PredCo",
  //   description:
  //     "Web application that processes real-time data coming from IoT sensors installed in various industries. It serves as a powerful tool for Predictive Maintenance, enabling the detection of potential issues and triggering alerts. By optimizing scheduled maintenance activities, the application helps companies achieve significant cost savings.",
  //   tags: [
  //     {
  //       name: "internet of things",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "elastic search",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "kibana",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "aws-ec2",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/PriyanshNegi/PredCo",
  // },
  // {
  //   name: "Prompt-X",
  //   description:
  //     "Prompt-X is an undergoing project designed to train language models and enhance prompt engineering. It will offer productivity analytics, personalized recommendations and insights for Chat GPT users. With its focus on training LLM models, Prompt-X is a powerful tool for optimizing workflows and advancing natural language understanding. ",
  //   tags: [
  //     {
  //       name: "machine learning",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "web dev",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "prompt engineering",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/PriyanshNegi/Prompt-X-Website",
  // },



];

export { services, technologies, experiences, testimonials, projects };