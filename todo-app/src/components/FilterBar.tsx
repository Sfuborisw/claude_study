import { FilterType } from '../types';

interface FilterBarProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export function FilterBar({ currentFilter, onFilterChange }: FilterBarProps) {
  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: '全部' },
    { value: 'pending', label: '待完成' },
    { value: 'completed', label: '已完成' }
  ];

  return (
    <div className="filters">
      {filters.map(filter => (
        <button
          key={filter.value}
          className={`filter-btn ${currentFilter === filter.value ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
