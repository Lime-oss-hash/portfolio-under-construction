"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface NavItem {
  name: string;
  link: string;
  icon: ReactNode;
}

interface NavbarProps {
  navItems: NavItem[];
}

export default function Navbar({ navItems }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            YourName
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <span className="w-5 h-5">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
