import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface DocLink {
  title: string;
  href: string;
  description?: string;
  position?: number;
  subitems?: DocLink[];
}

const docLinks: DocLink[] = [
  {
    title: 'Introduction',
    href: '#introduction',
    position: 1,
    description: 'Get started with Lantech Games development',
    subitems: [
      { title: 'Overview', href: '#overview' },
      { title: 'Prerequisites', href: '#prerequisites' }
    ]
  },
  {
    title: 'Development Methods',
    href: '#development-methods',
    position: 2,
    description: 'Choose your preferred way to create games',
    subitems: [
      { title: 'Scratch', href: '#scratch' },
      { title: 'Turbowarp (Recommended)', href: '#turbowarp' },
      { title: 'Penguinmod', href: '#penguinmod' },
      { title: 'GDscript & Godot', href: '#gdscript-godot' }
    ]
  },
  {
    title: 'Game Guidelines',
    href: '#game-guidelines',
    position: 3,
    description: 'Learn about content and technical requirements',
    subitems: [
      { title: 'Age Ratings', href: '#age-ratings' },
      { title: 'Content Rules', href: '#content-rules' },
      { title: 'Technical Requirements', href: '#technical-requirements' }
    ]
  },
  {
    title: 'Publishing',
    href: '#publishing',
    position: 4,
    description: 'Submit and publish your game',
    subitems: [
      { title: 'Submission Process', href: '#submission-process' },
      { title: 'Review Guidelines', href: '#review-guidelines' }
    ]
  }
];

export function DocsNavigation() {
  return (
    <nav className="w-64 pr-8 hidden lg:block">
      <div className="sticky top-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          {docLinks.map((section) => (
            <div key={section.href} className="space-y-2">
              <a
                href={section.href}
                className="block text-lg font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {section.title}
              </a>
              {section.description && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {section.description}
                </p>
              )}
              {section.subitems && (
                <ul className="mt-2 space-y-2 border-l-2 border-gray-200 dark:border-gray-700">
                  {section.subitems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="group flex items-center pl-4 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="ml-2">{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </nav>
  );
}