import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TodoApp from "./TodoApp";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Links */}
        <nav>
          <Link to="/" style={{ margin: "10px" }}>Home</Link>
          <Link to="/about" style={{ margin: "10px" }}>About Us</Link>
          <Link to="/contact" style={{ margin: "10px" }}>Contact Us</Link>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
