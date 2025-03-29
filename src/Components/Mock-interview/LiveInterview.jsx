import React, { useState } from 'react';
import { Video, Mic, MicOff, Camera, CameraOff, MessageSquare, Code, Send, Bot } from 'lucide-react';
import { Button } from "./Button";

export const LiveInterview = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [code, setCode] = useState('// Write your code here');
  const [feedback, setFeedback] = useState([
    {
      type: 'info',
      message: 'Welcome to your live interview! I will be your AI interviewer today.',
      time: '10:00 AM'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-[#D4836D]">Live Frontend Interview</span>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-600 animate-pulse">Live</span>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => setIsVideoOn(!isVideoOn)}
                className={`p-2 rounded-full ${isVideoOn ? 'bg-[#FDF1EE] text-[#D4836D]' : 'bg-gray-100 text-gray-500'}`}
              >
                {isVideoOn ? <Camera size={20} /> : <CameraOff size={20} />}
              </Button>
              <Button 
                onClick={() => setIsMicOn(!isMicOn)}
                className={`p-2 rounded-full ${isMicOn ? 'bg-[#FDF1EE] text-[#D4836D]' : 'bg-gray-100 text-gray-500'}`}
              >
                {isMicOn ? <Mic size={20} /> : <MicOff size={20} />}
              </Button>
              <Button className="bg-red-500 text-white hover:bg-red-600">End Interview</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column - Video and Problem */}
          <div className="space-y-6">
            {/* Video Feed */}
            <div className="bg-gray-900 rounded-lg aspect-video relative">
              {isVideoOn ? (
                <video className="w-full h-full rounded-lg" autoPlay muted playsInline />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white">Camera Off</span>
                </div>
              )}
              <div className="absolute bottom-4 right-4 bg-[#D4836D] p-2 rounded-lg">
                <Bot className="h-5 w-5 text-white" />
              </div>
            </div>

            {/* Problem Description */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Problem: React Component Optimization</h2>
              <div className="prose prose-sm">
                <p className="text-gray-600">
                  Create a React component that efficiently renders a large list of items with virtualization. 
                  The component should:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Handle thousands of items without performance issues</li>
                  <li>Only render items that are in the viewport</li>
                  <li>Support smooth scrolling</li>
                  <li>Include proper TypeScript types</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Code Editor and Feedback */}
          <div className="space-y-6">
            {/* Code Editor */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Code className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-200">solution.tsx</span>
                </div>
                <Button className="bg-[#D4836D] text-white text-sm hover:bg-[#C27561]">Run Code</Button>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-[400px] p-4 font-mono text-sm bg-gray-900 text-gray-100 focus:outline-none"
                spellCheck="false"
              />
            </div>

            {/* AI Feedback */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="bg-[#FDF1EE] px-4 py-2 flex items-center gap-2 border-b border-gray-100">
                <MessageSquare className="h-4 w-4 text-[#D4836D]" />
                <span className="text-sm font-medium text-gray-900">AI Feedback</span>
              </div>
              <div className="h-[200px] overflow-y-auto p-4">
                <div className="space-y-4">
                  {feedback.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Bot className="h-5 w-5 text-[#D4836D] mt-1" />
                      <div>
                        <p className="text-sm text-gray-600">{item.message}</p>
                        <span className="text-xs text-gray-400">{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-gray-100 p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask for clarification..."
                    className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4836D] focus:border-transparent"
                  />
                  <Button className="bg-[#D4836D] text-white hover:bg-[#C27561]">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}; 