import { Palette } from "@types";

export const getColorChoicesArray = (palette: Palette): string[] => {
    return Object.values(palette).reduce((result, { hex, prio }) => {
        return [...result, ...Array(prio).fill(hex)];
    }, [] as string[]);
};
