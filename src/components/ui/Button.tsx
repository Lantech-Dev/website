import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  href: string;
  icon?: LucideIcon;
  variant?: 'primary' | 'discord';
  children: React.ReactNode;
  className?: string;
}

export function Button({ 
  href, 
  icon: Icon, 
  variant = 'primary', 
  children,
  className = ''
}: ButtonProps) {
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700',
    discord: 'bg-[#5865F2] hover:bg-[#4752C4]',
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center space-x-2 ${variants[variant]} text-white px-8 py-3 rounded-lg transition-colors shadow-lg ${className}`}
    >
      {Icon && <Icon className="h-5 w-5" />}
      <span className="font-semibold">{children}</span>
    </motion.a>
  );
}