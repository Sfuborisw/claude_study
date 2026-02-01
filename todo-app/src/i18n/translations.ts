export const translations = {
  en: {
    title: 'Todo List',
    pendingItems: 'items pending',
    placeholder: 'Add a new task...',
    addButton: 'Add',
    filterAll: 'All',
    filterPending: 'Pending',
    filterCompleted: 'Completed',
    clearCompleted: 'Clear Completed',
    priorityHigh: 'High',
    priorityMedium: 'Medium',
    priorityLow: 'Low'
  },
  zh: {
    title: '待辦事項',
    pendingItems: '項待完成',
    placeholder: '新增待辦事項...',
    addButton: '新增',
    filterAll: '全部',
    filterPending: '待完成',
    filterCompleted: '已完成',
    clearCompleted: '清除已完成',
    priorityHigh: '高',
    priorityMedium: '中',
    priorityLow: '低'
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
