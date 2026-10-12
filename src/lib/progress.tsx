import { createContext, useCallback, useContext, useMemo, type ReactNode } from 'react';
import { useStoredState } from './storage';

interface Progress {
  done: Record<string, boolean>;
  isDone: (id: string) => boolean;
  toggle: (id: string) => void;
  setMany: (ids: string[], value: boolean) => void;
  resetAll: () => void;
  known: Record<string, boolean>;
  setKnown: (id: string, value: boolean) => void;
  resetKnown: () => void;
}

const ProgressContext = createContext<Progress | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [done, setDone] = useStoredState<Record<string, boolean>>('checklist', {});
  const [known, setKnownState] = useStoredState<Record<string, boolean>>('flashcards-known', {});

  const toggle = useCallback((id: string) => setDone((d) => ({ ...d, [id]: !d[id] })), [setDone]);
  const setMany = useCallback(
    (ids: string[], value: boolean) =>
      setDone((d) => {
        const next = { ...d };
        for (const id of ids) next[id] = value;
        return next;
      }),
    [setDone],
  );
  const setKnown = useCallback((id: string, value: boolean) => setKnownState((k) => ({ ...k, [id]: value })), [setKnownState]);

  const value = useMemo<Progress>(
    () => ({
      done,
      isDone: (id) => !!done[id],
      toggle,
      setMany,
      resetAll: () => setDone({}),
      known,
      setKnown,
      resetKnown: () => setKnownState({}),
    }),
    [done, known, toggle, setMany, setKnown, setDone, setKnownState],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): Progress {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}
