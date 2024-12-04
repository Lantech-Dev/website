import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Shield, Wrench, Upload, Menu, X, Scale, Book } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileNav } from './MobileNav';
import { ThemeToggle } from './ui/ThemeToggle';

const navItems = [
  {
    href: "https://docs.google.com/forms/d/14Sy6l_4l7MUQ2QdTSVzdEBdrnv45AH8LQCtAPVxL5V4/",
    icon: Upload,
    label: "Upload Game",
    isExternal: true
  },
  {
    href: "/docs",
    icon: Book,
    label: "Documentation"
  },
  {
    href: "/privacy-policy",
    icon: Shield,
    label: "Privacy Policy"
  },
  {
    href: "/developer-tools",
    icon: Wrench,
    label: "Developer Tools"
  },
  {
    href: "/license",
    icon: Scale,
    label: "License"
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-indigo-600 dark:bg-indigo-800 text-white shadow-lg sticky top-0 z-50 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8" />
              <span className="font-bold text-xl">Lantech Games</span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && <MobileNav items={navItems} onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavItem({ href, icon: Icon, label, isExternal }: {
  href: string;
  icon: typeof Gamepad2;
  label: string;
  isExternal?: boolean;
}) {
  const Component = isExternal ? 'a' : Link;
  const props = isExternal ? { 
    href,
    target: "_blank",
    rel: "noopener noreferrer"
  } : { 
    to: href 
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Component
        {...props}
        className="flex items-center space-x-2 hover:text-indigo-200 transition-colors"
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </Component>
    </motion.div>
  );
}