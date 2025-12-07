"use client";

// ProjectCard - Displays a portfolio project with enhanced recruiter-friendly features
// Features:
// - Featured badge for flagship projects
// - Value proposition headline
// - Bullet-point highlights showing implementation details
// - Role attribution
// - Tech stack chips
// - Clear CTAs for Live Demo and Code

import { cn } from "@/app/lib/utils";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    id: string;
    heading: string;
    subheading: string;
    valueProp: string;
    highlights: string[];
    role: string;
    imageUrl: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    heading,
    subheading,
    valueProp,
    highlights,
    role,
    imageUrl,
    techStack,
    liveUrl,
    githubUrl,
    featured,
  } = project;

  return (
    <div
      className={cn(
        // Base card styling
        "group relative rounded-xl overflow-hidden",
        // Dark theme background with border
        "bg-dark-200 border border-dark-700",
        // Hover effect - enhanced for featured
        featured
          ? "hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          : "hover:border-primary/50 transition-all duration-300",
        // Featured cards span full width on larger screens
        featured && "md:col-span-2"
      )}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold">
          <Star className="w-3.5 h-3.5 fill-current" />
          Featured Project
        </div>
      )}

      {/* Project image - larger for featured projects */}
      <div
        className={cn(
          "relative overflow-hidden",
          featured ? "h-56 sm:h-72 md:h-80" : "h-48 sm:h-56"
        )}
      >
        <Image
          src={imageUrl}
          alt={heading}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-dark-200/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Subheading / Category */}
        <p className="text-sm text-primary font-medium mb-1">{subheading}</p>

        {/* Project title */}
        <h3 className="text-xl font-bold text-stone-200 mb-2">{heading}</h3>

        {/* Value proposition - the one-liner */}
        <p className="text-sm text-stone-300 mb-4 leading-relaxed">
          {valueProp}
        </p>

        {/* Feature highlights - bullet points */}
        <ul className="space-y-2 mb-4">
          {highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-stone-400"
            >
              <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-primary shrink-0" />
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Role attribution */}
        <p className="text-xs text-stone-500 mb-4 italic">My role: {role}</p>

        {/* Tech stack chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs rounded-full bg-dark-300 text-stone-300 border border-dark-700 hover:border-primary/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Links */}
        <div className="flex items-center gap-4 pt-2 border-t border-dark-700">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                featured
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-dark-300 text-stone-200 hover:bg-dark-400"
              )}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-stone-400 hover:text-stone-200 hover:bg-dark-300 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              View Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
