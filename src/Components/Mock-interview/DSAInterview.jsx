import React, { useState, useEffect, useRef } from 'react';
import { Video, Mic, MicOff, Camera, CameraOff, MessageSquare, Code, Send, Bot, Play, Timer } from 'lucide-react';
import { Button } from "./Button";
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

export const DSAInterview = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [code, setCode] = useState('// Write your solution here\n\nfunction solve(arr) {\n  // Your code here\n}');
  const [output, setOutput] = useState('');
  const [timer, setTimer] = useState(3600); // 60 minutes
  const [isRunning, setIsRunning] = useState(true);
  const videoRef = useRef(null);
  const [feedback, setFeedback] = useState([
    {
      type: 'info',
      message: 'Welcome to your DSA interview! I will be your AI interviewer today.',
      time: new Date().toLocaleTimeString()
    }
  ]);

  // Handle video stream
  useEffect(() => {
    if (isVideoOn) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: isMicOn })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(err => console.error('Error accessing camera:', err));
    }
  }, [isVideoOn, isMicOn]);

  // Timer functionality
  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleRunCode = () => {
    try {
      // Create a safe evaluation environment
      const testCases = [
        { input: [1, 2, 3], expected: 6 },
        { input: [4, 5, 6], expected: 15 }
      ];
      
      let results = [];
      const fn = new Function('return ' + code)();
      
      testCases.forEach((testCase, index) => {
        const result = fn(testCase.input);
        results.push({
          passed: result === testCase.expected,
          input: testCase.input,
          expected: testCase.expected,
          output: result
        });
      });

      setOutput(JSON.stringify(results, null, 2));
      
      // Add AI feedback based on results
      const allPassed = results.every(r => r.passed);
      setFeedback(prev => [...prev, {
        type: allPassed ? 'success' : 'error',
        message: allPassed 
          ? 'Great job! Your solution passes all test cases. Let\'s discuss the time complexity.'
          : 'Some test cases failed. Consider edge cases and review your logic.',
        time: new Date().toLocaleTimeString()
      }]);

    } catch (error) {
      setOutput(`Error: ${error.message}`);
      setFeedback(prev => [...prev, {
        type: 'error',
        message: `There's an error in your code: ${error.message}. Let's debug together.`,
        time: new Date().toLocaleTimeString()
      }]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-xl font-semibold text-[#D4836D]">DSA Interview: Array Manipulation</span>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-600 animate-pulse">Live</span>
              <div className="flex items-center gap-2 px-3 py-1 bg-[#FDF1EE] rounded-full">
                <Timer className="h-4 w-4 text-[#D4836D]" />
                <span className="text-[#D4836D] font-medium">{formatTime(timer)}</span>
              </div>
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
            <div className="bg-gray-900 rounded-lg aspect-video relative overflow-hidden">
              {isVideoOn ? (
                <video 
                  ref={videoRef}
                  className="w-full h-full rounded-lg"
                  autoPlay 
                  muted={!isMicOn}
                  playsInline
                />
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
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Problem: Array Sum Optimization</h2>
              <div className="prose prose-sm">
                <p className="text-gray-600">
                  Given an array of integers, write a function that returns the sum of all elements.
                  The function should handle the following cases:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Empty arrays should return 0</li>
                  <li>Handle both positive and negative integers</li>
                  <li>Consider potential integer overflow</li>
                  <li>Optimize for large arrays</li>
                </ul>
                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-700">Example:</p>
                  <pre className="text-sm text-gray-600">
                    Input: [1, 2, 3]
                    Output: 6
                  </pre>
                </div>
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
                  <span className="text-sm text-gray-200">solution.js</span>
                </div>
                <Button 
                  onClick={handleRunCode}
                  className="bg-[#D4836D] text-white text-sm hover:bg-[#C27561] flex items-center gap-2"
                >
                  <Play className="h-4 w-4" />
                  Run Code
                </Button>
              </div>
              <AceEditor
                mode="javascript"
                theme="monokai"
                value={code}
                onChange={setCode}
                name="code-editor"
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: true,
                  showLineNumbers: true,
                  tabSize: 2,
                }}
                style={{ width: '100%', height: '400px' }}
              />
              {output && (
                <div className="p-4 bg-gray-800 border-t border-gray-700">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Output:</h4>
                  <pre className="text-sm text-gray-400 overflow-auto">{output}</pre>
                </div>
              )}
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
                      <Bot className={`h-5 w-5 ${
                        item.type === 'error' ? 'text-red-500' :
                        item.type === 'success' ? 'text-green-500' :
                        'text-[#D4836D]'
                      } mt-1`} />
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