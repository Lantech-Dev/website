import { motion } from 'framer-motion';
import { Gamepad2, MessageSquare } from 'lucide-react';
import { Button } from '../ui/Button';
import { fadeInUp, staggerContainer } from '../../styles/animations';

export function Hero() {
  return (
    <motion.div
      variants={staggerContainer}
      className="text-center py-8 md:py-16"
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
        className="mb-6"
      >
        <Gamepad2 className="h-16 w-16 md:h-24 md:w-24 mx-auto text-indigo-600 dark:text-indigo-400" />
      </motion.div>
      
      <motion.h1
        variants={fadeInUp}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Welcome to Lantech Games
      </motion.h1>
      
      <motion.p
        variants={fadeInUp}
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 px-4"
      >
        Your destination for safe, age-appropriate gaming experiences. Join our community
        of developers and players today!
      </motion.p>
      
      <motion.div variants={fadeInUp}>
        <Button
          href="https://discord.gg/nmWJ8eY8zX"
          icon={MessageSquare}
          variant="discord"
        >
          Join Discord
        </Button>
      </motion.div>
    </motion.div>
  );
}