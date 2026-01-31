import { useState, useEffect } from 'react';
import { Task, Priority } from '../types';

const STORAGE_KEY = 'tasks';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string, priority: Priority) => {
    if (!text.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      priority
    };

    setTasks(prev => [newTask, ...prev]);
  };

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(prev => prev.filter(task => !task.completed));
  };

  const pendingCount = tasks.filter(t => !t.completed).length;
  const completedCount = tasks.filter(t => t.completed).length;

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    clearCompleted,
    pendingCount,
    completedCount
  };
}
