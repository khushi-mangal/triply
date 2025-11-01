import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import HamburgerMenu from './components/HamburgerMenu';
import MainContent from './components/MainContent';
import BottomNav from './components/BottomNav';
import ContactUs from './components/screens/ContactUs';
import Subscription from './components/screens/Subscription';
import Settings from './components/screens/Settings';
import Feedback from './components/screens/Feedback';
import Profile from './components/screens/Profile';
import Connect from './components/screens/Connect';
import History from './components/screens/History';
import TripDetails from './components/screens/TripDetails';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
    setMenuOpen(false);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <MainContent onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactUs />;
      case 'subscription':
        return <Subscription />;
      case 'settings':
        return <Settings isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
      case 'feedback':
        return <Feedback />;
      case 'profile':
        return <Profile />;
      case 'connect':
        return <Connect />;
      case 'history':
        return <History />;
      case 'tripDetails':
        return <TripDetails onBack={() => setCurrentScreen('home')} />;
      default:
        return <MainContent onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'} transition-colors duration-500`}>
      <AnimatePresence>
        {showSplash && <SplashScreen />}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen pb-20 max-w-md mx-auto"
        >
          <Header onMenuToggle={() => setMenuOpen(!menuOpen)} />
          <HamburgerMenu
            isOpen={menuOpen}
            onClose={handleMenuClose}
            onNavigate={handleNavigate}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />

          {currentScreen !== 'tripDetails' && (
            <main className="pt-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScreen}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderScreen()}
                </motion.div>
              </AnimatePresence>
            </main>
          )}

          {currentScreen === 'tripDetails' && renderScreen()}

          {currentScreen !== 'tripDetails' && (
            <BottomNav currentScreen={currentScreen} onNavigate={handleNavigate} />
          )}
        </motion.div>
      )}
    </div>
  );
}
