"use client";

// ProjectCard - Displays a portfolio project with image, details, and links
// Features hover effects, tech stack badges, and external links

import { cn } from "@/app/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    id: string;
    heading: string;
    subheading: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    heading,
    subheading,
    description,
    imageUrl,
    techStack,
    liveUrl,
    githubUrl,
  } = project;

  return (
    <div
      className={cn(
        // Base card styling
        "group relative rounded-xl overflow-hidden",
        // Dark theme background with border
        "bg-dark-200 border border-dark-700",
        // Hover effect
        "hover:border-primary/50 transition-all duration-300"
      )}
    >
      {/* Project image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <Image
          src={imageUrl}
          alt={heading}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Subheading / Category */}
        <p className="text-sm text-primary mb-1">{subheading}</p>

        {/* Project title */}
        <h3 className="text-xl font-bold text-stone-200 mb-2">{heading}</h3>

        {/* Description */}
        <p className="text-sm text-stone-400 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-dark-300 text-stone-300 border border-dark-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-stone-400 hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-stone-400 hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
