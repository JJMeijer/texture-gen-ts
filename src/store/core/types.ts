export interface Color {
  hex: string;
  prio: number;
}

export interface Size {
  height: number;
  width: number;
}

export interface CoreState {
  palette: Color[];
  size: Size;
}

export const ADD_COLOR = 'ADD_COLOR';
export const UPDATE_COLOR_HEX = 'UPDATE_COLOR_HEX';

interface AddColorAction {
  type: typeof ADD_COLOR;
  payload: Color;
}

interface UpdateColorHexAction {
  type: typeof UPDATE_COLOR_HEX;
  value: string;
  colorIndex: number;
}

export type CoreActionTypes = AddColorAction | UpdateColorHexAction;
