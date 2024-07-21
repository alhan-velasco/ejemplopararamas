// src/components/molecules/TaskCard.jsx
import React from 'react';
import Button from '../atoms/Button';
import Checkbox from '../atoms/Checkbox';

const TaskCard = ({ task, onComplete, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow-md flex justify-between items-center">
      <Checkbox checked={task.completed} onChange={() => onComplete(task.id)} />
      <div className="flex-1 ml-4">
        <h4 className={`${task.completed ? 'line-through' : ''}`}>{task.title}</h4>
      </div>
      <Button onClick={() => onDelete(task.id)} className="bg-red-500">
        Delete
      </Button>
    </div>
  );
};

export default TaskCard;
