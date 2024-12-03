import React from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  language: string;
  children: string;
}

export function CodeBlock({ language, children }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group rounded-lg overflow-hidden my-4"
    >
      <div className="absolute right-2 top-2">
        <button
          onClick={handleCopy}
          className="p-2 rounded bg-gray-800/50 hover:bg-gray-800/75 text-gray-400 hover:text-white transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <div className="bg-gray-900 px-4 py-2 text-gray-400 text-sm border-b border-gray-800">
        {language}
      </div>
      <pre className="bg-gray-900 p-4 overflow-x-auto">
        <code className="text-gray-300 text-sm">{children}</code>
      </pre>
    </motion.div>
  );
}