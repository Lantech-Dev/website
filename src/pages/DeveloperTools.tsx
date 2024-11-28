import React from 'react';
import { FileCode, Users, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DeveloperTools() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <motion.h1 variants={itemVariants} className="text-3xl font-bold text-gray-900 mb-8">
        Developer Tools
      </motion.h1>
      
      <motion.div variants={containerVariants} className="space-y-12">
        <motion.section variants={itemVariants} id="developer-requirements">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Developer Requirements</h2>
          <motion.ul variants={containerVariants} className="list-decimal pl-6 space-y-4">
            <motion.li variants={itemVariants} className="text-gray-600">
              Your game must be either a html file or an sb3 file.
            </motion.li>
            <motion.li variants={itemVariants} className="text-gray-600">
              Your game can't contain adverts inside it, as we don't like to edit people's code.
            </motion.li>
            <motion.li variants={itemVariants} className="text-gray-600">
              Your game must meet the age guidelines listed below.
            </motion.li>
          </motion.ul>
        </motion.section>

        <motion.section variants={itemVariants} id="age-guidelines">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Developer Age Guidelines</h2>
          
          <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md transform transition-all hover:shadow-xl"
            >
              <h3 className="font-semibold text-lg mb-3">Ages 8 and below</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Cartoon violence</li>
                <li>✕ NO mature content</li>
                <li>✕ NO drug references</li>
                <li>✕ NO references to real-life dangerous events</li>
                <li>✕ NO self-harm</li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md transform transition-all hover:shadow-xl"
            >
              <h3 className="font-semibold text-lg mb-3">Ages 9 to 12</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Mild violence</li>
                <li>✓ Mild mature content (e.g. mild dating)</li>
                <li>✕ NO drug references</li>
                <li>✕ NO references to real-life dangerous events</li>
                <li>✕ NO self-harm</li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md transform transition-all hover:shadow-xl"
            >
              <h3 className="font-semibold text-lg mb-3">Ages 13 and above</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ General violence (no extreme blood or gore)</li>
                <li>✓ Mild mature content</li>
                <li>✕ NO drug references</li>
                <li>✕ NO references to real-life dangerous events</li>
                <li>✕ NO self-harm</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-red-50 border-l-4 border-red-500 p-4 mb-8"
          >
            <h4 className="font-semibold text-red-800 mb-2">Never Allowed Content:</h4>
            <ul className="text-red-700 space-y-1">
              <li>• Gambling</li>
              <li>• Extreme violence</li>
              <li>• Adultery</li>
              <li>• Hate towards any religion, political group, nation, gender etc.</li>
              <li>• General hate</li>
              <li>• Extreme graphical content of any kind</li>
            </ul>
          </motion.div>
        </motion.section>

        <motion.section
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-indigo-50 p-6 rounded-lg transform transition-all"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Want to become part of our team?</h2>
          <p className="text-gray-600 mb-4">
            Simply join the Discord and fill out the Google form and we'll review your application within 3 business days!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://docs.google.com/forms/d/1eKiFkPOEsJoggPYRmi03R1nok9omU-gdh0DEce3RLtQ/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Apply Now
          </motion.a>
        </motion.section>
      </motion.div>
    </motion.div>
  );
}
