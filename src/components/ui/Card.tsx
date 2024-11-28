import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-md transform transition-all hover:shadow-xl"
    >
      <Icon className="h-12 w-12 text-indigo-600 mb-4" />
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}