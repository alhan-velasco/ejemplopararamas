// src/components/organisms/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="mb-4 flex justify-between items-center p-4 bg-blue-500 text-white">
      <h1 className="text-xl">Tasks and Notes</h1>
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/tasks" className="mr-4">Tasks</Link>
        <Link to="/notes">Notes</Link>
      </nav>
    </header>
  );
};

export default Header;
