import { useState } from 'react';
import { Priority } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface TaskInputProps {
  onAdd: (text: string, priority: Priority) => void;
}

export function TaskInput({ onAdd }: TaskInputProps) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const { t } = useLanguage();

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
          placeholder={t('placeholder')}
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
          <option value="high">{t('priorityHigh')}</option>
          <option value="medium">{t('priorityMedium')}</option>
          <option value="low">{t('priorityLow')}</option>
        </select>
        <button className="add-btn" onClick={handleSubmit}>
          {t('addButton')}
        </button>
      </div>
    </div>
  );
}
