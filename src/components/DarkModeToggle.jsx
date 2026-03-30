import { useTheme } from '../hooks/useTheme';
import './DarkModeToggle.css';

export default function DarkModeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button 
      className="dark-mode-toggle" 
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      <span className="material-symbols-outlined">
        {isDark ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
}
