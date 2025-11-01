import { useState } from 'react';
import { motion } from 'motion/react';
import { Download, MapIcon, Image } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';

export default function MapSection() {
  const [activeTab, setActiveTab] = useState('map');

  const handleDownload = () => {
    alert('Map downloaded successfully!');
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-6 text-white shadow-xl"
      >
        <h2 className="text-2xl mb-2">Route Maps</h2>
        <p className="text-blue-100 text-sm">View and download your travel route</p>
      </motion.div>

      {/* Download Button */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          onClick={handleDownload}
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-2xl py-6 shadow-lg"
        >
          <Download className="mr-2" size={20} />
          Download Map
        </Button>
      </motion.div>

      {/* Map Tabs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl"
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4 bg-gray-100 dark:bg-gray-700 rounded-2xl p-1">
            <TabsTrigger
              value="map"
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
            >
              <MapIcon className="mr-2" size={16} />
              Map View
            </TabsTrigger>
            <TabsTrigger
              value="2d"
              className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
            >
              <Image className="mr-2" size={16} />
              2D Map
            </TabsTrigger>
          </TabsList>

          <TabsContent value="map">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl overflow-hidden relative"
            >
              {/* Simulated map */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <MapIcon size={48} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Interactive Map View</p>
                  <p className="text-xs mt-1">Kota → Sawai Madhopur</p>
                </div>
              </div>
              {/* Animated route line */}
              <motion.div
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0"
              >
                <svg className="w-full h-full">
                  <motion.path
                    d="M 50 150 Q 150 100 250 150"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="10 5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="2d">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl overflow-hidden relative p-4"
            >
              {/* Cartoon 2D Map */}
              <div className="relative h-full flex flex-col justify-between">
                {/* Start point */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-2"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white shadow-lg">
                    A
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Kota</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Starting Point</p>
                  </div>
                </motion.div>

                {/* Route visualization */}
                <div className="flex-1 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-4xl"
                  >
                    🚗
                  </motion.div>
                </div>

                {/* End point */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white shadow-lg">
                    B
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Sawai Madhopur</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Destination</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
