import React from 'react';
import { Rocket, Video, Code, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./Card";
import { Button } from "./Button";

export const MockInterviews = () => {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="bg-[#FDF1EE] border-b border-gray-100">
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5 text-[#D4836D]" />
            Live Mock Interviews
          </CardTitle>
          <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded-full">Live Now</span>
        </div>
        <CardDescription>Practice technical interviews with real-time feedback</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-gray-900">Live Frontend Interview</h4>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full animate-pulse">Live</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">React Component Architecture & Performance</p>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Difficulty: Advanced</span>
              <span>45 min</span>
            </div>
            <Link to="/live-interview">
              <Button className="w-full mt-3 bg-[#D4836D] text-white hover:bg-[#C27561]">Join Now</Button>
            </Link>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-gray-900">Frontend Challenge</h4>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Available</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Build a Responsive Dashboard</p>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Difficulty: Medium</span>
              <span>30 min</span>
            </div>
            <Button className="w-full mt-3 bg-gray-100 text-gray-700 hover:bg-gray-200">Practice Now</Button>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-gray-900">System Design</h4>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Scheduled</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">Design a Real-time Chat Application</p>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Difficulty: Hard</span>
              <span>60 min</span>
            </div>
            <div className="mt-3 text-xs text-gray-500">Starts in 2 hours</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 border-t border-gray-100 p-4">
        <div className="w-full space-y-2">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Next available slot:</span>
            <span className="font-medium">Today, 3:00 PM</span>
          </div>
          <Button className="w-full bg-[#D4836D] text-white hover:bg-[#C27561]">Schedule Interview</Button>
        </div>
      </CardFooter>
    </Card>
  );
}; 