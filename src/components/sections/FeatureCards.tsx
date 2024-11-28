import { Gamepad2, Users, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';

const features = [
  {
    icon: Gamepad2,
    title: 'For Players',
    description: 'Discover games tailored to your age group, ensuring a safe and enjoyable gaming experience.',
  },
  {
    icon: Users,
    title: 'For Developers',
    description: 'Join our platform and share your games with our growing community. Check out our developer tools to get started.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'We prioritize user safety with strict content guidelines and age-appropriate content filtering.',
  },
];

export function FeatureCards() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.3 }
        }
      }}
      className="grid md:grid-cols-3 gap-4 lg:gap-8"
    >
      {features.map((feature) => (
        <motion.div
          key={feature.title}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 100 }
            }
          }}
        >
          <Card {...feature} />
        </motion.div>
      ))}
    </motion.div>
  );
}