import { motion } from 'motion/react';
import { Plus, Image as ImageIcon, Video } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function MemorySection() {
  const memories = [
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1761472084994-61d80b8f4053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBmcmllbmRzfGVufDF8fHx8MTc2MTk4MTU1NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1647291718042-676c0428fc25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHRyYXZlbHxlbnwxfHx8fDE3NjE4Nzc5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1704663135042-fd1f687fa0e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMHZhY2F0aW9ufGVufDF8fHx8MTc2MTk0ODY2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    { type: 'video' },
    { type: 'video' },
    { type: 'video' },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl p-6 text-white shadow-xl"
      >
        <h2 className="text-2xl mb-2">Trip Memories</h2>
        <p className="text-pink-100 text-sm">Capture and share your best moments</p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-3">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className="aspect-square rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer"
          >
            {memory.type === 'image' ? (
              <>
                <ImageWithFallback
                  src={memory.url}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                  <ImageIcon size={16} className="text-white" />
                </div>
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900/30 dark:to-pink-900/30 flex flex-col items-center justify-center">
                <Video size={32} className="text-purple-500 dark:text-purple-400 mb-2" />
                <span className="text-xs text-gray-600 dark:text-gray-400">Video</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Add Button */}
      <motion.button
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed right-6 bottom-28 w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-2xl flex items-center justify-center z-30"
      >
        <Plus size={28} />
      </motion.button>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg flex justify-around"
      >
        <div className="text-center">
          <p className="text-2xl text-gray-800 dark:text-white">3</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Photos</p>
        </div>
        <div className="w-px bg-gray-200 dark:bg-gray-700" />
        <div className="text-center">
          <p className="text-2xl text-gray-800 dark:text-white">3</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Videos</p>
        </div>
        <div className="w-px bg-gray-200 dark:bg-gray-700" />
        <div className="text-center">
          <p className="text-2xl text-gray-800 dark:text-white">6</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Total</p>
        </div>
      </motion.div>
    </div>
  );
}
