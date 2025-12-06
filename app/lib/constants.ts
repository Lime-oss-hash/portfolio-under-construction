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
    imageUrl: "/imgs/logos/nextjs.svg",
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
    imageUrl: "/imgs/logos/tailwind.svg",
    bgColor: "bg-[#06B6D4]/20",
  },
  {
    name: "Node.js",
    description: "JavaScript Runtime",
    imageUrl: "/imgs/logos/nodejs.svg",
    bgColor: "bg-[#339933]/20",
  },
  {
    name: "PostgreSQL",
    description: "SQL Database",
    imageUrl: "/imgs/logos/postgresql.svg",
    bgColor: "bg-[#4169E1]/20",
  },
  {
    name: "Git",
    description: "Version Control",
    imageUrl: "/imgs/logos/git.svg",
    bgColor: "bg-[#F05032]/20",
  },
  {
    name: "Prisma",
    description: "Database ORM",
    imageUrl: "/imgs/logos/prisma.svg",
    bgColor: "bg-white/10",
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
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    liveUrl: "https://taskflow.example.com",
    githubUrl: "https://github.com/yourusername/taskflow",
  },
  {
    id: "project-2",
    heading: "DevPortfolio",
    subheading: "Portfolio Website",
    description:
      "A modern, animated portfolio website built with Next.js and Framer Motion, featuring dark mode and responsive design.",
    imageUrl: "/imgs/projects/portfolio.png",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
];

// Navigation links for footer
export const mainNavigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Social media links
export const socialLinks = [
  { label: "GitHub", href: "https://github.com/yourusername" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  { label: "Twitter", href: "https://twitter.com/yourusername" },
];

// Tooltip items (if needed for avatar groups, etc.)
export const tooltipItems = [
  { id: 1, name: "Client 1", image: "/imgs/avatars/avatar1.png" },
  { id: 2, name: "Client 2", image: "/imgs/avatars/avatar2.png" },
];
