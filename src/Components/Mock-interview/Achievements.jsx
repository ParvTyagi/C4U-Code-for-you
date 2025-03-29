import React from 'react';
import { Trophy, Star, Code, Rocket, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./Card";

export const Achievements = () => {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="bg-[#FDF1EE] border-b border-gray-100">
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-[#D4836D]" />
            Achievements & Badges
          </CardTitle>
          <span className="text-xs font-medium px-2 py-1 bg-amber-100 text-amber-700 rounded-full">3 New</span>
        </div>
        <CardDescription>Track your learning milestones and earn badges</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Recent Achievements</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square bg-[#FDF1EE] rounded-lg flex flex-col items-center justify-center p-2 border-2 border-[#D4836D]">
                <div className="w-10 h-10 rounded-full bg-[#D4836D] flex items-center justify-center mb-2">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <span className="text-xs text-[#D4836D] text-center font-medium">First Code Review</span>
              </div>
              <div className="aspect-square bg-[#FDF1EE] rounded-lg flex flex-col items-center justify-center p-2 border-2 border-[#D4836D]">
                <div className="w-10 h-10 rounded-full bg-[#D4836D] flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <span className="text-xs text-[#D4836D] text-center font-medium">5 Day Streak</span>
              </div>
              <div className="aspect-square bg-[#FDF1EE] rounded-lg flex flex-col items-center justify-center p-2 border-2 border-[#D4836D]">
                <div className="w-10 h-10 rounded-full bg-[#D4836D] flex items-center justify-center mb-2">
                  <Rocket className="h-5 w-5 text-white" />
                </div>
                <span className="text-xs text-[#D4836D] text-center font-medium">Quick Learner</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Next Challenges</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square bg-gray-50 rounded-lg flex flex-col items-center justify-center p-2 border border-gray-200">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                  <Target className="h-5 w-5 text-gray-400" />
                </div>
                <span className="text-xs text-gray-500 text-center">Complete Profile</span>
                <span className="text-[10px] text-gray-400 mt-1">2/3 steps</span>
              </div>
              <div className="aspect-square bg-gray-50 rounded-lg flex flex-col items-center justify-center p-2 border border-gray-200">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                  <Zap className="h-5 w-5 text-gray-400" />
                </div>
                <span className="text-xs text-gray-500 text-center">10 Day Streak</span>
                <span className="text-[10px] text-gray-400 mt-1">5/10 days</span>
              </div>
              <div className="aspect-square bg-gray-50 rounded-lg flex flex-col items-center justify-center p-2 border border-gray-200 relative group">
                <div className="absolute inset-0 bg-black/5 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-500">Coming Soon</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                  <Trophy className="h-5 w-5 text-gray-400" />
                </div>
                <span className="text-xs text-gray-500 text-center">Mystery Badge</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 border-t border-gray-100 p-4">
        <div className="w-full text-center">
          <p className="text-sm text-gray-600 mb-1">Total Achievements: <span className="font-medium text-[#D4836D]">12</span></p>
          <p className="text-xs text-gray-500">Keep learning to unlock more badges!</p>
        </div>
      </CardFooter>
    </Card>
  );
}; 