import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  ChatBubbleBottomCenterTextIcon,
  DocumentTextIcon,
  ChartBarIcon,
  ClockIcon
} from '@heroicons/react/24/solid';
import SpeakingPractice from './components/SpeakingPractice';
import ProgressReport from './components/ProgressReport';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentBand, setBandScore] = useState(5.0);
  const [targetBand, setTargetBand] = useState(7.0);
  const [daysLeft, setDaysLeft] = useState(90);

  const renderPage = () => {
    switch(currentPage) {
      case 'speaking':
        return <SpeakingPractice />;
      case 'progress':
        return <ProgressReport />;
      default:
        return (
          <div className="max-w-2xl mx-auto">
            {/* Header with IELTS Progress */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white rounded-2xl p-6 shadow-lg mb-6"
            >
              {/* ... (rest of the home page content remains the same) ... */}
            </motion.div>

            {/* Main Actions Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentPage('speaking')}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Practice Speaking</h3>
                </div>
                <p className="text-sm text-gray-600">AI-powered conversation practice</p>
              </motion.button>

              {/* ... (rest of the buttons) ... */}
            </div>

            {/* Progress Insights */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white rounded-2xl p-6 shadow-lg mb-6"
            >
              {/* ... (rest of the progress section) ... */}
            </motion.div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="font-medium text-gray-800">Mock Test</h3>
                <p className="text-sm text-gray-600">Full IELTS simulation</p>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentPage('progress')}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="font-medium text-gray-800">Progress Report</h3>
                <p className="text-sm text-gray-600">Detailed analysis</p>
              </motion.button>
            </div>
          </div>
        );
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      {renderPage()}
    </div>
  );
}

export default App;