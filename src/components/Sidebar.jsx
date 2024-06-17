// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [expanded, setExpanded] = useState({
    Chapter1: false,
    Chapter2: false,
    // Add more chapters as needed
  });

  const toggleChapter = (chapter) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [chapter]: !prevExpanded[chapter]
    }));
  };

  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <div onClick={() => toggleChapter('Chapter1')}>
              Chapter 1
            </div>
            {expanded.Chapter1 && (
              <ul>
                <li><Link to="/chapter1/section1">Section 1</Link></li>
                <li><Link to="/chapter1/section2">Section 2</Link></li>
                {/* Add more sections as needed */}
              </ul>
            )}
          </li>
          <li>
            <div onClick={() => toggleChapter('Chapter2')}>
              Chapter 2
            </div>
            {expanded.Chapter2 && (
              <ul>
                <li><Link to="/chapter2/section1">Section 1</Link></li>
                <li><Link to="/chapter2/section2">Section 2</Link></li>
                {/* Add more sections as needed */}
              </ul>
            )}
          </li>
          {/* Add more chapters as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
