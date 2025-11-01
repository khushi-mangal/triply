import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Users, ArrowRight } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export default function TripSection() {
  const [showForm, setShowForm] = useState(false);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [members, setMembers] = useState<Array<{ name: string; phone: string }>>([]);
  const [memberName, setMemberName] = useState('');
  const [memberPhone, setMemberPhone] = useState('');

  const handleAddMember = () => {
    if (memberName && memberPhone) {
      setMembers([...members, { name: memberName, phone: memberPhone }]);
      setMemberName('');
      setMemberPhone('');
    }
  };

  const handleCreateTrip = () => {
    if (from && to) {
      alert(`Trip created: ${from} → ${to} with ${members.length} members!`);
      setShowForm(false);
      setFrom('');
      setTo('');
      setMembers([]);
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 text-white shadow-xl"
      >
        <h2 className="text-2xl mb-2">Plan Your Trip</h2>
        <p className="text-purple-100 text-sm">Create a new adventure with your friends</p>
      </motion.div>

      {/* Create Trip Button */}
      {!showForm && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowForm(true)}
          className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-dashed border-purple-300 dark:border-purple-700 hover:border-purple-500 transition-colors"
        >
          <div className="flex items-center justify-center gap-3 text-purple-600 dark:text-purple-400">
            <Plus size={24} />
            <span>Create New Trip</span>
          </div>
        </motion.button>
      )}

      {/* Trip Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl space-y-4"
        >
          {/* From and To */}
          <div className="space-y-3">
            <div className="relative">
              <Input
                placeholder="From (e.g., Kota)"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="pl-4 pr-4 py-6 rounded-2xl border-2 border-purple-200 dark:border-purple-800 focus:border-purple-500"
              />
            </div>

            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-purple-500"
              >
                <ArrowRight size={24} className="rotate-90" />
              </motion.div>
            </div>

            <div className="relative">
              <Input
                placeholder="To (e.g., Sawai Madhopur)"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="pl-4 pr-4 py-6 rounded-2xl border-2 border-purple-200 dark:border-purple-800 focus:border-purple-500"
              />
            </div>
          </div>

          {/* Members Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Users size={20} />
              <span>Add Group Members</span>
            </div>

            <div className="space-y-2">
              <Input
                placeholder="Member Name"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
                className="rounded-xl"
              />
              <Input
                placeholder="Phone Number"
                value={memberPhone}
                onChange={(e) => setMemberPhone(e.target.value)}
                className="rounded-xl"
              />
              <Button
                onClick={handleAddMember}
                className="w-full bg-purple-500 hover:bg-purple-600 rounded-xl"
              >
                Add Member
              </Button>
            </div>

            {/* Members List */}
            {members.length > 0 && (
              <div className="space-y-2 mt-3">
                {members.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm">
                      {member.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 dark:text-gray-200">{member.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{member.phone}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Create Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCreateTrip}
            disabled={!from || !to}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
          >
            <motion.div
              animate={{ x: ['0%', '100%'] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
            <span className="relative">Create Trip</span>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
