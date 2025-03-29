import { Link } from "react-router-dom";
import { BrainCircuit, LineChart, Rocket, GraduationCap } from "lucide-react";
import { Button } from "./Mock-interview/Button";
import { EmotionalState } from "./Mock-interview/EmotionalState";
import { MockInterviews } from "./Mock-interview/MockInterviews";
import { CareerPathways } from "./Mock-interview/CareerPathways";
import { Achievements } from "./Mock-interview/Achievements";

export default function HomePageSimple() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with navigation */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#D4836D]">
                Code 4U
              </span>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-[#FDF1EE] text-[#D4836D]">BETA</span>
            </div>
            <nav className="flex space-x-4 items-center">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link to="/roadmaps" className="text-gray-600 hover:text-gray-900">
                Roadmaps
              </Link>
              <Link to="/badges" className="text-gray-600 hover:text-gray-900">
                Badges
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Welcome Banner */}
        <div className="bg-[#D4836D] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-start">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Your Journey to Tech Excellence
                </h1>
                <p className="text-white/90 text-lg mb-8">
                  Personalized learning paths, emotional intelligence tracking, and career development tools designed specifically for aspiring developers. Join us to unlock your full potential in tech.
                </p>
                <Button className="bg-white text-[#D4836D] hover:bg-white/90">
                  Start Learning
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white hover:bg-white/20 transition-all cursor-pointer">
                  <BrainCircuit className="h-10 w-10 mb-2" />
                  <h3 className="font-semibold text-lg">Smart Learning</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white hover:bg-white/20 transition-all cursor-pointer">
                  <LineChart className="h-10 w-10 mb-2" />
                  <h3 className="font-semibold text-lg">Track Progress</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white hover:bg-white/20 transition-all cursor-pointer">
                  <Rocket className="h-10 w-10 mb-2" />
                  <h3 className="font-semibold text-lg">Career Growth</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white hover:bg-white/20 transition-all cursor-pointer">
                  <GraduationCap className="h-10 w-10 mb-2" />
                  <h3 className="font-semibold text-lg">Certifications</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Learning Dashboard</h2>
            <p className="text-gray-600">Everything you need to succeed in your coding journey, all in one place</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EmotionalState />
            <MockInterviews />
            <CareerPathways />
            <Achievements />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Code 4U</h3>
              <p className="text-gray-600">Your path to coding excellence</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Learning</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Career Pathways</li>
                <li>Mock Interviews</li>
                <li>Coding Challenges</li>
                <li>Progress Tracking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Documentation</li>
                <li>Tutorials</li>
                <li>Blog</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Code of Conduct</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Code 4U. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}