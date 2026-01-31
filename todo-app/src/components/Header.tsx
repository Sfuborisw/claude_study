interface HeaderProps {
  pendingCount: number;
}

export function Header({ pendingCount }: HeaderProps) {
  return (
    <header className="header">
      <h1>待辦事項</h1>
      <div className="stats">
        <span>{pendingCount}</span> 項待完成
      </div>
    </header>
  );
}
