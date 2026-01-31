interface FooterProps {
  completedCount: number;
  onClearCompleted: () => void;
}

export function Footer({ completedCount, onClearCompleted }: FooterProps) {
  return (
    <footer className="footer">
      <button
        className="clear-completed"
        onClick={onClearCompleted}
        disabled={completedCount === 0}
      >
        清除已完成
      </button>
    </footer>
  );
}
