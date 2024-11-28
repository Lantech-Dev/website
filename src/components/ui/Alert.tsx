import { motion } from 'framer-motion';

interface AlertProps {
  variant: 'warning' | 'info';
  children: React.ReactNode;
}

export function Alert({ variant, children }: AlertProps) {
  const variants = {
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700',
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`${variants[variant]} border-l-4 p-4 mb-8`}
    >
      {children}
    </motion.div>
  );
}