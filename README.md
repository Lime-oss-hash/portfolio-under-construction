# Portfolio Website Documentation

A modern, animated portfolio website built with Next.js 16, Tailwind CSS v4, and Framer Motion.

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

---

## Tech Stack

| Technology    | Version | Purpose                         |
| ------------- | ------- | ------------------------------- |
| Next.js       | 16.0.7  | React framework with App Router |
| React         | 19.2.0  | UI library                      |
| Tailwind CSS  | v4      | Utility-first CSS               |
| Framer Motion | 12.x    | Animations                      |
| TypeScript    | 5.x     | Type safety                     |
| next-themes   | 0.4.6   | Dark mode                       |
| lucide-react  | 0.556.0 | Icons                           |

---

## Project Structure

```
portfolio-2/
├── app/
│   ├── components/
│   │   ├── ui/                    # Reusable UI components
│   │   │   ├── Navbar.tsx         # Floating animated navbar
│   │   │   └── ProjectCard.tsx    # Portfolio project card
│   │   ├── Hero.tsx               # Hero section with animations
│   │   ├── Skills.tsx             # Skills/technologies grid
│   │   ├── Projects.tsx           # Projects showcase
│   │   ├── ContactCTA.tsx         # Contact call-to-action
│   │   ├── Footer.tsx             # Footer with social links
│   │   ├── WordReveal.tsx         # Word-by-word text animation
│   │   └── ThemeProvider.tsx      # Dark mode provider
│   ├── hooks/
│   │   └── useScrollAnimation.ts  # Scroll-triggered animation hook
│   ├── lib/
│   │   ├── data.ts                # All portfolio data
│   │   ├── types.ts               # TypeScript interfaces
│   │   └── utils.ts               # Utility functions (cn)
│   ├── styles/
│   │   └── global.css             # Tailwind v4 theme + global styles
│   ├── layout.tsx                 # Root layout with SEO
│   └── page.tsx                   # Homepage
├── public/
│   └── imgs/
│       ├── logos/                 # Tech stack SVG icons
│       └── projects/              # Project screenshots
└── package.json
```

---

## Components

### Navbar (`components/ui/Navbar.tsx`)

Floating, animated navigation bar.

**Features:**

- Centers as a pill-shaped container
- Hides when scrolling down, shows when scrolling up
- Icons on mobile, text labels on desktop
- Uses Framer Motion for smooth animations

**Props:**

```typescript
interface NavItem {
  name: string;    // Display text
  link: string;    // Anchor link (#home, #work, etc.)
  icon?: JSX.Element; // Lucide icon
}

navItems: NavItem[]
```

---

### Hero (`components/Hero.tsx`)

Main landing section with animated entrance.

**Elements:**

- Location badge ("Based In New Zealand")
- Two-line heading with gradient accent
- Description paragraph
- Gradient CTA button (Download CV)
- Scroll indicator animation

**Customization:**

- Edit location in the badge
- Change heading text (lines 39-46)
- Update description (lines 51-58)
- Change CV link path (line 69)

---

### ProjectCard (`components/ui/ProjectCard.tsx`)

Displays a portfolio project with image and details.

**Props:**

```typescript
project: {
  id: string;
  heading: string;      // Project name
  subheading: string;   // Category/type
  valueProp: string;    // One-line value proposition
  highlights: string[]; // Key achievements (optional)
  role: string;         // Your role
  imageUrl: string;     // Screenshot path
  techStack: string[];  // ["Next.js", "TypeScript"]
  liveUrl?: string;     // Live demo URL
  githubUrl?: string;   // GitHub repo URL
  featured?: boolean;   // Highlight as featured project
}
```

---

### useScrollAnimation (`hooks/useScrollAnimation.ts`)

Custom hook for scroll-triggered CSS animations.

**Features:**

- Observes each `.animate-on-scroll` child element directly
- Adds `in-view` class when element enters viewport
- Auto-unobserves after animation triggers
- One-time `querySelectorAll` on mount for performance

**Usage:**

