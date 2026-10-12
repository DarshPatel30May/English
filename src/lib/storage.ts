import { useCallback, useEffect, useState } from 'react';

const PREFIX = 'hsc:';

export function readStored<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw === null ? fallback : (JSON.parse(raw) as T);
  } catch {
    return fallback;
  }
}

export function writeStored<T>(key: string, value: T): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    /* storage unavailable (private mode etc.) — keep working in memory */
  }
}

/** useState that persists to localStorage under the `hsc:` namespace. */
export function useStoredState<T>(key: string, fallback: T) {
  const [value, setValue] = useState<T>(() => readStored(key, fallback));
  useEffect(() => writeStored(key, value), [key, value]);
  const reset = useCallback(() => setValue(fallback), [fallback]);
  return [value, setValue, reset] as const;
}
