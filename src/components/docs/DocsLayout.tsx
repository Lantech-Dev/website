import React from 'react';
import { motion } from 'framer-motion';
import { Book, Menu } from 'lucide-react';
import { DocsNavigation } from './DocsNavigation';
import { DocsSidebar } from './DocsSidebar';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center space-x-4 mb-8"
      >
        <Book className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Documentation
        </h1>
      </motion.div>

      <div className="flex relative">
        {/* Mobile Sidebar */}
        <DocsSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        {/* Desktop Navigation */}
        <div className="hidden lg:block w-64 flex-shrink-0 fixed h-[calc(100vh-6rem)] overflow-y-auto pr-8">
          <DocsNavigation />
        </div>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          {children}
        </main>

        {/* Floating Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden fixed bottom-6 right-6 p-4 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-colors z-50"
        >
          <Menu className="h-6 w-6" />
        </motion.button>
      </div>
    </div>
  );
}