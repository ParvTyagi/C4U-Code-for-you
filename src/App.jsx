import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import HomePageSimple from './Components/HomePageSimple';
import MockInterview from './Components/MockInterview';
import { LiveInterview } from './Components/Mock-interview/LiveInterview';
import { DSAInterview } from './Components/Mock-interview/DSAInterview';
import GetStarted from './Components/GetStarted';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/home" element={<HomePageSimple />} />
        <Route path="/career-pathways" element={<HomePageSimple />} />
        <Route path="/mock-interviews" element={<HomePageSimple />} />
        <Route path="/mock-interview" element={<MockInterview />} />
        <Route path="/learning-content" element={<HomePageSimple />} />
        <Route path="/badges" element={<HomePageSimple />} />
        <Route path="/roadmaps" element={<HomePageSimple />} />
        <Route path="/emotional-wellbeing" element={<HomePageSimple />} />
        <Route path="/live-interview" element={<LiveInterview />} />
        <Route path="/dsa-practice" element={<DSAInterview />} />
      </Routes>
    </Router>
  );
}

export default App;