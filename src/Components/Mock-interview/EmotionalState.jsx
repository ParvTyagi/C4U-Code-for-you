import React from 'react';
import { BrainCircuit, LineChart, ArrowUp, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./Card";
import { Button } from "./Button";

export const EmotionalState = () => {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="bg-[#FDF1EE] border-b border-gray-100">
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <BrainCircuit className="h-5 w-5 text-[#D4836D]" />
            Learning Analytics
          </CardTitle>
          <span className="text-xs font-medium px-2 py-1 bg-[#FDF1EE] text-[#D4836D] rounded-full">Real-time</span>
        </div>
        <CardDescription>Track your learning progress and emotional state</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-medium text-gray-900">Current Focus</h4>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">React Development</p>
                <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                  <ArrowUp className="h-3 w-3" />
                  <span>High Engagement</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="h-3 w-3" />
                <span>2h 15m today</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-medium text-gray-900">Learning Metrics</h4>
              <span className="text-xs text-gray-500">Last 7 days</span>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Focus Level</span>
                  <span className="text-[#D4836D] font-medium">85%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-[#D4836D] rounded-full" style={{ width: '85%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Comprehension</span>
                  <span className="text-[#D4836D] font-medium">92%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-[#D4836D] rounded-full" style={{ width: '92%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Engagement</span>
                  <span className="text-[#D4836D] font-medium">78%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-[#D4836D] rounded-full" style={{ width: '78%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 border-t border-gray-100 p-4">
        <div className="w-full space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <LineChart className="h-4 w-4 text-[#D4836D]" />
              <span className="text-sm text-gray-600">Learning trend:</span>
            </div>
            <span className="text-sm font-medium text-green-600">Improving</span>
          </div>
          <Button className="w-full bg-[#D4836D] text-white hover:bg-[#C27561]">View Detailed Analytics</Button>
        </div>
      </CardFooter>
    </Card>
  );
}; 