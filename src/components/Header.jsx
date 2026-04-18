import { getCurrentDate } from '../utils';

export default function Header() {
  return (
    <header>
      <div className="brand">
        <div className="brand-dot"></div>
        Your Manage
      </div>
      <div className="date-display">{getCurrentDate()}</div>
    </header>
  );
}
