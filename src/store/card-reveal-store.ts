import { create } from 'zustand';

type CardRevealState = {
  isRevealed: boolean;
  setRevealed: (isRevealed: boolean) => void;
};

export const useCardRevealStore = create<CardRevealState>((set) => ({
  isRevealed: false,
  setRevealed: (isRevealed) => set({ isRevealed }),
}));
