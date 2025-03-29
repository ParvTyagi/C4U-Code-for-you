import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Code, Rocket, GraduationCap } from 'lucide-react';

const GetStarted = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    interests: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Welcome to Code 4U</h2>
            <p className="text-gray-600">Let's personalize your learning experience</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4836D]"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4836D]"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Experience Level</h2>
            <p className="text-gray-600">This helps us tailor the content to your needs</p>
            <div className="space-y-3">
              {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                <button
                  key={level}
                  onClick={() => setFormData(prev => ({ ...prev, experience: level }))}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    formData.experience === level
                      ? 'border-[#D4836D] bg-[#FDF1EE] text-[#D4836D]'
                      : 'border-gray-200 hover:border-[#D4836D] hover:bg-[#FDF1EE]'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Choose Your Interests</h2>
            <p className="text-gray-600">Select the areas you want to focus on</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'DSA Practice', icon: Code },
                { name: 'Mock Interviews', icon: Brain },
                { name: 'Career Growth', icon: Rocket },
                { name: 'Learning Paths', icon: GraduationCap }
              ].map(({ name, icon: Icon }) => (
                <button
                  key={name}
                  onClick={() => handleInterestToggle(name)}
                  className={`p-4 rounded-lg border flex flex-col items-center gap-2 ${
                    formData.interests.includes(name)
                      ? 'border-[#D4836D] bg-[#FDF1EE] text-[#D4836D]'
                      : 'border-gray-200 hover:border-[#D4836D] hover:bg-[#FDF1EE]'
                  }`}
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-sm font-medium">{name}</span>
                </button>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#D4836D]">Code 4U</span>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-[#FDF1EE] text-[#D4836D]">BETA</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          {renderStep()}
          
          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="text-gray-600 hover:text-gray-900"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="ml-auto flex items-center gap-2 px-6 py-2 bg-[#D4836D] text-white rounded-full hover:bg-[#C27561]"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <Link
                to="/home"
                className="ml-auto flex items-center gap-2 px-6 py-2 bg-[#D4836D] text-white rounded-full hover:bg-[#C27561]"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === step ? 'bg-[#D4836D]' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default GetStarted; 