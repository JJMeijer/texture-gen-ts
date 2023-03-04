import { create } from "zustand";

interface ColorPickerStore {
    openColorPicker: string;
    setOpenColorPicker: (id: string) => void;
}

export const useColorPickerStore = create<ColorPickerStore>((set) => ({
    openColorPicker: "",
    setOpenColorPicker: (id) => set(() => ({ openColorPicker: id })),
}));
