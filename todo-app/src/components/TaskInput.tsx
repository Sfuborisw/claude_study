import { useState } from 'react';
import { Priority, PRIORITY_LABELS } from '../types';

interface TaskInputProps {
  onAdd: (text: string, priority: Priority) => void;
}

export function TaskInput({ onAdd }: TaskInputProps) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');

  const handleSubmit = () => {
    if (text.trim()) {
      onAdd(text, priority);
      setText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="input-section">
      <div className="input-group">
        <input
          type="text"
          className="task-input"
          placeholder="新增待辦事項..."
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          autoComplete="off"
        />
        <select
          className="priority-select"
          value={priority}
          onChange={e => setPriority(e.target.value as Priority)}
        >
          <option value="high">{PRIORITY_LABELS.high}</option>
          <option value="medium">{PRIORITY_LABELS.medium}</option>
          <option value="low">{PRIORITY_LABELS.low}</option>
        </select>
        <button className="add-btn" onClick={handleSubmit}>
          新增
        </button>
      </div>
    </div>
  );
}
