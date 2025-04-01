import { Icons } from "@/components/icons";
import { HomeIcon, BriefcaseBusiness, FolderGit, School, BookText } from "lucide-react";

export const DATA = {
  name: "Sudham Hebbar",
  initials: "SH",
  url: "https://sudhamhebbar.com",
  location: "Providence, RI",
  locationLink: "https://www.google.com/maps/place/Providence,+RI/",
  description:
    "I am a software engineer with a graduate degree from Brown University. My primary expertise is distributed systems and backend engineering.",
  summary:
    "After getting my bachelor's degree in Computer Science from Ramaiah Institute of Technology, I worked at Schneider Electric as a backend developer for 2+ years. I am currently pursuing my master's degree in Computer Science at Brown University. I am passionate about building scalable and efficient systems, and I love working with cutting-edge technologies.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Distributed Systems",
    "Backend Engineering",
    "Microservices",
    "Java",
    "Spring Boot",
    "gRPC",
    "REST",
    "GraphQL",
    "Redis",
    "RabbitMQ",
    "Apache Kafka",
    "Kafka",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Golang",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#work", icon: BriefcaseBusiness, label: "Work" },
    { href: "/#education", icon: School, label: "Education" },
    { href: "/#projects", icon: FolderGit, label: "Projects" },
    { href: "https://drive.google.com/file/d/1B-Olr8i_hGHtD-fLjldysy1dNxCPY86u/view?usp=sharing", icon: BookText, label: "Resume" },
  ],
  contact: {
    email: "sudham_hebbar@brown.edu",
    tel: "+1-401-255-6524",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sudhamhebbar",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sudham-hebbar/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/HebbarSudham",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sudham_hebbar@brown.edu",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "eClinicalworks",
      href: "https://eclinicalworks.com",
      badges: [],
      location: "Westborough, MA",
      title: "Software Engineer",
      logoUrl: "/ecw.png",
      start: "May 2024",
      end: "September 2024",
      description:
        "Developed a RAG driven chatbot for the eClinicalWorks EMR system using LangChain and OpenAI's GPT-4. The chatbot is capable of answering complex queries about patient data, lab results, and medical history. It also integrates with the EMR system to provide real-time updates and notifications.",
    },
    {
      company: "Schneider Electric",
      badges: [],
      href: "https://schneider-electric.com",
      location: "Bangalore, India",
      title: "Software Engineer",
      logoUrl: "/se.jpeg",
      start: "August 2021",
      end: "August 2023",
      description:
        "Worked on Schneider Electric's partner channel and customer portal (mySchneider), which is a microservices-based application built using Java, Spring Boot, and React. I was responsible for developing and maintaining various microservices, including the authentication service, user management service, and product catalog service. I also worked on integrating the portal with Schneider Electric's ERP system using Kafka and AWS.",
    },
    {
      company: "Schneider Electric",
      href: "https://schneider-electric.com",
      badges: [],
      location: "Bangalore, India",
      title: "Software Engineer Intern",
      logoUrl: "/se.jpeg",
      start: "January 2021",
      end: "July 2021",
      description:
        "Collaborated on five AI and full-stack development projects including a product recommendation engine, and a Partner Training Documentation platform, and successfully deployed them to Vercel using CI/CD practices",
    }
  ],
  education: [
    {
      school: "Brown University",
      href: "https://brown.edu",
      degree: "Master's Degree of Computer Science (MCS)",
      logoUrl: "/brown.jpeg",
      start: "2023",
      end: "2025",
      description:
        "Currently pursuing a Master's degree in Computer Science with a focus on Distributed Systems and Backend Engineering. Courses include Distributed Systems, Advanced Algorithms, Formal Verification, Advanced Database Systems, Computer Security, and Software Engineering.",
    },
    {
      school: "Ramaiah Institute of Technology",
      href: "https://msrit.edu",
      degree: "Bachelor's Degree of Computer Science (B.E)",
      logoUrl: "/msrit.jpeg",
      start: "2017",
      end: "2021",
      description:
        "Graduated with a Bachelor's degree in Computer Science. Courses included Data Structures and Algorithms, Operating Systems, Database Management Systems, Software Engineering, and Computer Networks.",
    },

  ],
  projects: [
    {
      title: "GoDB",
      href: "https://github.com/sudhamhebbarbrown/RelationalDatabase",
      dates: "August 2024 - Feb 2025",
      active: true,
      description:
        "A relational database system built from scratch using Golang. It supports SQL queries, transactions, and indexing. The project is designed to be modular and extensible, allowing for easy addition of new features.",
      technologies: [
        "Golang",
        "Docker",
        "Concurency",
        "Distributed Systems",
        "B+ Tree",
        "Hash Table",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sudhamhebbarbrown/RelationalDatabase",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/godb.png",
      video:
        "",
    },
    {
      title: "BrunoBrowse",
      href: "https://github.com/GavinJin0501/Distributed-Search-Engine",
      dates: "August 2023 - January 2024",
      active: true,
      description:
        "A full-stack distributed search engine indexing 10,000+ books. It uses a distributed architecture to crawl, index, and search books efficiently. The project is designed to be scalable and fault-tolerant, allowing for easy addition of new nodes and achieving high availability through RAFT consensus algorithm.",
      technologies: [
        "Typescript",
        "Shell",
        "Python",
        "React.js",
        "Node.js",
        "Distributed Systems",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/GavinJin0501/Distributed-Search-Engine",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bruno.png",
      video: "",
    },
    {
      title: "AutoDoc",
      href: "https://github.com/dbhatia00/documentation-generation",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "A documentation generation tool that uses OpenAI's GPT-4 to automatically generate documentation for codebases. It supports multiple programming languages and can generate documentation in various formats, including Markdown, HTML, and PDF. Integrated with GitHub Actions for CI/CD and confluence for documentation hosting.",
      technologies: [
        "Next.js",
        "Django",
        "Python",
        "LangChain",
        "llamaIndex",
        "OpenAI",
        "MongoDB"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/dbhatia00/documentation-generation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/autodoc.png",
      video: "",
    },
    {
      title: "Music Streaming Platform",
      href: "",
      dates: "2024",
      active: true,
      description:
        "Developed a full-fledged music streaming platform with real-time audio streaming, playlist management, and user authentication.",
      technologies: ["Django", "Next.js", "PostgreSQL", "AWS S3", "Auth0"],
      links: [],
      image: "/music.png",
      video: "",
    }],
  hackathons: [
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
