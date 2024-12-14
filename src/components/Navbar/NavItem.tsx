import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isExternal?: boolean;
}

export function NavItem({ href, icon: Icon, label, isExternal }: NavItemProps) {
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