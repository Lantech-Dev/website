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
    description: 'Learn about content and age requirements',
    subitems: [
      { title: 'Ages 8 and Below', href: '#age-8' },
      { title: 'Ages 9 to 12', href: '#age-9-12' },
      { title: 'Ages 13 and Above', href: '#age-13' },
      { title: 'Prohibited Content', href: '#prohibited-content' }
    ]
  },
  {
    title: 'Integrations',
    href: '#integrations',
    position: 4,
    description: 'Learn how to integrate with Lantech features',
    subitems: [
      { title: 'Cookies & Storage', href: '#cookies' },
      { title: 'Monetization', href: '#monetization' }
    ]
  }
];

export function DocsNavigation() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const header = document.querySelector('nav');
      const headerOffset = header?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL without triggering a scroll
      window.history.pushState({}, '', href);
    }
  };

  return (
    <div className="space-y-8">
      {docLinks.map((section) => (
        <div key={section.href} className="space-y-2">
          <a
            href={section.href}
            onClick={(e) => scrollToSection(e, section.href)}
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
                    onClick={(e) => scrollToSection(e, item.href)}
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
    </div>
  );
}