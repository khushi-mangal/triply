import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Map, DollarSign, Camera } from 'lucide-react';
import GreetingSection from './GreetingSection';
import CurrentTrip from './CurrentTrip';
import TripSection from './TripSection';
import MapSection from './MapSection';
import OutlaySection from './OutlaySection';
import MemorySection from './MemorySection';

type Section = 'trip' | 'map' | 'outlay' | 'memory';

interface MainContentProps {
  onNavigate?: (screen: string) => void;
}

export default function MainContent({ onNavigate }: MainContentProps) {
  const [activeSection, setActiveSection] = useState<Section>('trip');
  
  const handleTripClick = () => {
    if (onNavigate) {
      onNavigate('tripDetails');
    }
  };

  const sections = [
    { id: 'trip' as Section, icon: MapPin, label: 'Trip' },
    { id: 'map' as Section, icon: Map, label: 'Map' },
    { id: 'outlay' as Section, icon: DollarSign, label: 'Outlay' },
    { id: 'memory' as Section, icon: Camera, label: 'Memory' },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'trip':
        return <TripSection />;
      case 'map':
        return <MapSection />;
      case 'outlay':
        return <OutlaySection />;
      case 'memory':
        return <MemorySection />;
    }
  };

  return (
    <div className="px-4 py-6 max-w-md mx-auto">
      {/* Greeting Section */}
      <GreetingSection />
      
      {/* Current Trip */}
      <div className="mb-6">
        <CurrentTrip onTripClick={handleTripClick} />
      </div>

      {/* Section Selector */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center gap-2 mb-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full p-2 shadow-lg"
      >
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSection(section.id)}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-full transition-all ${
              activeSection === section.id
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            <section.icon size={20} />
            <span className="text-xs">{section.label}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Section Content */}
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {renderSection()}
      </motion.div>
    </div>
  );
}
