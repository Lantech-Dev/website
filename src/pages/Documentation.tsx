import React from 'react';
import { motion } from 'framer-motion';
import { Book, AlertTriangle, Info } from 'lucide-react';
import { DocsNavigation } from '../components/docs/DocsNavigation';
import { DocSection } from '../components/docs/DocSection';

export default function Documentation() {
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

      <div className="flex">
        <DocsNavigation />

        <main className="flex-1 max-w-3xl">
          <DocSection id="introduction" title="Introduction">
            <div className="prose prose-indigo dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Welcome to Lantech Games documentation! Here you'll find comprehensive guides and 
                resources for creating and publishing games on our platform. Whether you're a 
                beginner or an experienced developer, we'll help you get started.
              </p>

              <div id="overview" className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Overview</h3>
                <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 p-6 rounded-r-lg">
                  <p className="text-gray-600 dark:text-gray-300">
                    Lantech Games is a platform dedicated to providing safe, age-appropriate gaming 
                    experiences. We welcome developers who share our commitment to creating engaging 
                    and responsible content for players of all ages.
                  </p>
                </div>
              </div>

              <div id="prerequisites" className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Prerequisites</h3>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Before you begin:</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      Basic understanding of game development concepts
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      Familiarity with at least one of our supported development methods
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      Understanding of our content guidelines and age ratings
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </DocSection>

          <DocSection id="development-methods" title="Development Methods">
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-8">
              <div className="flex items-center mb-2">
                <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <p className="text-blue-700 dark:text-blue-200 font-medium">Choose Your Method</p>
              </div>
              <p className="text-blue-700 dark:text-blue-200">
                Select the development method that best matches your experience level and project needs.
                We recommend starting with Turbowarp or Penguinmod for the best development experience.
              </p>
            </div>

            <div id="scratch" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Scratch</h3>
              <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 mb-4">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                  <p className="text-amber-700 dark:text-amber-200 font-medium">Important Note</p>
                </div>
                <p className="text-amber-700 dark:text-amber-200">
                  Rules on Scratch differ from Lantech Games. Please avoid mentioning us on Scratch
                  to prevent potential account issues.
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Start with Scratch if you're new to game development. Visit{' '}
                <a href="https://scratch.mit.edu" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  scratch.mit.edu
                </a>
                {' '}to begin creating your game.
              </p>
            </div>

            <div id="turbowarp" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Turbowarp (Recommended)
              </h3>
              <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-4 mb-4">
                <p className="text-green-700 dark:text-green-200">
                  Our recommended platform for game development. Turbowarp offers better performance
                  and more features than standard Scratch.
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Access Turbowarp at{' '}
                <a href="https://turbowarp.org/editor" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  turbowarp.org/editor
                </a>
                . Enjoy faster performance and additional features for your game development.
              </p>
            </div>

            <div id="penguinmod" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Penguinmod</h3>
              <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 p-4 mb-4">
                <p className="text-green-700 dark:text-green-200">
                  A powerful alternative with extensive modding capabilities and service integration.
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Create your game at{' '}
                <a href="https://studio.penguinmod.com/editor.html" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  studio.penguinmod.com/editor
                </a>
                . Take advantage of additional mods and easy service integration.
              </p>
            </div>

            <div id="gdscript-godot" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                GDscript and Godot
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                For advanced developers, Godot provides a professional game development environment.
                Export your game as HTML5 to publish on Lantech Games. Learn more at{' '}
                <a href="https://docs.godotengine.org" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                  docs.godotengine.org
                </a>
                .
              </p>
            </div>
          </DocSection>
        </main>
      </div>
    </div>
  );
}