import { beats } from "@/db/__mock__/drops";
import { beatdrop } from "@/types";
import { create } from "zustand";

interface DropsState {
  drops: beatdrop[];
  addDrop: (drop: beatdrop) => void;
}

export const useDrops = create<DropsState>()((set) => ({
  drops: beats,

  addDrop: (drop: beatdrop) =>
    set(({ drops }) => ({ drops: [drop, ...drops] })),
}));
