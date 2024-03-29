import { create } from "zustand";
import { v4 as uuid } from "uuid";

import { Color, Palette } from "@types";
import { getRandomHexColor } from "@utility";

interface TextureStore {
    palette: Palette;
    update: number;
    addColor: () => void;
    updateColor: (id: string, color: Color) => void;
    removeColor: (id: string) => void;
    forceUpdate: () => void;
}

export const useTextureStore = create<TextureStore>((set) => ({
    palette: {
        [uuid()]: {
            hex: getRandomHexColor(),
            prio: 1,
        },
    },
    update: 1,
    addColor: () => set((state) => ({ palette: { ...state.palette, [uuid()]: { hex: getRandomHexColor(), prio: 1 } } })),
    updateColor: (id, color) => set((state) => ({ palette: { ...state.palette, [id]: color } })),
    removeColor: (id) =>
        set((state) => {
            const { [id]: _, ...palette } = state.palette;

            return {
                palette,
            };
        }),
    forceUpdate: () => set((state) => ({ update: state.update + 1 })),
}));
