import React from 'react';
import { Rocket, CheckCircle, Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./Card";
import { Button } from "./Button";

export const CareerPathways = () => {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="bg-[#FDF1EE] border-b border-gray-100">
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-[#D4836D]" />
            Career Pathways
          </CardTitle>
          <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded-full">Personalized</span>
        </div>
        <CardDescription>Your career development journey</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-gray-900">Frontend Developer</h4>
              <span className="text-xs bg-[#FDF1EE] text-[#D4836D] px-2 py-1 rounded-full">In Progress</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>HTML & CSS Fundamentals</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>JavaScript Basics</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="h-4 w-4 border-2 border-[#D4836D] rounded-full mr-2" />
                <span>React Development</span>
              </div>
            </div>
            <div className="mt-3">
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-[#D4836D] rounded-full" style={{ width: '60%' }} />
              </div>
              <p className="text-xs text-gray-500 mt-1">60% Complete</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-gray-900">Full Stack Developer</h4>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Coming Soon</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-400">
                <Lock className="h-4 w-4 mr-2" />
                <span>Node.js & Express</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Lock className="h-4 w-4 mr-2" />
                <span>Database Design</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Lock className="h-4 w-4 mr-2" />
                <span>API Development</span>
              </div>
            </div>
            <Button className="w-full mt-4 bg-gray-100 text-gray-700 hover:bg-gray-200">Unlock Path</Button>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-gray-900">DevOps Engineer</h4>
              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">Advanced</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-400">
                <Lock className="h-4 w-4 mr-2" />
                <span>CI/CD Pipelines</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Lock className="h-4 w-4 mr-2" />
                <span>Cloud Services</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Lock className="h-4 w-4 mr-2" />
                <span>Container Orchestration</span>
              </div>
            </div>
            <Button className="w-full mt-4 bg-gray-100 text-gray-700 hover:bg-gray-200">Unlock Path</Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 border-t border-gray-100 p-4">
        <div className="w-full">
          <Button className="w-full bg-[#D4836D] text-white hover:bg-[#C27561]">View All Pathways</Button>
          <p className="text-xs text-gray-500 text-center mt-2">Unlock advanced paths with a premium subscription</p>
        </div>
      </CardFooter>
    </Card>
  );
}; 