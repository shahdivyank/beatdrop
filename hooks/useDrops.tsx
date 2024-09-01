import { beats } from "@/db/__mock__/drops";
import { create } from "zustand";

export const useDrops = create(() => ({
  drops: beats,
}));
