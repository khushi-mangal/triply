import { motion } from 'motion/react';
import { MapPin, AlertCircle, Split } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

export default function FloatingActionButtons() {
  const buttons = [
    {
      icon: MapPin,
      label: 'Live Location',
      color: 'from-blue-500 to-cyan-500',
      content: {
        title: 'Share Live Location',
        description: 'Share your live location with parents and friends for safety.',
      },
    },
    {
      icon: AlertCircle,
      label: 'SOS',
      color: 'from-red-500 to-rose-500',
      content: {
        title: 'Emergency Services',
        description: 'Show nearest hospital & police stations.',
      },
    },
    {
      icon: Split,
      label: 'Splitwise',
      color: 'from-green-500 to-emerald-500',
      content: {
        title: 'Split Expenses',
        description: 'Easily split expenses between trip members.',
      },
    },
  ];

  return (
    <div className="fixed right-4 bottom-32 z-30 flex flex-col gap-3">
      {buttons.map((button, index) => (
        <Dialog key={button.label}>
          <DialogTrigger asChild>
            <motion.button
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`w-14 h-14 rounded-full bg-gradient-to-r ${button.color} shadow-2xl flex items-center justify-center text-white relative group`}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 rounded-full bg-white/30"
              />
              <button.icon size={24} className="relative z-10" />

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {button.label}
              </motion.div>
            </motion.button>
          </DialogTrigger>

          <DialogContent className="rounded-3xl max-w-sm">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                <div className={`p-2 rounded-full bg-gradient-to-r ${button.color}`}>
                  <button.icon className="text-white" size={24} />
                </div>
                {button.content.title}
              </DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {button.content.description}
              </p>

              {button.label === 'SOS' && (
                <div className="space-y-2">
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-xl">
                    <p className="text-sm text-gray-700 dark:text-gray-300">🏥 City Hospital - 2.3 km</p>
                  </div>
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-xl">
                    <p className="text-sm text-gray-700 dark:text-gray-300">🚓 Police Station - 1.5 km</p>
                  </div>
                </div>
              )}

              {button.label === 'Live Location' && (
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Sharing location with:
                  </p>
                  <div className="flex justify-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                      M
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                      D
                    </div>
                  </div>
                </div>
              )}

              {button.label === 'Splitwise' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Khushi</span>
                    <span className="text-sm text-green-600 dark:text-green-400">₹319</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Rashi Rani</span>
                    <span className="text-sm text-green-600 dark:text-green-400">₹335</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Apoorva</span>
                    <span className="text-sm text-green-600 dark:text-green-400">₹298</span>
                  </div>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full mt-4 py-3 rounded-2xl bg-gradient-to-r ${button.color} text-white shadow-lg`}
              >
                Activate
              </motion.button>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
