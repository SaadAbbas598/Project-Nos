import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Auth pages
import Login from "./auth/login";
import Signup from "./auth/signup";

// Main components
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      {/* Navbar should appear on all pages except login/signup */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Dashboard/>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
