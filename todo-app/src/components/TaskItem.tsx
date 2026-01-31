import { Task, PRIORITY_COLORS } from '../types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div
        className="priority-bar"
        style={{ backgroundColor: PRIORITY_COLORS[task.priority] }}
      />
      <div className="checkbox" onClick={() => onToggle(task.id)} />
      <span className="task-text">{task.text}</span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        ×
      </button>
    </li>
  );
}
