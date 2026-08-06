import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={toggleTheme}
      className="hover-elevate active-elevate-2"
      data-testid="button-theme-toggle"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-primary" />
      ) : (
        <Moon className="h-5 w-5 text-primary" />
      )}
    </Button>
  );
}
