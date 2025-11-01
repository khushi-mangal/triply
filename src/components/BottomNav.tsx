import { motion } from 'motion/react';
import { Home, Users, History, User } from 'lucide-react';

interface BottomNavProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export default function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'connect', icon: Users, label: 'Connect' },
    { id: 'history', icon: History, label: 'History' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-40"
    >
      <div className="max-w-md mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-2xl rounded-t-3xl">
        <div className="flex items-center justify-around px-4 py-3">
        {navItems.map((item, index) => {
          const isActive = currentScreen === item.id;
          return (
            <motion.button
              key={item.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.4, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center gap-1 relative"
            >
              <motion.div
                animate={{
                  scale: isActive ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className={`p-3 rounded-2xl transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                <item.icon size={22} />
              </motion.div>

              <motion.span
                animate={{
                  scale: isActive ? 1 : 0.9,
                  opacity: isActive ? 1 : 0.7,
                }}
                className={`text-xs ${
                  isActive
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {item.label}
              </motion.span>

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
        </div>
      </div>
    </motion.nav>
  );
}
