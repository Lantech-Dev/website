import React from 'react';
import { motion } from 'framer-motion';
import { Alert } from '../components/ui/Alert';
import { Hero } from '../components/sections/Hero';
import { FeatureCards } from '../components/sections/FeatureCards';

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8"
    >
      <Alert variant="warning">
        Lantech Games is still under development. Sorry for any inconvenience.
      </Alert>
      
      <Hero />
      
      <FeatureCards />
    </motion.div>
  );
}