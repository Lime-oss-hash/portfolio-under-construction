"use client";

// Footer Section - Contact CTA and multi-column navigation
// Features:
// - Large contact CTA heading with animated email link
// - Three-column layout (Navigate, Projects, Socials)
// - Dark theme styling with consistent design

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
    <footer id="contact" className="relative z-10 py-16 sm:py-24">
      {/* Large CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 sm:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-stone-200 leading-tight">
          Like what you see? <br className="hidden sm:block" />
          Reach out{" "}
          <a
            href="mailto:sam2319667268@gmail.com"
            className="text-primary hover:underline underline-offset-4 transition-all"
          >
            via email
          </a>{" "}
          to collaborate!
        </h2>
      </motion.div>

      {/* Divider */}
      <div className="h-px bg-dark-700 mb-12" />

      {/* Footer content - multi-column layout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {/* Brand column */}
        <div>
          <h3 className="text-xl font-bold text-stone-200 mb-4">Sam Bai</h3>
          <p className="text-sm text-stone-400">
            © {currentYear} | All rights reserved.
          </p>
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
                  className="text-stone-300 hover:text-primary transition-colors"
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
                <span className="text-stone-300 hover:text-primary transition-colors cursor-pointer">
                  {project.heading}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials column */}
        <div>
          <h4 className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-4">
            Socials
          </h4>
          <ul className="space-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </footer>
  );
}
