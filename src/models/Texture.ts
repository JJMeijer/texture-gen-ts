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

export interface TextureProps {
  setup: Texture;
}
