// Constants file for portfolio data
// Update these values with your own information

// Technology/Skills cards - displayed in the Skills section
export const techCardsItems = [
  {
    name: "React",
    description: "JavaScript Library",
    imageUrl: "/imgs/logos/react.svg",
    bgColor: "bg-[#61DAFB]/20",
  },
  {
    name: "Next.js",
    description: "React Framework",
    imageUrl: "/imgs/logos/nextdotjs.svg",
    bgColor: "bg-white/10",
  },
  {
    name: "TypeScript",
    description: "Typed JavaScript",
    imageUrl: "/imgs/logos/typescript.svg",
    bgColor: "bg-[#3178C6]/20",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-First CSS",
    imageUrl: "/imgs/logos/tailwindcss.svg",
    bgColor: "bg-[#06B6D4]/20",
  },
  {
    name: "Node.js",
    description: "JavaScript Runtime",
    imageUrl: "/imgs/logos/nodedotjs.svg",
    bgColor: "bg-[#68A063]/20",
  },
  {
    name: "PostgreSQL",
    description: "SQL Database",
    imageUrl: "/imgs/logos/postgresql.svg",
    bgColor: "bg-[#336791]/20",
  },
  {
    name: "Git",
    description: "Version Control",
    imageUrl: "/imgs/logos/git.svg",
    bgColor: "bg-[#F05032]/20",
  },
  {
    name: "Supabase",
    description: "Backend as a Service",
    imageUrl: "/imgs/logos/supabase.svg",
    bgColor: "bg-[#3ECF8E]/20",
  },
];

// Portfolio projects - displayed in the Projects section
export const portfolioProjects = [
  {
    id: "project-1",
    heading: "TaskFlow",
    subheading: "Project Management App",
    description:
      "A Trello-like task management application with drag-and-drop, real-time updates, and team collaboration features.",
    imageUrl: "/imgs/projects/taskflow.png",
    techStack: ["Next.js", "TypeScript", "Supabase", "Clerk", "PostgreSQL"],
    liveUrl: "https://taskboard-nextjs.vercel.app/",
    githubUrl: "https://github.com/Lime-oss-hash/taskflow-board",
  },
  {
    id: "project-2",
    heading: "Waka Eastern Bay",
    subheading: "Community Transport Platform",
    description:
      "A complete MERN-stack booking platform for a NZ non-profit charitable trust. Features user auth, real-time calendar with booking counts, driver schedule sync, and automated emails.",
    imageUrl: "/imgs/projects/wakawebsite.png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Nodemailer"],
    githubUrl: "https://github.com/Lime-oss-hash/Workingversion",
  },
  {
    id: "project-3",
    heading: "DevPortfolio",
    subheading: "Portfolio Website",
    description:
      "A modern, animated portfolio website built with Next.js and Framer Motion, featuring dark mode and responsive design.",
    imageUrl: "/imgs/projects/portfolio.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://portfolio-under-construction-six.vercel.app/",
    githubUrl: "https://github.com/Lime-oss-hash/portfolio-under-construction",
  },
];

// Navigation links for footer
export const mainNavigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Social media links
export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Lime-oss-hash" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sam-bai-dev/" },
];
