import { motion } from 'motion/react';
import { DollarSign, TrendingUp, Plus } from 'lucide-react';
import { useState } from 'react';

export default function OutlaySection() {
  const [expenses] = useState([
    { name: 'Khushi Agrawal', amount: 956, color: 'from-purple-500 to-pink-500' },
    { name: 'Rashi Rani', amount: 1005, color: 'from-blue-500 to-cyan-500' },
    { name: 'Apoorva', amount: 895, color: 'from-orange-500 to-red-500' },
  ]);

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="space-y-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl p-6 text-white shadow-xl"
      >
        <h2 className="text-2xl mb-2">Expense Tracker</h2>
        <p className="text-green-100 text-sm">Monitor your trip expenses</p>
      </motion.div>

      {/* Total Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-500">
              <DollarSign className="text-white" size={24} />
            </div>
            <span className="text-gray-600 dark:text-gray-400">Total Expenses</span>
          </div>
          <TrendingUp className="text-green-500" size={24} />
        </div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="text-4xl text-gray-800 dark:text-white mb-2"
        >
          ₹{total.toLocaleString()}
        </motion.div>

        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
          />
        </div>
      </motion.div>

      {/* Expense List */}
      <div className="space-y-3">
        {expenses.map((expense, index) => (
          <motion.div
            key={expense.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 + 0.3 }}
            whileHover={{ scale: 1.02, x: 5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${expense.color} flex items-center justify-center text-white shadow-lg`}>
                  {expense.name.charAt(0)}
                </div>
                <div>
                  <p className="text-gray-800 dark:text-white">{expense.name}</p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                    className="text-sm text-gray-500 dark:text-gray-400"
                  >
                    {((expense.amount / total) * 100).toFixed(1)}% of total
                  </motion.p>
                </div>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.15 + 0.6, type: 'spring' }}
                className="text-right"
              >
                <p className="text-xl text-gray-800 dark:text-white">₹{expense.amount}</p>
              </motion.div>
            </div>

            {/* Progress bar for individual */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: index * 0.15 + 0.7, duration: 0.5 }}
              className="mt-3 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden origin-left"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(expense.amount / total) * 100}%` }}
                transition={{ delay: index * 0.15 + 0.9, duration: 0.8 }}
                className={`h-full bg-gradient-to-r ${expense.color}`}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Add Expense Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-4 shadow-lg flex items-center justify-center gap-2"
      >
        <Plus size={20} />
        <span>Add Expense</span>
      </motion.button>
    </div>
  );
}
