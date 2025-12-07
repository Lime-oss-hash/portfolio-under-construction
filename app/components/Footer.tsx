"use client";

// Footer Section - Multi-column navigation and copyright
// Features:
// - Clean multi-column layout (Brand, Navigate, Projects, Socials)
// - Dark theme styling with consistent design
// Note: CTA has been moved to dedicated ContactCTA component

import { motion } from "framer-motion";
import Link from "next/link";
import {
  mainNavigationLinks,
  portfolioProjects,
  socialLinks,
} from "@/app/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 py-12 sm:py-16 border-t border-dark-700">
      {/* Footer content - multi-column layout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {/* Brand column */}
        <div className="col-span-2 sm:col-span-1">
          <h3 className="text-xl font-bold text-stone-200 mb-2">Sam Bai</h3>
          <p className="text-sm text-stone-400 mb-2">Full-Stack Developer</p>
          <a
            href="mailto:sam2319667268@gmail.com"
            className="text-sm text-primary hover:underline underline-offset-2"
          >
            sam2319667268@gmail.com
          </a>
        </div>

        {/* Navigate column */}
        <div>
          <h4 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-4">
            Navigate
          </h4>
          <ul className="space-y-2">
            {mainNavigationLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-stone-300 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects column */}
        <div>
          <h4 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-4">
            Projects
          </h4>
          <ul className="space-y-2">
            {portfolioProjects.map((project) => (
              <li key={project.id}>
                <Link
                  href="#projects"
                  className="text-stone-300 hover:text-primary transition-colors text-sm"
                >
                  {project.heading}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials column */}
        <div>
          <h4 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-4">
            Connect
          </h4>
          <ul className="space-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Copyright */}
      <div className="mt-12 pt-6 border-t border-dark-700 text-center">
        <p className="text-sm text-stone-500">
          © {currentYear} Sam Bai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
