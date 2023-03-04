export interface Color {
    hex: string;
    prio: number;
}

export interface Palette {
    [key: string]: Color;
}
