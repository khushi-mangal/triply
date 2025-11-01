import { motion } from 'motion/react';
import { Plane, MapPin, Compass, Camera } from 'lucide-react';

export default function SplashScreen() {
  const floatingIcons = [
    { Icon: Plane, delay: 0, x: -100, y: -50 },
    { Icon: MapPin, delay: 0.2, x: 100, y: -30 },
    { Icon: Compass, delay: 0.4, x: -80, y: 60 },
    { Icon: Camera, delay: 0.6, x: 90, y: 50 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden"
    >
      {/* Floating particles */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0.6, 0],
            scale: [0, 1, 1, 0.8],
            x: [0, x, x],
            y: [0, y, y + 20],
          }}
          transition={{
            duration: 3,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute text-white/30"
        >
          <Icon size={40} />
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center z-10"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="text-7xl text-white mb-4 tracking-tight"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Triply
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-xl text-white/90"
        >
          Make your trip
        </motion.p>

        {/* Glowing effect */}
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
          className="absolute inset-0 bg-white/10 rounded-full blur-3xl -z-10"
        />
      </motion.div>
    </motion.div>
  );
}
