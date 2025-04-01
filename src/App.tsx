import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import meImage from "./public/me.png";

const App = () => {
  return (
    <Router>
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <img src={meImage} alt="Profile" />
          <h1 className="text-3xl font-bold mb-2">Emma Morris</h1>

          {/* ✨ Emojis row for fun */}
          <div className="flex justify-center gap-3 mb-2 text-2xl">
            <span>💓</span>
            <span>💐</span>
            <span>☀️</span>
            <span>🏝️</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mb-10">
          <Link to="/" className="text-gray-600 hover:text-black">
            home
          </Link>
          <span className="text-gray-300">|</span>
          <Link to="/projects" className="text-gray-600 hover:text-black">
            projects
          </Link>
          <span className="text-gray-300">|</span>
          <Link to="/resume" className="text-gray-600 hover:text-black">
            resume
          </Link>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        {/* Find me Section */}
        <div className="text-center mt-12">
          <p className="italic text-gray-600 mb-4">find me on the interwebs!</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/e2morris33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/emma-morris2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:e2morris@stanford.edu"
              className="text-gray-600 hover:text-black"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
