import { motion } from 'motion/react';
import { Bell } from 'lucide-react';

export default function GreetingSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl mb-6 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full blur-2xl" />

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-800 dark:text-white mb-1"
          >
            HI, KHUSHI 👋
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400"
          >
            ready for your next adventure?
          </motion.p>
        </div>

        {/* Bell Icon */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg"
        >
          <Bell size={20} />
          {/* Notification dot */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"
          />
        </motion.button>
      </div>
    </motion.div>
  );
}
