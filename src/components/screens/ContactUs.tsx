import { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

export default function ContactUs() {
  const [messages, setMessages] = useState([
    { type: 'received', text: 'Hi! How can we help you today?', time: '10:30 AM' },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([
        ...messages,
        { type: 'sent', text: inputText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
      ]);
      setInputText('');

      // Simulate response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: 'received', text: 'Thanks for reaching out! Our team will get back to you shortly.', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="px-4 py-6 max-w-md mx-auto min-h-screen flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl p-6 text-white shadow-xl mb-4"
      >
        <h2 className="text-2xl mb-2">Contact Us</h2>
        <p className="text-blue-100 text-sm">We're here to help!</p>
      </motion.div>

      {/* Chat Area */}
      <div className="flex-1 space-y-3 mb-4 overflow-y-auto">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: message.type === 'sent' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] p-4 rounded-2xl shadow-lg ${
                message.type === 'sent'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-none'
                  : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-bl-none'
              }`}
            >
              <p className="text-sm mb-1">{message.text}</p>
              <p
                className={`text-xs ${
                  message.type === 'sent' ? 'text-purple-100' : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {message.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex gap-2"
      >
        <Input
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 rounded-2xl border-2 border-purple-200 dark:border-purple-800 focus:border-purple-500"
        />
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={handleSend}
            className="h-full px-6 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            <Send size={20} />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
