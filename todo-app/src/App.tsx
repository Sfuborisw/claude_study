import { useState } from 'react';
import { FilterType } from './types';
import { useTasks } from './hooks/useTasks';
import { useLanguage } from './i18n/LanguageContext';
import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';
import { FilterBar } from './components/FilterBar';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <select
        value={language}
        onChange={e => setLanguage(e.target.value as 'en' | 'zh')}
        className="language-select"
      >
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>
    </div>
  );
}

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
      <LanguageSwitcher />
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
