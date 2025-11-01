import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Send, Sparkles } from 'lucide-react';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setRating(0);
        setMessage('');
      }, 3000);
    }
  };

  return (
    <div className="px-4 py-6 max-w-md mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl p-6 text-white shadow-xl mb-6"
      >
        <h2 className="text-2xl mb-2">Feedback</h2>
        <p className="text-yellow-100 text-sm">Help us improve Triply</p>
      </motion.div>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl"
            >
              <p className="text-center mb-6 text-gray-600 dark:text-gray-400">
                How would you rate your experience?
              </p>

              <div className="flex justify-center gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.button
                    key={star}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="focus:outline-none"
                  >
                    <motion.div
                      animate={{
                        scale: (hoveredRating || rating) >= star ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <Star
                        size={40}
                        className={`transition-colors ${
                          (hoveredRating || rating) >= star
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    </motion.div>
                  </motion.button>
                ))}
              </div>

              {rating > 0 && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mt-4 text-lg text-gray-700 dark:text-gray-300"
                >
                  {rating === 5 && '🎉 Excellent!'}
                  {rating === 4 && '😊 Great!'}
                  {rating === 3 && '👍 Good'}
                  {rating === 2 && '😐 Okay'}
                  {rating === 1 && '😔 Needs improvement'}
                </motion.p>
              )}
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl"
            >
              <label className="block mb-3 text-gray-700 dark:text-gray-300">
                Tell us more (optional)
              </label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your thoughts, suggestions, or report issues..."
                className="min-h-32 rounded-2xl border-2 border-gray-200 dark:border-gray-700 focus:border-purple-500"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                onClick={handleSubmit}
                disabled={rating === 0}
                className="w-full py-6 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="mr-2" size={20} />
                Submit Feedback
              </Button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-xl text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 0.5,
              }}
              className="inline-block mb-6"
            >
              <Sparkles size={64} className="text-yellow-500" />
            </motion.div>

            <h3 className="text-2xl text-gray-800 dark:text-white mb-2">Thank You!</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your feedback helps us make Triply better for everyone
            </p>

            {/* Confetti effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    x: Math.random() * 300,
                    y: -20,
                    rotate: 0,
                  }}
                  animate={{
                    y: 400,
                    rotate: 360,
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.05,
                  }}
                  className="absolute text-2xl"
                >
                  {['🎉', '⭐', '🎊', '✨'][i % 4]}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
