import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { CustomTooltip } from './custom-tooltip';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <CustomTooltip text="Toggle theme">
      <button onClick={toggleTheme} className="p-1.5 rounded-md transition-all duration-100 hover:bg-sidebar-accent">
        <Sun className="size-4 text-muted-foreground block rotate-0 transition-all dark:hidden dark:-rotate-90" />
        <Moon className="size-4 text-muted-foreground hidden rotate-90 transition-all dark:block dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </CustomTooltip>
  );
};

export { ThemeToggle };
