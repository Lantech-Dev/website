import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PageHeaderProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

export function PageHeader({ icon: Icon, title, description }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className="flex items-center space-x-3">
        <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
      </div>
      {description && (
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}