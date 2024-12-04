import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, DollarSign } from 'lucide-react';
import { CodeBlock } from './CodeBlock';

export function Integrations() {
  return (
    <div id="integrations" className="space-y-8">
      <div id="cookies" className="prose prose-indigo dark:prose-invert max-w-none">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Cookies & Local Storage</h3>
        
        <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 mb-6">
          <div className="flex items-center mb-2">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
            <p className="text-amber-700 dark:text-amber-200 font-medium">Important Note</p>
          </div>
          <p className="text-amber-700 dark:text-amber-200">
            To use this feature, you must use the 'Local Storage' extension on Turbowarp or Penguinmod.
            Access it at: <a href="https://extensions.turbowarp.org/local-storage.js" className="text-amber-600 dark:text-amber-300 hover:underline">
              extensions.turbowarp.org/local-storage.js
            </a>
          </p>
        </div>

        <p className="text-gray-600 dark:text-gray-300">
          You can use 'cookies' (data stored in-memory) to integrate your game with Lantech Settings. 
          If the user has previously downloaded your game, they can access your 'settings' in the 
          'in app integrations' in the Settings panel.
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Implementation Steps:</h4>
          <ol className="space-y-4 text-gray-600 dark:text-gray-300">
            <li>
              1. Set the project namespace to <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">lantech:games</code>
            </li>
            <li>
              2. Store values as <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">1</code> or <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">0</code> for checkbox compatibility
            </li>
            <li>
              3. Avoid checking values in forever loops - use event-based checks instead
            </li>
          </ol>
        </div>
      </div>

      <div id="monetization" className="prose prose-indigo dark:prose-invert max-w-none">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          <span className="flex items-center">
            <DollarSign className="h-6 w-6 mr-2" />
            Monetization & Advertising
          </span>
        </h3>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Currently, there is no way to monetize your game on Lantech. We also don't allow custom 
            adverts in your game. However, you can create advertisements for your game within 
            Lantech Games when you upload your game.
          </p>
          
          <a 
            href="https://docs.google.com/forms/d/14Sy6l_4l7MUQ2QdTSVzdEBdrnv45AH8LQCtAPVxL5V4"
            className="inline-flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Submit your game here</span>
          </a>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Note: This policy may change in the future. Check back regularly for updates.
          </p>
        </div>
      </div>
    </div>
  );
}