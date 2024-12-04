import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { DocsNavigation } from './DocsNavigation';

interface DocsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DocsSidebar({ isOpen, onClose }: DocsSidebarProps) {
  // Close sidebar when clicking outside
  const sidebarRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black lg:hidden z-40"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            ref={sidebarRef}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl lg:hidden z-50"
          >
            <div className="flex flex-col h-full">
              <div className="p-4 border-b dark:border-gray-800">
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <DocsNavigation />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}