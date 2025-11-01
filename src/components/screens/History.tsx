import { motion } from 'motion/react';
import { MapPin, Calendar, Users, DollarSign, ChevronRight } from 'lucide-react';

export default function History() {
  const trips = [
    {
      id: 1,
      from: 'Kota',
      to: 'Sawai Madhopur',
      date: 'Oct 15-18, 2025',
      members: 3,
      expense: 2856,
      status: 'completed',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      from: 'Delhi',
      to: 'Manali',
      date: 'Sep 5-10, 2025',
      members: 5,
      expense: 15420,
      status: 'completed',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      from: 'Mumbai',
      to: 'Goa',
      date: 'Aug 20-25, 2025',
      members: 4,
      expense: 12300,
      status: 'completed',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 4,
      from: 'Bangalore',
      to: 'Ooty',
      date: 'Jul 12-15, 2025',
      members: 3,
      expense: 8500,
      status: 'completed',
      color: 'from-green-500 to-emerald-500',
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
        <h2 className="text-2xl mb-2">Trip History</h2>
        <p className="text-indigo-100 text-sm">Your adventure timeline</p>
      </motion.div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-3 gap-3 mb-6"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg text-center">
          <p className="text-2xl text-gray-800 dark:text-white">{trips.length}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Total Trips</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg text-center">
          <p className="text-2xl text-gray-800 dark:text-white">15</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Travel Days</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg text-center">
          <p className="text-2xl text-gray-800 dark:text-white">₹39K</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Total Spent</p>
        </div>
      </motion.div>

      {/* Trip List */}
      <div className="space-y-4">
        {trips.map((trip, index) => (
          <motion.div
            key={trip.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden cursor-pointer"
          >
            {/* Header with gradient */}
            <div className={`bg-gradient-to-r ${trip.color} p-4 text-white`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MapPin size={20} />
                  <span className="text-lg">{trip.from}</span>
                </div>
                <ChevronRight size={20} />
                <div className="flex items-center gap-2">
                  <span className="text-lg">{trip.to}</span>
                  <MapPin size={20} />
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-90">
                <Calendar size={14} />
                <span>{trip.date}</span>
              </div>
            </div>

            {/* Details */}
            <div className="p-4 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-900/30">
                  <Users size={20} className="text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Members</p>
                  <p className="text-gray-800 dark:text-white">{trip.members}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-green-100 dark:bg-green-900/30">
                  <DollarSign size={20} className="text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Expense</p>
                  <p className="text-gray-800 dark:text-white">₹{trip.expense.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="px-4 pb-4">
              <div className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs">
                ✓ {trip.status}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Timeline visualization */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            More adventures await...
          </span>
        </div>
      </motion.div>
    </div>
  );
}
