import { motion } from 'motion/react';
import { Menu } from 'lucide-react';
import userAvatar from 'figma:asset/c2991ed0fba66c7fe06d9f529eedd685fd5cb288.png';

interface HeaderProps {
  onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md"
    >
      <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto">
        {/* User Avatar */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-full overflow-hidden shadow-lg ring-2 ring-purple-500/50"
        >
          <img
            src={userAvatar}
            alt="User"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* App Title */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Triply
        </motion.h1>

        {/* Hamburger Menu */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onMenuToggle}
          className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
        >
          <Menu size={24} />
        </motion.button>
      </div>

      {/* Gradient line animation */}
      <motion.div
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
      />
    </motion.header>
  );
}
