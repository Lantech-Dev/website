import React from 'react';
import { Gamepad2, Users, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8"
      >
        <p className="text-yellow-700">
          Lantech Games is still under development. Sorry for any inconvenience.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="text-center py-16"
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Gamepad2 className="h-24 w-24 mx-auto text-indigo-600 mb-6" />
        </motion.div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Lantech Games
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Your destination for safe, age-appropriate gaming experiences. Join our community
          of developers and players today!
        </p>
        <motion.a
          href="https://discord.gg/nmWJ8eY8zX"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-2 bg-[#5865F2] text-white px-8 py-3 rounded-lg hover:bg-[#4752C4] transition-colors shadow-lg"
        >
        
          <span className="font-semibold">Join Discord</span>
        </motion.a>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid md:grid-cols-3 gap-8 mt-12"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-md transform transition-all hover:shadow-xl"
        >
          <Gamepad2 className="h-12 w-12 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-4">For Players</h2>
          <p className="text-gray-600">
            Discover games tailored to your age group, ensuring a safe and enjoyable
            gaming experience.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-md transform transition-all hover:shadow-xl"
        >
          <Users className="h-12 w-12 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-4">For Developers</h2>
          <p className="text-gray-600">
            Join our platform and share your games with our growing community.
            Check out our developer tools to get started.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-md transform transition-all hover:shadow-xl"
        >
          <Shield className="h-12 w-12 text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-4">Safety First</h2>
          <p className="text-gray-600">
            We prioritize user safety with strict content guidelines and
            age-appropriate content filtering.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
