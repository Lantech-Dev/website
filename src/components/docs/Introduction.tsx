import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Introduction() {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-indigo dark:prose-invert max-w-none"
      >
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Welcome to Lantech Games documentation! Here you'll find everything you need to know
          about creating and publishing games on our platform. We've designed this guide to
          help developers of all skill levels understand our platform and get started quickly.
        </p>

        <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 p-6 rounded-r-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Quick Start
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Ready to create your first game? Choose your preferred development method and get started:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="#scratch"
              className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
            >
              <ArrowRight className="h-4 w-4" />
              <span>Start with Scratch</span>
            </a>
            <a
              href="#turbowarp"
              className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
            >
              <ArrowRight className="h-4 w-4" />
              <span>Use Turbowarp (Recommended)</span>
            </a>
            <a
              href="#penguinmod"
              className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
            >
              <ArrowRight className="h-4 w-4" />
              <span>Try Penguinmod</span>
            </a>
            <a
              href="#gdscript-godot"
              className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
            >
              <ArrowRight className="h-4 w-4" />
              <span>Advanced: GDscript & Godot</span>
            </a>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Before You Start
          </h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="font-medium mr-2">1.</span>
              Review our age-appropriate content guidelines
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">2.</span>
              Choose a development method that matches your skill level
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">3.</span>
              Plan your game's features and target age group
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">4.</span>
              Understand our submission requirements
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}