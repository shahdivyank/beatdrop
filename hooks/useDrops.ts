import { beats } from '@/db/__mock__/drops';
import { beatdrop, comment } from '@/types';
import { create } from 'zustand';

interface DropsState {
  drops: beatdrop[];
  addDrop: (drop: beatdrop) => void;
  addComment: (id: string, comment: comment) => void;
}

export const useDrops = create<DropsState>()((set) => ({
  drops: beats,

  addDrop: (drop: beatdrop) =>
    set(({ drops }) => ({ drops: [drop, ...drops] })),

  addComment: (id: string, comment: comment) =>
    set(({ drops }) => ({
      drops: drops.map((drop) => {
        const { did } = drop;
        if (did === id) {
          return { ...drop, comments: [...(drop.comments as []), comment] };
        } else {
          return drop;
        }
      }),
    })),
}));