```tsx
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

function MySection() {
  const sectionRef = useScrollAnimation();
  return (
    <section ref={sectionRef}>
      <h2 className="animate-on-scroll">Title</h2>
      <p className="animate-on-scroll animate-delay-1">Text</p>
    </section>
  );
}
```

---

## Customization Guide

### 1. Update Personal Information

Edit `app/lib/data.ts`:

```typescript
// Your tech stack (organized by category)
export const techCardsItems: TechCard[] = [
  {
    name: "React",
    imageUrl: "/imgs/logos/react.svg",
    bgColor: "bg-[#61DAFB]/20",
    category: "Frontend",
  },
  // Add more...
];

// Your projects
export const portfolioProjects = [
  {
    id: "project-1",
    heading: "Your Project",
    subheading: "Category",
    valueProp: "One-line value proposition...",
    highlights: [],
    role: "Your role",
    imageUrl: "/imgs/projects/project.png",
    techStack: ["Tech1", "Tech2"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/...",
    featured: true,
  },
];
```

### 2. Update SEO Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: {
    template: "Your Name - %s",
    default: "Your Name - Your Title",
  },
  description: "Your description...",
  // ...
};
```

### 3. Update Email

Edit `app/components/Footer.tsx` line 34:

```typescript
href = "mailto:your@email.com";
```

### 4. Add Logo Images

Place SVG files in `public/imgs/logos/`:

- Get icons from [simpleicons.org](https://simpleicons.org) or [devicon.dev](https://devicon.dev)

### 5. Add Project Screenshots

Place images in `public/imgs/projects/`:

- Recommended size: 1200x800px
- Format: PNG or WebP

---

## Theme Configuration

Tailwind v4 theme is in `app/styles/global.css`:

```css
@theme {
  /* Change primary accent color */
  --color-primary: #10b981;

  /* Dark mode colors */
  --color-dark-100: #0a0a0a; /* Background */
  --color-dark-200: #1a1a1a; /* Cards */
  --color-dark-300: #262626; /* Hover */
  --color-dark-400: #404040; /* Subtle borders */
  --color-dark-700: #4d4d4d; /* Visible borders */
}
```

---

## Animations

The portfolio uses a mix of Framer Motion and CSS-based animations:

| Animation           | Component             | Effect                     |
| ------------------- | --------------------- | -------------------------- |
| Word reveal         | Hero (WordReveal)     | Words fade in with stagger |
| Scroll fade-in      | Skills, Projects, CTA | Elements fade up on scroll |
| Hide/show on scroll | Navbar                | Hides on scroll down       |
| Katana shine        | Hero CTA button       | Hover shine effect         |
| Bounce              | Hero scroll indicator | Infinite bounce            |

**CSS Animation Classes** (in `global.css`):

- `.animate-on-scroll` - Base class for scroll-triggered animations
- `.in-view` - Added by `useScrollAnimation` hook when visible
- `.animate-delay-1` to `.animate-delay-5` - Staggered delays

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in [vercel.com/new](https://vercel.com/new)
3. Deploy with default settings

### Other Platforms

```bash
# Build
npm run build

# The output is in .next/
# Use npm run start for Node.js servers
```

---

## File Reference

| File         | Purpose                      |
| ------------ | ---------------------------- |
| `page.tsx`   | Homepage composition         |
| `layout.tsx` | Root layout + SEO            |
| `global.css` | Tailwind theme + base styles |
| `data.ts`    | All portfolio data           |
| `utils.ts`   | `cn()` class merge utility   |

---

## Troubleshooting

### Styles not loading?

- Ensure you're using Tailwind v4 syntax in `global.css`
- Check that `@import "tailwindcss"` is at the top
- Restart dev server after config changes

### Images not showing?

- Verify paths start with `/imgs/`
- Check files exist in `public/imgs/`
- For external images, add domain to `next.config.ts`

### Animations not working?

- Ensure `framer-motion` is installed
- Check `"use client"` is at top of component
- Verify `viewport={{ once: true }}` for scroll triggers
