import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Trophy, Rocket, GraduationCap, Code, FileCode } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#D4836D]">Code 4U</span>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-[#FDF1EE] text-[#D4836D]">BETA</span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/mock-interview" className="text-gray-600 hover:text-gray-900">
                Mock Interview
              </Link>
              <Link to="/dsa-practice" className="text-gray-600 hover:text-gray-900">
                DSA Practice
              </Link>
              <Link to="/explore" className="text-gray-600 hover:text-gray-900">
                Explore
              </Link>
              <Link 
                to="/get-started" 
                className="px-4 py-2 rounded-full bg-[#D4836D] text-white hover:bg-[#C27561] transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Learn with <span className="text-[#D4836D]">Emotional</span> Intelligence
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            The world's first learning platform that adapts to your emotional state and provides personalized career pathways
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/explore" 
              className="px-6 py-3 rounded-full bg-[#D4836D] text-white hover:bg-[#C27561] transition-colors text-lg font-medium"
            >
              Explore Platform
            </Link>
            <Link 
              to="/mock-interview" 
              className="px-6 py-3 rounded-full bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 transition-colors text-lg font-medium"
            >
              Try Mock Interview
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {/* Emotional Intelligence */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#FDF1EE] rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-[#D4836D]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Emotional Intelligence
            </h3>
            <p className="text-gray-600">
              Our AI analyzes your emotional state to provide the optimal learning experience
            </p>
          </div>

          {/* DSA Practice */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#FDF1EE] rounded-lg flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-[#D4836D]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              DSA Practice
            </h3>
            <p className="text-gray-600">
              Master data structures and algorithms with interactive coding challenges
            </p>
          </div>

          {/* Gamified Learning */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#FDF1EE] rounded-lg flex items-center justify-center mb-4">
              <Trophy className="h-6 w-6 text-[#D4836D]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Gamified Learning
            </h3>
            <p className="text-gray-600">
              Earn achievements and track progress through interactive challenges
            </p>
          </div>

          {/* Career Pathways */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#FDF1EE] rounded-lg flex items-center justify-center mb-4">
              <Rocket className="h-6 w-6 text-[#D4836D]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Career Pathways
            </h3>
            <p className="text-gray-600">
              Customized learning paths aligned with in-demand career opportunities
            </p>
          </div>

          {/* Mock Interviews */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#FDF1EE] rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="h-6 w-6 text-[#D4836D]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Mock Interviews
            </h3>
            <p className="text-gray-600">
              Practice real-world scenarios with emotional feedback for improvement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;