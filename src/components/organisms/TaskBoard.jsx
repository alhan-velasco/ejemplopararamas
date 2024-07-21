// src/components/organisms/TaskBoard.jsx
import React, { useState } from 'react';
import TaskCard from '../molecules/TaskCard';
import Button from '../atoms/Button';
import TextInput from '../atoms/TextInput';

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const completeTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <div className="mb-4 flex">
        <TextInput value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add a new task" />
        <Button onClick={addTask} className="ml-2">
          Add
        </Button>
      </div>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} onComplete={completeTask} onDelete={deleteTask} />
      ))}
    </div>
  );
};

export default TaskBoard;
