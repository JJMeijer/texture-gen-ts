export interface Color {
    hex: string;
    prio: number;
}

export interface Size {
    height: number;
    width: number;
}

export interface Palette {
    [key: string]: Color;
}
