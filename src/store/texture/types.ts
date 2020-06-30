export interface Color {
  hex: string;
  prio: number;
}

export interface Size {
  height: number;
  width: number;
}

export interface Core {
  palette: Color[];
  size: Size;
}

export interface State {
  core: Core;
}

export const ADD_COLOR = 'ADD_COLOR';
export const UPDATE_COLOR_HEX = 'UPDATE_COLOR_HEX';
export const UPDATE_COLOR_PRIO = 'UPDATE_COLOR_PRIO';
export const REFRESH_CORE = 'REFRESH_CORE';

interface AddColorAction {
  type: typeof ADD_COLOR;
  payload: Color;
}

interface UpdateColorHexAction {
  type: typeof UPDATE_COLOR_HEX;
  value: string;
  colorIndex: number;
}

interface UpdateColorPrioAction {
  type: typeof UPDATE_COLOR_PRIO;
  value: number;
  colorIndex: number;
}

interface RefreshCoreAction {
  type: typeof REFRESH_CORE;
}

export type CoreActionTypes =
  | AddColorAction
  | UpdateColorHexAction
  | UpdateColorPrioAction
  | RefreshCoreAction;
