import { Task, FilterType } from '../types';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  filter: FilterType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TaskList({ tasks, filter, onToggle, onDelete }: TaskListProps) {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    const emptyMessage =
      filter === 'all' ? '暫時冇待辦事項' :
      filter === 'pending' ? '冇未完成嘅事項' : '冇已完成嘅事項';

    return (
      <ul className="task-list">
        <li className="empty-state">
          <span>📝</span>
          {emptyMessage}
        </li>
      </ul>
    );
  }

  return (
    <ul className="task-list">
      {filteredTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
