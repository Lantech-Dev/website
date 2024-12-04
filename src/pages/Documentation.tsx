import React, { useEffect } from 'react';
import { DocSection } from '../components/docs/DocSection';
import { GameGuidelines } from '../components/docs/GameGuidelines';
import { Integrations } from '../components/docs/Integrations';
import { DocsLayout } from '../components/docs/DocsLayout';

export default function Documentation() {
  useEffect(() => {
    // Handle initial hash on page load
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const header = document.querySelector('nav');
        const headerOffset = header?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  return (
    <DocsLayout>
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
        <div className="space-y-8">
          <div id="scratch" className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Scratch</h3>
            <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 mb-4">
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
        </div>
      </DocSection>

      <DocSection id="game-guidelines" title="Game Guidelines">
        <GameGuidelines />
      </DocSection>

      <DocSection id="integrations" title="Integrations">
        <Integrations />
      </DocSection>
    </DocsLayout>
  );
}