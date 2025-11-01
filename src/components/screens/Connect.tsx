import { useState } from 'react';
import { motion } from 'motion/react';
import { UserPlus, Search, Users, Check } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function Connect() {
  const [searchQuery, setSearchQuery] = useState('');
  const [friends] = useState([
    { id: 1, name: 'Khushi Agrawal', username: '@khushi', avatar: 'KA', connected: true, color: 'from-purple-500 to-pink-500' },
    { id: 2, name: 'Rashi Rani', username: '@rashi', avatar: 'RR', connected: true, color: 'from-blue-500 to-cyan-500' },
    { id: 3, name: 'Apoorva Singh', username: '@apoorva', avatar: 'AS', connected: true, color: 'from-green-500 to-emerald-500' },
  ]);

  const [suggestions] = useState([
    { id: 4, name: 'Priya Patel', username: '@priya_travels', avatar: 'PP', connected: false, color: 'from-orange-500 to-red-500' },
    { id: 5, name: 'Neha Gupta', username: '@neha_explorer', avatar: 'NG', connected: false, color: 'from-pink-500 to-rose-500' },
    { id: 6, name: 'Anjali Kumar', username: '@anjali_wanderer', avatar: 'AK', connected: false, color: 'from-indigo-500 to-purple-500' },
  ]);

  return (
    <div className="px-4 py-6 max-w-md mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl p-6 text-white shadow-xl mb-6"
      >
        <h2 className="text-2xl mb-2">Connect</h2>
        <p className="text-blue-100 text-sm">Find and add travel buddies</p>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <Input
            placeholder="Search by name or username..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 py-6 rounded-2xl border-2 border-purple-200 dark:border-purple-800 focus:border-purple-500"
          />
        </div>
      </motion.div>

      {/* My Friends */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <div className="flex items-center gap-2 mb-3 px-2">
          <Users size={20} className="text-gray-600 dark:text-gray-400" />
          <h3 className="text-gray-600 dark:text-gray-400">My Friends</h3>
        </div>

        <div className="space-y-3">
          {friends.map((friend, index) => (
            <motion.div
              key={friend.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg flex items-center gap-4"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${friend.color} flex items-center justify-center text-white shadow-md`}>
                {friend.avatar}
              </div>
              <div className="flex-1">
                <p className="text-gray-800 dark:text-white">{friend.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{friend.username}</p>
              </div>
              <div className="flex items-center gap-2 text-green-500">
                <Check size={20} />
                <span className="text-sm">Connected</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Suggestions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-3 px-2">
          <UserPlus size={20} className="text-gray-600 dark:text-gray-400" />
          <h3 className="text-gray-600 dark:text-gray-400">Suggestions</h3>
        </div>

        <div className="space-y-3">
          {suggestions.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.6 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg flex items-center gap-4"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${person.color} flex items-center justify-center text-white shadow-md`}>
                {person.avatar}
              </div>
              <div className="flex-1">
                <p className="text-gray-800 dark:text-white">{person.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{person.username}</p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl px-4">
                  <UserPlus size={16} />
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-6 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-4 flex justify-around"
      >
        <div className="text-center">
          <p className="text-2xl text-gray-800 dark:text-white">{friends.length}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Friends</p>
        </div>
        <div className="w-px bg-gray-300 dark:bg-gray-600" />
        <div className="text-center">
          <p className="text-2xl text-gray-800 dark:text-white">{suggestions.length}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">Suggestions</p>
        </div>
      </motion.div>
    </div>
  );
}
