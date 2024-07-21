// src/components/templates/NoteView.jsx
import React from 'react';
import NoteList from '../organisms/NoteList';
import Header from '../organisms/Header';

const NoteView = () => {
  return (
    <div className="p-4">
      <Header />
      <NoteList />
    </div>
  );
};

export default NoteView;
