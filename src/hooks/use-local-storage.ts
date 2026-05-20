"use client";

import { useCallback, useSyncExternalStore } from "react";

function getStoredValue<T>(key: string, initialValue: T): T {
  if (typeof window === "undefined") return initialValue;
  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : initialValue;
  } catch {
    return initialValue;
  }
}

const subscribers = new Map<string, Set<() => void>>();

function notifySubscribers(key: string) {
  subscribers.get(key)?.forEach((cb) => cb());
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const subscribe = useCallback(
    (callback: () => void) => {
      if (!subscribers.has(key)) {
        subscribers.set(key, new Set());
      }
      subscribers.get(key)!.add(callback);
      return () => {
        subscribers.get(key)?.delete(callback);
      };
    },
    [key],
  );

  const getSnapshot = useCallback(
    () => getStoredValue(key, initialValue),
    [key, initialValue],
  );

  const getServerSnapshot = useCallback(() => initialValue, [initialValue]);

  const storedValue = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      const current = getStoredValue(key, initialValue);
      const newValue = value instanceof Function ? value(current) : value;
      try {
        window.localStorage.setItem(key, JSON.stringify(newValue));
      } catch {
        // localStorage not available
      }
      notifySubscribers(key);
    },
    [key, initialValue],
  );

  return [storedValue, setValue];
}
