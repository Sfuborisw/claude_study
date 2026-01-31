import { useState } from 'react';
import { FilterType } from './types';
import { useTasks } from './hooks/useTasks';
import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';
import { FilterBar } from './components/FilterBar';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';

function App() {
  const [filter, setFilter] = useState<FilterType>('all');
  const {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    clearCompleted,
    pendingCount,
    completedCount
  } = useTasks();

  return (
    <div className="container">
      <Header pendingCount={pendingCount} />
      <TaskInput onAdd={addTask} />
      <FilterBar currentFilter={filter} onFilterChange={setFilter} />
      <TaskList
        tasks={tasks}
        filter={filter}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
      <Footer completedCount={completedCount} onClearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
