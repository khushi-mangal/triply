import { motion } from 'motion/react';
import { Mail, Phone, Calendar, Edit, Camera } from 'lucide-react';
import { Button } from '../ui/button';
import userAvatar from 'figma:asset/c2991ed0fba66c7fe06d9f529eedd685fd5cb288.png';

export default function Profile() {
  const profileData = {
    name: 'Khushi Agrawal',
    username: '@khushi',
    email: 'khushiagrawal260301@gmail.com',
    phone: '+91 8824342371',
    dob: 'August 26, 2007',
    tripsCompleted: 4,
    friendsConnected: 3,
    memoriesShared: 156,
  };

  const stats = [
    { label: 'Trips', value: profileData.tripsCompleted, color: 'from-blue-500 to-cyan-500' },
    { label: 'Friends', value: profileData.friendsConnected, color: 'from-purple-500 to-pink-500' },
    { label: 'Memories', value: profileData.memoriesShared, color: 'from-orange-500 to-red-500' },
  ];

  return (
    <div className="px-4 py-6 max-w-md mx-auto">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-xl mb-6 relative overflow-hidden"
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />

        <div className="relative z-10">
          {/* Avatar */}
          <div className="flex justify-center mb-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/50 shadow-xl">
                <img
                  src={userAvatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-0 right-0 w-8 h-8 bg-white text-purple-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Camera size={16} />
              </motion.button>
            </motion.div>
          </div>

          {/* Name */}
          <h2 className="text-2xl text-center mb-1">{profileData.name}</h2>
          <p className="text-purple-100 text-center text-sm">{profileData.username}</p>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-3 gap-3 mb-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg text-center"
          >
            <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${stat.color} text-white text-xl mb-2`}>
              {stat.value}
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden mb-6"
      >
        <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <h3 className="text-lg">Personal Information</h3>
        </div>

        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="p-4 flex items-center gap-4"
          >
            <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-900/30">
              <Mail size={20} className="text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
              <p className="text-gray-800 dark:text-white">{profileData.email}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="p-4 flex items-center gap-4"
          >
            <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-900/30">
              <Phone size={20} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
              <p className="text-gray-800 dark:text-white">{profileData.phone}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="p-4 flex items-center gap-4"
          >
            <div className="p-2 rounded-xl bg-pink-100 dark:bg-pink-900/30">
              <Calendar size={20} className="text-pink-600 dark:text-pink-400" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 dark:text-gray-400">Date of Birth</p>
              <p className="text-gray-800 dark:text-white">{profileData.dob}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Edit Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button className="w-full py-6 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg">
          <Edit className="mr-2" size={20} />
          Edit Profile
        </Button>
      </motion.div>
    </div>
  );
}
