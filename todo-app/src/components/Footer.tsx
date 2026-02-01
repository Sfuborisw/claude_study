import { useLanguage } from '../i18n/LanguageContext';

interface FooterProps {
  completedCount: number;
  onClearCompleted: () => void;
}

export function Footer({ completedCount, onClearCompleted }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <button
        className="clear-completed"
        onClick={onClearCompleted}
        disabled={completedCount === 0}
      >
        {t('clearCompleted')}
      </button>
    </footer>
  );
}
