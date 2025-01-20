import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Shield, Wrench, Upload, Menu, X, Scale, Book } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileNav } from './MobileNav';
import { NavItem } from './NavItem';
import { ThemeToggle } from '../ui/ThemeToggle';
import { fadeInUp, slideIn } from '../../utils/animations';
import { navItems } from './navItems';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      variants={slideIn}
      initial="hidden"
      animate="visible"
      className="bg-indigo-600 dark:bg-indigo-800 text-white shadow-lg sticky top-0 z-50 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            variants={fadeInUp}
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