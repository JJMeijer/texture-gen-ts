import { create } from "zustand";
import { v4 as uuid } from "uuid";

import { Color, Palette, Size } from "@types";

interface TextureStore {
    palette: Palette;
    size: Size;
    addColor: () => void;
    updateColor: (id: string, color: Color) => void;
    removeColor: (id: string) => void;
}

export const useTextureStore = create<TextureStore>((set) => ({
    palette: {},
    size: {
        width: 400,
        height: 400,
    },
    addColor: () => set((state) => ({ palette: { ...state.palette, [uuid()]: { hex: "#999", prio: 1 } } })),
    updateColor: (id, color) => set((state) => ({ palette: { ...state.palette, [id]: color } })),
    removeColor: (id) =>
        set((state) => {
            const { [id]: _, ...palette } = state.palette;

            return {
                palette,
            };
        }),
}));
