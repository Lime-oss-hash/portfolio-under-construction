"use client";

// ContactCTA - Professional call-to-action section for hiring managers
// Features:
// - Strong, confident headline
// - Concise value proposition
// - Primary (Email) and Secondary (LinkedIn) action buttons
// - Responsive: stacked on mobile, side-by-side on desktop
// - Clean, centered layout

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative z-10 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Headline - confident and recruiter-focused */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-200 mb-4">
          Ready to build something great?
        </h2>

        {/* Supporting sentence - concise value prop */}
        <p className="text-base sm:text-lg text-stone-400 mb-8 leading-relaxed">
          I&apos;m looking for graduate and junior full-stack roles in New
          Zealand. Let&apos;s chat about how I can help your team ship faster.
        </p>

        {/* Action buttons - stacked mobile, side-by-side desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA - Email */}
          <Link
            href="mailto:sam2319667268@gmail.com"
            className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-200"
          >
            <Mail className="w-5 h-5" />
            Email Me
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          {/* Secondary CTA - LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/sam-bai-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg border border-dark-700 text-stone-300 font-medium hover:border-primary/50 hover:text-stone-200 transition-all duration-200"
          >
            <Linkedin className="w-5 h-5" />
            View LinkedIn
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
