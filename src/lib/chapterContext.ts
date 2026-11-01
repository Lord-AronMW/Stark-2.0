import { createContext, useContext } from 'react';

export interface ChapterContextValue {
  subscribe: (listener: (progress: number) => void) => () => void;
  seek: (progress: number) => boolean;
}

export const ChapterContext = createContext<ChapterContextValue | null>(null);

export function useChapter(): ChapterContextValue | null {
  return useContext(ChapterContext);
}
