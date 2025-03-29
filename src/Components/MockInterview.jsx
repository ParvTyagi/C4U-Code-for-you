import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Import components
import { Button } from "./Mock-interview/Button";
import { IconButton } from "./Mock-interview/IconButton";
import { Card, CardHeader, CardContent } from "./Mock-interview/Card";
import { Badge } from "./Mock-interview/Badge";

const mockQuestions = [
  {
    id: 1,
    type: "javascript",
    question: "What is your background in software development?",
    difficulty: "easy",
    timeLimit: 15
  },
  {
    id: 2,
    type: "javascript",
    question: "Tell me about a challenging project you worked on.",
    difficulty: "medium",
    timeLimit: 20
  },
  {
    id: 3,
    type: "javascript",
    question: "How do you handle technical disagreements in a team?",
    difficulty: "medium",
    timeLimit: 15
  }
];

const mockFeedback = {
  strengths: [
    "Clear communication skills",
    "Good problem-solving approach",
    "Professional demeanor"
  ],
  improvements: [
    "Could provide more specific examples",
    "Consider elaborating on technical details",
    "Practice more concise responses"
  ],
  rating: 4.5
};

export default function MockInterview() {
  const [selectedQuestionId, setSelectedQuestionId] = useState(1);
  const [isInterviewActive, setIsInterviewActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(30 * 60);
  const [isPaused, setIsPaused] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const timerRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [isEnded, setIsEnded] = useState(false);

  // Get selected question object
  const selectedQuestion = mockQuestions.find(q => q.id === selectedQuestionId);

  useEffect(() => {
    if (selectedQuestion) {
      setTimeRemaining(selectedQuestion.timeLimit * 60);
    }
  }, [selectedQuestion]);

  // Format time in MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Initialize video when component mounts
  useEffect(() => {
    if (videoEnabled) {
      initializeVideo();
    }
    return () => {
      stopVideo();
    };
  }, []);

  const initializeVideo = async () => {
    try {
      // Stop any existing streams first
      stopVideo();

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: 1280,
          height: 720,
          facingMode: 'user',
          frameRate: 30
        },
        audio: false
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setVideoEnabled(true);
      }
    } catch (error) {
      console.error('Camera access error:', error);
      alert('Could not access camera. Please check browser permissions and make sure no other app is using your camera.');
      setVideoEnabled(false);
    }
  };

  const stopVideo = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => {
        track.stop();
      });
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  // Start the interview timer
  const startInterview = async () => {
    try {
      if (videoEnabled) {
        await initializeVideo();
      }
      
      setIsInterviewActive(true);
      
      timerRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error) {
      console.error('Error starting interview:', error);
      setIsInterviewActive(true);
    }
  };

  // Toggle pause/resume timer
  const togglePause = () => {
    if (isPaused) {
      timerRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    setIsPaused(!isPaused);
  };

  // Toggle video on/off
  const toggleVideo = async () => {
    try {
      if (!videoEnabled) {
        await initializeVideo();
      } else {
        stopVideo();
        setVideoEnabled(false);
      }
    } catch (error) {
      console.error('Error toggling video:', error);
      alert('Could not toggle video. Please refresh the page and try again.');
    }
  };

  // Restart the interview
  const restartInterview = () => {
    clearInterval(timerRef.current);
    setTimeRemaining(selectedQuestion.timeLimit * 60);
    setIsPaused(false);
    stopVideo();
    setIsInterviewActive(false);
  };

  // End the interview
  const endInterview = () => {
    clearInterval(timerRef.current);
    stopVideo();
    setIsEnded(true);
  };

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
      stopVideo();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-[#D4836D]">Code4U</span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-[#FDF1EE] text-[#D4836D]">Interview</span>
            </div>
            <nav className="flex space-x-4 items-center">
              <Link to="/">Home</Link>
              <Link to="/home">Dashboard</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back button and title */}
          <div className="flex items-center mb-6">
            <Link to="/home">
              <div className="text-[#D4836D] hover:text-[#C27561] flex items-center cursor-pointer">
                ← Back to Dashboard
              </div>
            </Link>
            <h1 className="text-3xl font-bold ml-4">Mock Interview</h1>
            {isInterviewActive && !isEnded && (
              <Button 
                onClick={endInterview}
                className="ml-auto bg-red-500 text-white hover:bg-red-600 px-4 py-2"
              >
                End Interview
              </Button>
            )}
          </div>

          {!isInterviewActive ? (
            <Card className="mb-6">
              <CardHeader>
                <h2 className="text-xl font-bold">Interview Setup</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Question Preview</h3>
                    <div className="space-y-4">
                      {mockQuestions.map(q => (
                        <div
                          key={q.id}
                          className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                            selectedQuestionId === q.id
                              ? 'bg-[#FDF1EE] border-[#D4836D]'
                              : 'bg-gray-50 border-gray-200 hover:border-[#D4836D]'
                          }`}
                          onClick={() => setSelectedQuestionId(q.id)}
                        >
                          <p className="text-gray-900">{q.question}</p>
                          <div className="flex gap-2 mt-2">
                            <Badge>{q.type}</Badge>
                            <Badge>{q.difficulty}</Badge>
                            <Badge>{q.timeLimit} min</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Video</h3>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          id="video" 
                          checked={videoEnabled} 
                          onChange={() => setVideoEnabled(!videoEnabled)} 
                          className="rounded text-[#D4836D]"
                        />
                        <label htmlFor="video">Enable video</label>
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={startInterview}
                    className="w-full py-3 bg-[#D4836D] text-white hover:bg-[#C27561]"
                  >
                    Start Interview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : isEnded ? (
            <div className="space-y-6">
              {/* Thank You Card */}
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold text-center text-[#D4836D]">
                    Interview Complete! 🎉
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <p className="text-gray-600">
                      Thank you for completing your mock interview. Here's your feedback:
                    </p>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex justify-center items-center mb-8">
                    <div className="bg-[#FDF1EE] px-4 py-2 rounded-full">
                      <span className="text-[#D4836D] font-bold text-xl">
                        {mockFeedback.rating}/5.0
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Strengths */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-green-600 flex items-center gap-2">
                        <span>✓</span> Strengths
                      </h3>
                      <ul className="space-y-2">
                        {mockFeedback.strengths.map((strength, index) => (
                          <li 
                            key={index}
                            className="bg-green-50 text-green-700 p-3 rounded-lg flex items-start gap-2"
                          >
                            <span className="text-green-500">•</span>
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Areas for Improvement */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-blue-600 flex items-center gap-2">
                        <span>↗</span> Areas for Improvement
                      </h3>
                      <ul className="space-y-2">
                        {mockFeedback.improvements.map((improvement, index) => (
                          <li 
                            key={index}
                            className="bg-blue-50 text-blue-700 p-3 rounded-lg flex items-start gap-2"
                          >
                            <span className="text-blue-500">•</span>
                            {improvement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <Link to="/home">
                      <Button className="bg-[#D4836D] text-white hover:bg-[#C27561] px-6 py-2">
                        Return to Dashboard
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left panel: Question and Timer */}
              <div className="space-y-6">
                {/* Timer Card */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold">Time Remaining</h3>
                      <div className="flex gap-2">
                        <IconButton onClick={togglePause}>
                          {isPaused ? "▶" : "⏸"}
                        </IconButton>
                        <IconButton onClick={restartInterview}>
                          🔄
                        </IconButton>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className={`text-4xl font-mono text-center py-3 ${timeRemaining < 300 ? 'text-red-500' : ''}`}>
                      ⏱️ {formatTime(timeRemaining)}
                    </div>
                  </CardContent>
                </Card>

                {/* Question Card */}
                <Card>
                  <CardHeader>
                    <h3 className="font-bold">Current Question</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-4">
                      {selectedQuestion.question}
                    </div>
                    <div className="flex gap-2">
                      <Badge>{selectedQuestion.type}</Badge>
                      <Badge>{selectedQuestion.difficulty}</Badge>
                      <Badge>{selectedQuestion.timeLimit} min</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right panel: Video */}
              <div className="space-y-6">
                {/* Video Preview */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold">Video Preview</h3>
                      <IconButton onClick={toggleVideo}>
                        {videoEnabled ? "📹" : "🚫"}
                      </IconButton>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center overflow-hidden">
                      {videoEnabled ? (
                        <video 
                          ref={videoRef} 
                          autoPlay 
                          playsInline
                          muted
                          style={{ transform: 'scaleX(-1)' }}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-gray-400 flex flex-col items-center">
                          <div className="text-3xl mb-2">🚫</div>
                          <span>Video disabled</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}