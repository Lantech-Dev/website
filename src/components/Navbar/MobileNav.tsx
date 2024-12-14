import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface MobileNavProps {
  items: {
    href: string;
    icon: LucideIcon;
    label: string;
    isExternal?: boolean;
  }[];
  onClose: () => void;
}

export function MobileNav({ items, onClose }: MobileNavProps) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      className="md:hidden bg-indigo-600 border-t border-indigo-500"
    >
      <div className="px-4 py-2 space-y-1">
        {items.map((item) => {
          const Component = item.isExternal ? 'a' : Link;
          const props = item.isExternal ? {
            href: item.href,
            target: "_blank",
            rel: "noopener noreferrer"
          } : {
            to: item.href
          };

          return (
            <motion.div
              key={item.label}
              whileTap={{ scale: 0.95 }}
            >
              <Component
                {...props}
                className="flex items-center space-x-2 p-3 rounded-md hover:bg-indigo-500 transition-colors w-full text-white"
                onClick={onClose}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Component>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}