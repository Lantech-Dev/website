import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Shield, Wrench, Upload } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navItemVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-indigo-600 text-white shadow-lg sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8" />
              <span className="font-bold text-xl">Lantech Games</span>
            </Link>
          </motion.div>
          
          <div className="flex space-x-6">
            <motion.a
              variants={navItemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              href="https://docs.google.com/forms/d/14Sy6l_4l7MUQ2QdTSVzdEBdrnv45AH8LQCtAPVxL5V4/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-indigo-200 transition-colors"
            >
              <Upload className="h-5 w-5" />
              <span>Upload Game</span>
            </motion.a>
            
            <motion.div variants={navItemVariants} whileHover="hover" whileTap={{ scale: 0.95 }}>
              <Link to="/privacy-policy" className="flex items-center space-x-2 hover:text-indigo-200 transition-colors">
                <Shield className="h-5 w-5" />
                <span>Privacy Policy</span>
              </Link>
            </motion.div>
            
            <motion.div variants={navItemVariants} whileHover="hover" whileTap={{ scale: 0.95 }}>
              <Link to="/developer-tools" className="flex items-center space-x-2 hover:text-indigo-200 transition-colors">
                <Wrench className="h-5 w-5" />
                <span>Developer Tools</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}