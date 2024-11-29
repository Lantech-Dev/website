import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
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
      <motion.h1 variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Lantech Privacy Policy
      </motion.h1>
      
      <motion.div variants={containerVariants} className="prose prose-indigo dark:prose-invert max-w-none">
        <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 mb-6">
          Lantech Games is used by a wide range of ages, making privacy one of our top priorities. 
          We categorise different age groups to protect their privacy accordingly, while also showing 
          them relevant content that they find enjoyable.
        </motion.p>

        <motion.h2 variants={itemVariants} className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
          Our base structure is as follows:
        </motion.h2>
        
        <motion.ul variants={containerVariants} className="space-y-4 list-disc pl-6">
          <motion.li variants={itemVariants} className="text-gray-600 dark:text-gray-300">
            Children under the age of 9 are shown kid-friendly content and are not allowed to 
            play/watch content with an age rating of 9+ or more.
          </motion.li>
          
          <motion.li variants={itemVariants} className="text-gray-600 dark:text-gray-300">
            Children between the ages of 9-12 are shown more content containing mild violence 
            (e.g. cartoon violence) and are not allowed to play/watch content with an age rating of 13+.
          </motion.li>
          
          <motion.li variants={itemVariants} className="text-gray-600 dark:text-gray-300">
            Children over the age of 13 and adults are shown content related to their play/watch 
            history and have no restrictions to games on Lantech Games.
          </motion.li>
        </motion.ul>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mt-8 transform transition-all"
        >
          <p className="text-gray-600 dark:text-gray-300">
            Lantech Games also doesn't allow any content promoting self-harm, extreme violence 
            or mature content, because the vast majority of users are children aged 13 and under. 
            However, adults are still allowed to play games on Lantech Games. If you see any 
            content promoting self-harm, extreme violence or mature content,{' '}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="mailto:jdpsmart@gmail.com" 
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 inline-block"
            >
              report it here
            </motion.a>{' '}
            immediately.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}