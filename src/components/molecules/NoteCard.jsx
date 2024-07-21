// src/components/molecules/NoteCard.jsx
import React from 'react';
import Button from '../atoms/Button';

const NoteCard = ({ note, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow-md mb-2">
      <h4 className="font-bold mb-2">{note.title}</h4>
      <p className="mb-2">{note.content}</p>
      <Button onClick={() => onDelete(note.id)} className="bg-red-500">
        Delete
      </Button>
    </div>
  );
};

export default NoteCard;
