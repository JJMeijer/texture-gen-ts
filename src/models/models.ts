import { Dispatch, SetStateAction } from 'react';

export interface Color {
  hex: string;
  prio: number;
}

export interface Texture {
  core: {
    palette: Color[];
  };
  size: {
    height: number;
    width: number;
  };
}

export interface ContentProps {
  textureSettings: Texture;
}

export interface HeaderProps {
  setTextureSettings: Dispatch<SetStateAction<Texture>>;
}

export interface GenButtonProps {
  setTextureSettings: Dispatch<SetStateAction<Texture>>;
}

export interface ColorPickerProps {
  color: Color;
  colorIndex: number;
  setColors: Dispatch<SetStateAction<Color[]>>;
}
