import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MicrophoneIcon, 
  ArrowPathIcon,
  ArrowLeftIcon,
  ClockIcon,
  StarIcon,
  LightBulbIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/solid';

export default function SpeakingPractice() {
  const [isRecording, setIsRecording] = useState(false);
  const [currentPart, setCurrentPart] = useState(2);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes for Part 2
  const [streakCount, setStreakCount] = useState(3);
  
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between mb-6"
      >
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-white/50 rounded-lg">
            <ArrowLeftIcon className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Speaking Practice</h1>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <span className="font-medium text-gray-700">{streakCount} day streak</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Panel - Task Info */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="col-span-1 space-y-4"
        >
          {/* Task Type */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-800">Part {currentPart}</h2>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {timeLeft}s
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Describe a place you like to visit in your free time. You should say:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>• where it is</li>
              <li>• what you do there</li>
              <li>• who you go there with</li>
              <li>• why you like going there</li>
            </ul>
          </div>

          {/* Tips */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-2 mb-4">
              <LightBulbIcon className="w-5 h-5 text-yellow-500" />
              <h2 className="font-semibold text-gray-800">Quick Tips</h2>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Use past tense for experiences</li>
              <li>• Include specific details</li>
              <li>• Express your feelings</li>
            </ul>
          </div>
        </motion.div>

        {/* Center Panel - Practice Area */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="col-span-2 bg-white rounded-2xl p-6 shadow-lg"
        >
          {/* AI Chat Interface */}
          <div className="h-[400px] overflow-y-auto mb-6 space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-50 rounded-lg p-4 flex-1 max-w-md">
                <p className="text-gray-800">Could you tell me about this place you like to visit?</p>
              </div>
            </div>
            {isRecording && (
              <div className="flex items-center justify-center py-4">
                <div className="animate-pulse flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full animation-delay-200"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full animation-delay-400"></div>
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsRecording(!isRecording)}
              className={`p-4 rounded-full ${
                isRecording ? 'bg-red-500' : 'bg-blue-500'
              } text-white shadow-lg flex items-center justify-center`}
            >
              <MicrophoneIcon className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full bg-gray-100 text-gray-600 shadow-md"
            >
              <ArrowPathIcon className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mt-6 bg-white rounded-2xl p-6 shadow-lg"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-800">Today's Progress</h2>
          <span className="text-sm text-gray-600">3/5 tasks completed</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
        </div>
      </motion.div>
    </div>
  );
}