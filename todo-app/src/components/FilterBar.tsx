import { FilterType } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { TranslationKey } from '../i18n/translations';

interface FilterBarProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function FilterBar({ currentFilter, onFilterChange }: FilterBarProps) {
  const { t } = useLanguage();

  const filters: { value: FilterType; labelKey: TranslationKey }[] = [
    { value: 'all', labelKey: 'filterAll' },
    { value: 'pending', labelKey: 'filterPending' },
    { value: 'completed', labelKey: 'filterCompleted' }
  ];

  return (
    <div className="filters">
      {filters.map(filter => (
        <button
          key={filter.value}
          className={`filter-btn ${currentFilter === filter.value ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.value)}
        >
          {t(filter.labelKey)}
        </button>
      ))}
    </div>
  );
}
