export default function BottomNav({ activeView, onSwitchView, onOpenModal }) {
  return (
    <div className="nav-container">
      <button
        className={`nav-item ${activeView === 'home' ? 'active' : ''}`}
        onClick={() => onSwitchView('home')}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
        </svg>
      </button>
      <div className="fab-main" onClick={onOpenModal}>
        +
      </div>
      <button
        className={`nav-item ${activeView === 'settings' ? 'active' : ''}`}
        onClick={() => onSwitchView('settings')}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 16a1 1 0 110-2 1 1 0 010 2zm1-5a1 1 0 11-2 0v-4a1 1 0 112 0v4z"></path>
        </svg>
      </button>
    </div>
  );
}
