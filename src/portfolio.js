/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Harshaa Reddy's Portfolio",
  description:
    "A passionate Computer Science undergrad , exploring Computer Science.",
  og: {
    title: "Harshaa Reddy's Portfolio",
    type: "website",
    url: "https://hr-23.github.io",
  },
};

//Home Page
const greeting = {
  title: "Harshaa Reddy",
  logo_name: "HarshaaReddy",
  subTitle:
    "Computer Science undergrad interested in multiple fields including technology , finance , economics , geopolitics and global affairs.",
  
};

const socialMediaLinks = [
 
  {
    name: "Github",
    link: "https://github.com/hr-23",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hr23/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@easytosolve3997",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:harshaareddygodlaveeti@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/hrg_23",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/harshaarg/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
  
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology Kottayam",
      subtitle: "B.Tech , Computer Science and Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IIIT Kottayam",
      duration: "2020- 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for the prestigious DAAD Internship ,Interned with JPMC Glasgow also made it to finals of the Smart India Hackathon.",
      ],
      website_link: "http://iiitkottayam.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships and Volunteering activities",
  description:
    "I have worked as SDE intern with JP Morgan ,Glasgow and also interned with local companies as data analyst , web developer and software developer .  I am also involved with many open source communities as a representative. Also volunteered with non profit organizations to teach computer science topics to underpreviledged children.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Freelancing",
          company: "Various Companies and individuals",
          company_url: "",
          logo_path: "fl_logo.png",
          duration: "Oct 2023 - present",
          location: "Kottayam ,Kerala ,India",
          description:
            "Currently freelancing as a front-end web developer while planning for graduate studies.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineering Summer Intern",
          company: "JP Morgan Chase & Co. ,Glasgow ,Scotland ,United Kingdom",
          company_url: "https://careers.jpmorgan.com/us/en/home",
          logo_path: "jpmorganchase_logo.png",
          duration: "June 2023 - Aug 2023",
          location: "Glasgow, UK",
          description:
            "As the complete Line of Business’s Tech Stack was mandated to be moved to new tech stack ,led the migrations in Athena ( JP Morgan’s trading platform) from an older migration process to a more modern toolset, specifically leveraging Liquibase for database migrations Eased the migration process by enhancing the migration speed by 60% .Moving the Athena to AWS allowed it to scale servers on demand which enhanced performance and maintenance.Built a robust CI/CD Jules pipeline that facilitated the upgrade, downgrade , upgrade , and testing of database migrations. This automation ensured consistency and reliability throughout the migration process, while also enabling easier rollback procedures if needed in case of errors .Achieved 30% reduction in risk calculation times and 80% reduction in calculation cost per hour .Demonstrated problem-solving skills by resolving a critical production issue related to the migration process. Where the issue if failed to be resolved would have affected around 500K+ users , and would have stalled entire region’s reporting for that day.Played a crucial role in testing the migration processes before they were rolled out to production. This proactive approach ensured that potential issues were identified and resolved early on, minimizing risks during the actual migration.After Production the migration process is being used by around 25k+ developers within the Capital and associated teams in the firm .",
          color: "#000000",
        },
        {
          title: "Machine Learning Apprentice",
          company: "Amazon Science",
          company_url: "https://www.amazon.science/",
          logo_path: "amazon_logo.png",
          duration: "June 2022 - Aug 2022",
          location: "Bengaluru ,India",
          description:
            "Was selected for the prestigious Amazon ML Summer School and was mentored by leading Applied Scientists from Amazon and worked on some hands-on projects involving various machine learning algorithms and applications .",
          color: "#ee3c26",
        },
        {
          title: "Web Development , Data Analyst and Office of the CEO Accounting and Marketing Intern",
          company: "Channelling Bees Advertising Pvt. Ltd.",
          company_url:
            "https://in.linkedin.com/company/channellingbees",
          logo_path: "cb_logo.png",
          duration: "Jan 2022 - June 2022",
          location: "Hyderabad ,India (Hybrid)",
          description:
            "This is an advertising startup , where I was fortunate enough to be a part of an amazing journey where I took part in the website development , marketing and data analysing and accounting and developing sustainable strategies for the developemnt of the company .Worked closely with the CEO and co-founder and assisted in crucial times of the company.",
          color: "#0071C5",
        },
        {
          title: "Data Analyst",
          company: "Ram Info Pvt. Ltd.",
          company_url:
            "http://www.raminfo.com/",
          logo_path: "ri_logo.png",
          duration: "Aug 2021 - Nov 2021",
          location: "Hyderabad ,India (Hybrid)",
          description:
            "RAMINFO is one of the leading providers of technology solutions for some of the premier organizations across Government, Fintech, Healthcare, Smart Energy, IoT & Analytics and Engineering Services.Worked on a project which developed software for biometric authentication for the government which played a key role in diret benifit transfer . I also worked as data analyst where my work paved way for changes in administrative policies and decision making .",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2021 - April 2021",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2021 - May 2022",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2022 - May 2023",
          location: "Kottayam, Kerala, India",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Built projects which are useful to my university and the community. Some of the projects include an outpass potral for my university , covid-19 tracking website that helped a lot to the community during covid and also a skillshare platform for the ministry of skill and labor development. All of my projects can be found in my github.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hr.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
   
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Flat 204 , New Postal Colony ,VR Colony ,Kurnool ,Andhra Pradesh , 518006",
    location_map_link: "https://maps.app.goo.gl/tjUDQhyk5jMfFTNo8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
