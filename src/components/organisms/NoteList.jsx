// src/components/organisms/NoteList.jsx
import React, { useState } from 'react';
import NoteForm from '../molecules/NoteForm';
import NoteCard from '../molecules/NoteCard';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (title, content) => {
    setNotes([...notes, { id: Date.now(), title, content }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div>
      <NoteForm onSubmit={addNote} />
      {notes.map(note => (
        <NoteCard key={note.id} note={note} onDelete={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
