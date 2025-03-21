import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import CommunityForum from "./pages/CommunityForum";
import Chatbot from "./pages/Chatbot";
import FAQs from "./pages/FAQs";
import Register from "./pages/Register";
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<CommunityForum />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

