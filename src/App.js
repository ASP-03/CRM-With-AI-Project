import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/Dashboard";
import Chatbot from "./components/chatbot";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Leads from "./pages/Leads";
import Analytics from "./pages/Analytics";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-grow">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
      </div>
      <Chatbot />
    </Router>
  );
};

export default App;
