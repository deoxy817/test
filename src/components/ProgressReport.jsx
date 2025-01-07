import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon,
  ArrowUpIcon,
  ClockIcon,
  BookOpenIcon
} from '@heroicons/react/24/solid';

export default function ProgressReport() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Overall Progress */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl p-6 shadow-lg mb-6"
        >
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Progress Report</h1>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-green-900">Band Score Growth</h3>
                <ArrowUpIcon className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-green-700">+0.5</p>
              <p className="text-sm text-green-600">Last 30 days</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-blue-900">Study Streak</h3>
                <ClockIcon className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-blue-700">15 days</p>
              <p className="text-sm text-blue-600">2 hrs/day avg.</p>
            </div>
          </div>
        </motion.div>

        {/* Detailed Analysis */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl p-6 shadow-lg mb-6"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Skill Analysis</h2>
          
          <div className="space-y-6">
            {[
              { skill: 'Speaking', score: 6.0, improvement: 'Fluency', weakness: 'Grammar' },
              { skill: 'Writing', score: 5.5, improvement: 'Vocabulary', weakness: 'Structure' },
              { skill: 'Reading', score: 6.5, improvement: 'Speed', weakness: 'Detail questions' },
              { skill: 'Listening', score: 6.0, improvement: 'Note-taking', weakness: 'Accent recognition' }
            ].map((item) => (
              <div key={item.skill} className="border-b border-gray-100 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-800">{item.skill}</h3>
                  <span className="text-lg font-semibold text-indigo-600">{item.score}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-green-600">
                    ✓ Improved: {item.improvement}
                  </div>
                  <div className="text-orange-600">
                    ! Focus on: {item.weakness}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Personalized Recommendations</h2>
          
          <div className="space-y-4">
            <div className="bg-indigo-50 p-4 rounded-xl">
              <div className="flex items-center space-x-3">
                <BookOpenIcon className="w-5 h-5 text-indigo-600" />
                <div>
                  <h3 className="font-medium text-indigo-900">Focus on Task 2 Writing</h3>
                  <p className="text-sm text-indigo-700">Practice essay structure and topic development</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl">
              <div className="flex items-center space-x-3">
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-purple-600" />
                <div>
                  <h3 className="font-medium text-purple-900">Speaking Practice</h3>
                  <p className="text-sm text-purple-700">Schedule 3 AI conversation sessions this week</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}