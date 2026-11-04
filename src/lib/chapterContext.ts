import { createContext, useContext } from 'react';

export interface ChapterContextValue {
  subscribe: (listener: (progress: number) => void) => () => void;
  seek: (progress: number) => boolean;
}

export const ChapterContext = createContext<ChapterContextValue | null>(null);

export function useChapter(): ChapterContextValue | null {
  return useContext(ChapterContext);
}

const seekers = new Map<string, () => void>();

export function registerChapterSeeker(id: string, seeker: () => void): () => void {
  seekers.set(id, seeker);
  return () => {
    seekers.delete(id);
  };
}

export function goToChapter(id: string): void {
  seekers.get(id)?.();
}
