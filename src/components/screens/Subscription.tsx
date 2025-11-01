import { motion } from 'motion/react';
import { Check, Zap } from 'lucide-react';

export default function Subscription() {
  const plans = [
    {
      name: '7-Day Trial',
      price: 'Free',
      duration: '7 days',
      features: ['All basic features', 'Up to 3 trips', 'Basic support', '5 group members'],
      color: 'from-blue-500 to-cyan-500',
      popular: false,
    },
    {
      name: 'Monthly',
      price: '₹199',
      duration: 'per month',
      features: ['Unlimited trips', 'Unlimited members', 'Priority support', 'Advanced analytics', 'Offline maps'],
      color: 'from-purple-500 to-pink-500',
      popular: true,
    },
    {
      name: 'Yearly',
      price: '₹1,999',
      duration: 'per year',
      features: ['Everything in Monthly', 'Save 17%', 'Exclusive features', 'Premium support', 'Early access to new features'],
      color: 'from-orange-500 to-red-500',
      popular: false,
    },
  ];

  return (
    <div className="px-4 py-6 max-w-md mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 text-white shadow-xl mb-6"
      >
        <h2 className="text-2xl mb-2">Premium Plans</h2>
        <p className="text-purple-100 text-sm">Unlock the full potential of Triply</p>
      </motion.div>

      {/* Plans */}
      <div className="space-y-4">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative"
          >
            {plan.popular && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.15 + 0.2, type: 'spring' }}
                className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 rounded-full text-xs shadow-lg flex items-center gap-1 z-10"
              >
                <Zap size={12} fill="white" />
                Most Popular
              </motion.div>
            )}

            <div
              className={`bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl ${
                plan.popular ? 'ring-4 ring-purple-500/50' : ''
              }`}
            >
              <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${plan.color} text-white text-sm mb-3`}>
                {plan.name}
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl text-gray-800 dark:text-white">{plan.price}</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">{plan.duration}</span>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 + idx * 0.05 + 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0`}>
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-2xl bg-gradient-to-r ${plan.color} text-white shadow-lg relative overflow-hidden`}
              >
                <motion.div
                  animate={{ x: ['0%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span className="relative">Choose Plan</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400"
      >
        <p>All plans include a 7-day money-back guarantee</p>
      </motion.div>
    </div>
  );
}
