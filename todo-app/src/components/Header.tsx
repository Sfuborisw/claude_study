import { useLanguage } from '../i18n/LanguageContext';

interface HeaderProps {
  pendingCount: number;
}

export function Header({ pendingCount }: HeaderProps) {
  const { t } = useLanguage();

  return (
    <header className="header">
      <h1>{t('title')}</h1>
      <div className="stats">
        <span>{pendingCount}</span> {t('pendingItems')}
      </div>
    </header>
  );
}
