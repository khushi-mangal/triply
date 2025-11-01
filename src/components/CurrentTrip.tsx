import { motion } from 'motion/react';
import { Calendar, Cloud, CloudRain, Sun, CloudSnow, Wind } from 'lucide-react';

interface CurrentTripProps {
  onTripClick: () => void;
}

export default function CurrentTrip({ onTripClick }: CurrentTripProps) {
  // Weather icon based on current conditions
  const weatherIcon = Sun;
  const weatherTemp = '28°C';
  const weatherDesc = 'Sunny';

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 px-2">
        <Calendar size={18} className="text-purple-500" />
        <h3 className="text-gray-700 dark:text-gray-300">Current Trip</h3>
      </div>

      <motion.button
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02, y: -5 }}
        whileTap={{ scale: 0.98 }}
        onClick={onTripClick}
        className="w-full bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden text-left relative"
      >
        {/* Trip Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1595435236218-8ac8bcd84426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3RhJTIwUmFqYXN0aGFuJTIwY2l0eXxlbnwxfHx8fDE3NjE5ODYyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Kota City"
            className="w-full h-full object-cover"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Trip Title */}
          <div className="absolute bottom-4 left-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white text-2xl mb-1"
            >
              Kota → Udaipur
            </motion.h3>
          </div>

          {/* Date Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg"
          >
            <p className="text-sm text-gray-800">📅 1 Nov - 4 Nov</p>
          </motion.div>

          {/* Weather Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center gap-2"
          >
            {weatherIcon === Sun && <Sun size={16} className="text-orange-500" />}
            {weatherIcon === CloudRain && <CloudRain size={16} className="text-blue-500" />}
            {weatherIcon === Cloud && <Cloud size={16} className="text-gray-500" />}
            {weatherIcon === CloudSnow && <CloudSnow size={16} className="text-blue-300" />}
            {weatherIcon === Wind && <Wind size={16} className="text-cyan-500" />}
            <span className="text-sm text-gray-800">{weatherTemp}</span>
          </motion.div>
        </div>

        {/* Trip Details */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">3 Travelers</p>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 ring-2 ring-white dark:ring-gray-800 flex items-center justify-center text-white text-xs">
                  You
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 ring-2 ring-white dark:ring-gray-800 flex items-center justify-center text-white text-xs">
                  RR
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 ring-2 ring-white dark:ring-gray-800 flex items-center justify-center text-white text-xs">
                  AS
                </div>
              </div>
            </div>

            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-purple-500"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.button>
    </div>
  );
}
