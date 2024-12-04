import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export function GameGuidelines() {
  return (
    <div id="game-guidelines" className="space-y-8">
      <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="grid md:grid-cols-3 gap-6">
        <div id="age-8" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Ages 8 and below</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
            <li>✓ Cartoon violence</li>
            <li>✕ NO mature content</li>
            <li>✕ NO drug references</li>
            <li>✕ NO references to real-life dangerous events</li>
            <li>✕ NO self-harm</li>
          </ul>
        </div>

        <div id="age-9-12" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Ages 9 to 12</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
            <li>✓ Mild violence</li>
            <li>✓ Mild mature content (e.g. mild dating)</li>
            <li>✕ NO drug references</li>
            <li>✕ NO references to real-life dangerous events</li>
            <li>✕ NO self-harm</li>
          </ul>
        </div>

        <div id="age-13" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Ages 13 and above</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
            <li>✓ General violence (no extreme blood or gore)</li>
            <li>✓ Mild mature content</li>
            <li>✕ NO drug references</li>
            <li>✕ NO references to real-life dangerous events</li>
            <li>✕ NO self-harm</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        id="prohibited-content"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 p-4"
      >
        <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Never Allowed Content:</h4>
        <ul className="text-red-700 dark:text-red-300 space-y-1">
          <li>• Gambling</li>
          <li>• Extreme violence</li>
          <li>• Adultery</li>
          <li>• Hate towards any religion, political group, nation, gender etc.</li>
          <li>• General hate</li>
          <li>• Extreme graphical content of any kind</li>
        </ul>
      </motion.div>
    </div>
  );
}