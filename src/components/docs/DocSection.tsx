import React from 'react';
import { motion } from 'framer-motion';

interface DocSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function DocSection({ id, title, children }: DocSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}