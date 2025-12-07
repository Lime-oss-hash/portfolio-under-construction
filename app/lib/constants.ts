// Constants file for portfolio data
// Update these values with your own information

// Technology/Skills cards - organized by category
export const techCardsItems = [
  {
    name: "React",
    description: "JavaScript Library",
    imageUrl: "/imgs/logos/react.svg",
    bgColor: "bg-[#61DAFB]/20",
    category: "Frontend",
  },
  {
    name: "Next.js",
    description: "React Framework",
    imageUrl: "/imgs/logos/nextdotjs.svg",
    bgColor: "bg-white/10",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    description: "Typed JavaScript",
    imageUrl: "/imgs/logos/typescript.svg",
    bgColor: "bg-[#3178C6]/20",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-First CSS",
    imageUrl: "/imgs/logos/tailwindcss.svg",
    bgColor: "bg-[#06B6D4]/20",
    category: "Frontend",
  },
  {
    name: "Node.js",
    description: "JavaScript Runtime",
    imageUrl: "/imgs/logos/nodedotjs.svg",
    bgColor: "bg-[#68A063]/20",
    category: "Backend & Database",
  },
  {
    name: "PostgreSQL",
    description: "SQL Database",
    imageUrl: "/imgs/logos/postgresql.svg",
    bgColor: "bg-[#336791]/20",
    category: "Backend & Database",
  },
  {
    name: "Supabase",
    description: "Backend as a Service",
    imageUrl: "/imgs/logos/supabase.svg",
    bgColor: "bg-[#3ECF8E]/20",
    category: "Backend & Database",
  },
  {
    name: "Git",
    description: "Version Control",
    imageUrl: "/imgs/logos/git.svg",
    bgColor: "bg-[#F05032]/20",
    category: "Tools",
  },
];

// Portfolio projects - displayed in the Projects section
// Each project includes outcome-focused copy and role information for recruiter-friendly display
export const portfolioProjects = [
  {
    id: "project-1",
    heading: "TaskFlow",
    subheading: "SaaS Task Management Platform",
    // One-line value proposition focused on impact
    valueProp:
      "A production-ready Kanban board that helps teams organize work with real-time collaboration.",
    // 2-3 bullet points emphasizing implementation and impact
    highlights: [
      "Built intuitive drag-and-drop interface with real-time sync across multiple users",
      "Integrated Clerk authentication with PostgreSQL for secure multi-tenant data isolation",
      "Implemented optimistic UI updates for snappy UX, even over slow connections",
    ],
    role: "Sole full-stack developer",
    imageUrl: "/imgs/projects/taskflow.png",
    techStack: ["Next.js", "TypeScript", "Supabase", "Clerk", "PostgreSQL"],
    liveUrl: "https://taskboard-nextjs.vercel.app/",
    githubUrl: "https://github.com/Lime-oss-hash/taskflow-board",
    featured: true, // Flagship project
  },
  {
    id: "project-2",
    heading: "Waka Eastern Bay",
    subheading: "Community Transport Platform",
    valueProp:
      "A complete booking system for a NZ non-profit, replacing manual coordination with automated scheduling.",
    highlights: [
      "Designed real-time calendar with booking capacity indicators and driver schedule sync",
      "Automated email notifications using Nodemailer for booking confirmations and reminders",
      "Built role-based access for admins, drivers, and passengers with secure JWT auth",
    ],
    role: "Full-stack developer for non-profit client",
    imageUrl: "/imgs/projects/wakawebsite.png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Nodemailer"],
    githubUrl: "https://github.com/Lime-oss-hash/Workingversion",
    featured: false,
  },
  {
    id: "project-3",
    heading: "DevPortfolio",
    subheading: "Personal Portfolio",
    valueProp:
      "A polished, performant portfolio showcasing modern frontend practices with smooth animations.",
    highlights: [
      "Crafted responsive layouts with Tailwind CSS optimized for all screen sizes",
      "Implemented Framer Motion animations for delightful micro-interactions",
      "Achieved 90+ Lighthouse scores for performance, accessibility, and SEO",
    ],
    role: "Designer & developer",
    imageUrl: "/imgs/projects/portfolio.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://portfolio-under-construction-six.vercel.app/",
    githubUrl: "https://github.com/Lime-oss-hash/portfolio-under-construction",
    featured: false,
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
