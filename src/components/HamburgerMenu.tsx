import { motion, AnimatePresence } from 'motion/react';
import { X, Moon, MessageCircle, CreditCard, Settings, Star, Sun } from 'lucide-react';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (screen: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function HamburgerMenu({
  isOpen,
  onClose,
  onNavigate,
  isDarkMode,
  setIsDarkMode,
}: HamburgerMenuProps) {
  const menuItems = [
    {
      icon: isDarkMode ? Sun : Moon,
      label: 'Dark Mode',
      action: () => setIsDarkMode(!isDarkMode),
      isToggle: true,
    },
    {
      icon: MessageCircle,
      label: 'Contact Us',
      action: () => onNavigate('contact'),
    },
    {
      icon: CreditCard,
      label: 'Subscription',
      action: () => onNavigate('subscription'),
    },
    {
      icon: Settings,
      label: 'Settings',
      action: () => onNavigate('settings'),
    },
    {
      icon: Star,
      label: 'Feedback',
      action: () => onNavigate('feedback'),
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Close button */}
              <div className="flex justify-end mb-8">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Menu Items */}
              <div className="space-y-3">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={item.action}
                    className="w-full flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 hover:shadow-lg transition-shadow"
                  >
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md"
                    >
                      <item.icon
                        size={24}
                        className="text-purple-600 dark:text-purple-400"
                      />
                    </motion.div>
                    <span className="text-gray-800 dark:text-gray-200">
                      {item.label}
                    </span>
                    {item.isToggle && (
                      <div className="ml-auto">
                        <div
                          className={`w-12 h-6 rounded-full transition-colors ${
                            isDarkMode ? 'bg-purple-600' : 'bg-gray-300'
                          }`}
                        >
                          <motion.div
                            animate={{ x: isDarkMode ? 24 : 0 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            className="w-6 h-6 bg-white rounded-full shadow-md"
                          />
                        </div>
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Decorative gradient */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
