import { motion } from 'motion/react';
import { ArrowLeft, MapPin, AlertCircle, Split, MessageCircle, Map, FileText, Clock, Navigation } from 'lucide-react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';
import userAvatar from 'figma:asset/c2991ed0fba66c7fe06d9f529eedd685fd5cb288.png';

interface TripDetailsProps {
  onBack: () => void;
}

export default function TripDetails({ onBack }: TripDetailsProps) {
  const [notes, setNotes] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [message, setMessage] = useState('');

  const tripMembers = [
    { name: 'You (Khushi)', avatar: userAvatar, color: 'from-purple-500 to-pink-500', initials: 'K' },
    { name: 'Rashi Rani', avatar: null, color: 'from-blue-500 to-cyan-500', initials: 'RR' },
    { name: 'Apoorva Singh', avatar: null, color: 'from-green-500 to-emerald-500', initials: 'AS' },
  ];

  const locationTimeline = [
    { time: '7:10 PM', location: 'Kota Railway Station', status: 'completed' },
    { time: '11:45 AM', location: 'Udaipur railawy station', status: 'completed' },
    { time: '12:30 PM', location: 'Pratap Nagar', status: 'completed' },
    { time: '1:00 PM', location: 'Celebration mall', status: 'current' },
    { time: '4:00 PM', location: 'Fateh sagar', status: 'upcoming' },
    { time: '6:30 PM', location: 'Lake Pechola', status: 'upcoming' },
  ];

  const chatMessages = [
    { sender: 'Rashi Rani', message: 'Hey! What time are we leaving?', time: '9:30 AM', avatar: 'RR' },
    { sender: 'You', message: 'Around 07:10 PM from Kota station', time: '9:32 AM', avatar: 'K' },
    { sender: 'Apoorva Singh', message: 'Perfect! I\'m already here', time: '9:45 AM', avatar: 'AS' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:bg-gray-900 pb-20">
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-30 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-lg"
      >
        <div className="px-4 py-4 max-w-md mx-auto">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
            >
              <ArrowLeft size={20} />
            </motion.button>
            <div className="flex-1">
              <h1 className="text-xl text-gray-800 dark:text-white">Kota → Udaipur</h1>
              <p className="text-sm text-purple-600 dark:text-purple-400">📅 1 Nov - 4 Nov 2025</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="px-4 py-6 max-w-md mx-auto space-y-4">
        {/* Trip Members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl"
        >
          <h3 className="text-lg text-gray-800 dark:text-white mb-4 flex items-center gap-2">
            <span>👥</span> Trip Members
          </h3>
          <div className="space-y-3">
            {tripMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  {member.avatar ? (
                    <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white`}>
                      {member.initials}
                    </div>
                  )}
                </div>
                <span className="text-gray-800 dark:text-white">{member.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 gap-3"
        >
          {/* Location Sharing */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-6 shadow-xl text-white relative overflow-hidden"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full"
            />
            <MapPin size={32} className="mb-2" />
            <p className="text-sm">Location Sharing</p>
            <p className="text-xs opacity-80 mt-1">With Parents</p>
          </motion.button>

          {/* SOS */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-red-500 to-rose-500 rounded-3xl p-6 shadow-xl text-white relative overflow-hidden"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <AlertCircle size={32} className="mb-2" />
            </motion.div>
            <p className="text-sm">Emergency</p>
            <p className="text-xs opacity-80 mt-1">SOS Alert</p>
          </motion.button>
        </motion.div>

        {/* Splitwise */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden"
        >
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Split size={40} />
              <div className="text-left">
                <p className="text-xl mb-1">Split Expenses</p>
                <p className="text-sm opacity-90">Track and split trip costs</p>
              </div>
            </div>
            <div className="text-2xl">₹2,856</div>
          </div>
        </motion.button>

        {/* Group Chat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden"
        >
          <button
            onClick={() => setShowChat(!showChat)}
            className="w-full p-6 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                <MessageCircle size={24} />
              </div>
              <div className="text-left">
                <p className="text-lg text-gray-800 dark:text-white">Group Chat</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">3 new messages</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: showChat ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </motion.div>
          </button>

          {showChat && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-gray-200 dark:border-gray-700"
            >
              <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex gap-2 ${msg.sender === 'You' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs ${
                      msg.avatar === 'K' ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                      msg.avatar === 'RR' ? 'bg-gradient-to-br from-blue-500 to-cyan-500' :
                      'bg-gradient-to-br from-green-500 to-emerald-500'
                    }`}>
                      {msg.avatar}
                    </div>
                    <div className={`flex-1 max-w-[70%] ${msg.sender === 'You' ? 'text-right' : ''}`}>
                      <div className={`inline-block p-3 rounded-2xl ${
                        msg.sender === 'You'
                          ? 'bg-purple-500 text-white rounded-tr-none'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-tl-none'
                      }`}>
                        <p className="text-sm">{msg.message}</p>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 px-2">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border-none outline-none"
                />
                <button className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Offline Map Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden"
        >
          <button
            onClick={() => setShowMap(!showMap)}
            className="w-full p-6 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white">
                <Map size={24} />
              </div>
              <div className="text-left">
                <p className="text-lg text-gray-800 dark:text-white">Offline Map & Timeline</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Track your journey</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: showMap ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </motion.div>
          </button>

          {showMap && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-gray-200 dark:border-gray-700 p-6"
            >
              <div className="space-y-4">
                {locationTimeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.status === 'completed' ? 'bg-green-500' :
                        item.status === 'current' ? 'bg-purple-500 animate-pulse' :
                        'bg-gray-300 dark:bg-gray-600'
                      }`}>
                        {item.status === 'completed' && (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        )}
                        {item.status === 'current' && <Navigation size={20} className="text-white" />}
                        {item.status === 'upcoming' && <Clock size={20} className="text-gray-500" />}
                      </div>
                      {index < locationTimeline.length - 1 && (
                        <div className={`w-0.5 h-12 ${
                          item.status === 'completed' ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                        }`} />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <p className={`text-sm ${
                        item.status === 'current' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {item.time}
                      </p>
                      <p className={`text-gray-800 dark:text-white ${
                        item.status === 'current' ? 'font-semibold' : ''
                      }`}>
                        {item.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Add Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
              <FileText size={24} />
            </div>
            <h3 className="text-lg text-gray-800 dark:text-white">Trip Notes</h3>
          </div>
          <Textarea
            placeholder="Add notes about your trip, memorable moments, places to visit..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="min-h-32 rounded-2xl border-2 border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-500 resize-none"
          />
          <Button className="w-full mt-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
            Save Notes
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
