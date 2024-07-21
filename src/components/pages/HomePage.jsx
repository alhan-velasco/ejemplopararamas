// src/components/pages/HomePage.jsx
import React from 'react';
import Header from '../organisms/Header';

const HomePage = () => {
  return (
    <div className="p-4">
      <Header />
      <div className="text-center mt-8">
        <h2 className="text-2xl">Welcome to Tasks and Notes</h2>
        <p className="mt-4">Manage your tasks and notes efficiently.</p>
      </div>
    </div>
  );
};

export default HomePage;
