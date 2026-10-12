import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react';
import { MotionConfig } from 'motion/react';
import { readStored, useStoredState } from './storage';

export type ThemeMode = 'light' | 'dark';
export type ViewMode = 'standard' | 'visual' | 'text';

interface Prefs {
  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
  toggleTheme: () => void;
  mode: ViewMode;
  setMode: (m: ViewMode) => void;
}

const PrefsContext = createContext<Prefs | null>(null);

function systemTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useStoredState<ThemeMode>('theme', readStored<ThemeMode | null>('theme', null) ?? systemTheme());
  const [mode, setMode] = useStoredState<ViewMode>('mode', 'standard');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('mode-text', mode === 'text');
    root.classList.toggle('mode-visual', mode === 'visual');
  }, [mode]);

  const value = useMemo<Prefs>(
    () => ({ theme, setTheme, toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark'), mode, setMode }),
    [theme, mode, setTheme, setMode],
  );

  return (
    <PrefsContext.Provider value={value}>
      <MotionConfig reducedMotion={mode === 'text' ? 'always' : 'user'}>{children}</MotionConfig>
    </PrefsContext.Provider>
  );
}

export function usePrefs(): Prefs {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error('usePrefs must be used inside PrefsProvider');
  return ctx;
}
