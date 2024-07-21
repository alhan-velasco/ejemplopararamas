// src/components/templates/TaskView.jsx
import React from 'react';
import TaskBoard from '../organisms/TaskBoard';
import Header from '../organisms/Header';

const TaskView = () => {
  return (
    <div className="p-4">
      <Header />
      <TaskBoard />
    </div>
  );
};

export default TaskView;
