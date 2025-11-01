import { motion } from 'motion/react';
import { Bell, Moon, Volume2, Globe, Lock, HelpCircle } from 'lucide-react';
import { Switch } from '../ui/switch';

interface SettingsProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function Settings({ isDarkMode, setIsDarkMode }: SettingsProps) {
  const settingsGroups = [
    {
      title: 'Preferences',
      items: [
        { icon: Bell, label: 'Notifications', description: 'Receive trip updates', toggled: true },
        { icon: Moon, label: 'Dark Mode', description: 'Switch to dark theme', toggled: isDarkMode, action: () => setIsDarkMode(!isDarkMode) },
        { icon: Volume2, label: 'Sound', description: 'App sound effects', toggled: true },
      ],
    },
    {
      title: 'General',
      items: [
        { icon: Globe, label: 'Language', description: 'English (US)', toggled: false },
        { icon: Lock, label: 'Privacy', description: 'Manage your privacy', toggled: false },
        { icon: HelpCircle, label: 'Help & Support', description: 'Get help', toggled: false },
      ],
    },
  ];

  return (
    <div className="px-4 py-6 max-w-md mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl p-6 text-white shadow-xl mb-6"
      >
        <h2 className="text-2xl mb-2">Settings</h2>
        <p className="text-indigo-100 text-sm">Customize your experience</p>
      </motion.div>

      {/* Settings Groups */}
      <div className="space-y-6">
        {settingsGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIndex * 0.1 }}
          >
            <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-3 px-2">{group.title}</h3>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden">
              {group.items.map((item, itemIndex) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: groupIndex * 0.1 + itemIndex * 0.05 }}
                  whileHover={{ backgroundColor: 'rgba(139, 92, 246, 0.05)' }}
                  className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                      <item.icon size={20} className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 dark:text-white">{item.label}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>

                  {item.toggled !== undefined ? (
                    <motion.div whileTap={{ scale: 0.95 }}>
                      <Switch
                        checked={item.toggled}
                        onCheckedChange={item.action}
                        className="data-[state=checked]:bg-purple-600"
                      />
                    </motion.div>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-purple-500 dark:text-purple-400"
                    >
                      →
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* App Version */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center text-sm text-gray-400 dark:text-gray-500"
      >
        <p>Triply v1.0.0</p>
        <p className="text-xs mt-1">Made with ❤️ for travelers</p>
      </motion.div>
    </div>
  );
}
