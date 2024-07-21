// src/components/molecules/NoteForm.jsx
import React, { useState } from 'react';
import Button from '../atoms/Button';
import TextInput from '../atoms/TextInput';

const NoteForm = ({ onSubmit }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteTitle.trim() !== '' && noteContent.trim() !== '') {
      onSubmit(noteTitle, noteContent);
      setNoteTitle('');
      setNoteContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded shadow-md">
      <TextInput
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
        placeholder="Note Title"
        className="mb-2 w-full"
      />
      <textarea
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
        placeholder="Note Content"
        className="border rounded w-full h-20 mb-2 p-2"
      />
      <Button type="submit" className="w-full">
        Save Note
      </Button>
    </form>
  );
};

export default NoteForm;
