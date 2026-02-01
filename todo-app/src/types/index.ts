export type Priority = 'high' | 'medium' | 'low';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
  priority: Priority;
}

export type FilterType = 'all' | 'pending' | 'completed';

export const PRIORITY_COLORS: Record<Priority, string> = {
  high: '#ff4757',
  medium: '#ffa502',
  low: '#2ed573'
};
